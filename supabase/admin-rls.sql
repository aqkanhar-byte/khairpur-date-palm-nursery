-- Restrict business operations to explicitly allowlisted Supabase users.
create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  created_at timestamptz not null default now()
);
alter table public.admin_users enable row level security;

create or replace function public.is_admin() returns boolean
language sql stable security definer set search_path=public
as $$ select exists(select 1 from public.admin_users where user_id=auth.uid()) $$;
revoke all on function public.is_admin() from public;
grant execute on function public.is_admin() to authenticated, anon;

drop policy if exists "admin list self" on public.admin_users;
create policy "admin list self" on public.admin_users for select to authenticated using (user_id=auth.uid());

drop policy if exists "admin orders" on public.orders;
create policy "admin orders" on public.orders for all to authenticated using (public.is_admin()) with check (public.is_admin());
drop policy if exists "admin workers" on public.workers;
create policy "admin workers" on public.workers for all to authenticated using (public.is_admin()) with check (public.is_admin());
drop policy if exists "admin logs" on public.activity_logs;
create policy "admin logs" on public.activity_logs for all to authenticated using (public.is_admin()) with check (public.is_admin());
drop policy if exists "admin media" on public.media;
create policy "admin media" on public.media for all to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists "authenticated media upload" on storage.objects;
create policy "authenticated media upload" on storage.objects for insert to authenticated with check (bucket_id='business-media' and public.is_admin());
drop policy if exists "authenticated media update" on storage.objects;
create policy "authenticated media update" on storage.objects for update to authenticated using (bucket_id='business-media' and public.is_admin()) with check (bucket_id='business-media' and public.is_admin());
drop policy if exists "authenticated media delete" on storage.objects;
create policy "authenticated media delete" on storage.objects for delete to authenticated using (bucket_id='business-media' and public.is_admin());

