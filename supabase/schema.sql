-- Khairpur Date Palm & Nursery: production database and media storage
-- Run once in Supabase SQL Editor as the project owner.

create extension if not exists pgcrypto;

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  customer text not null,
  phone text not null,
  city text,
  type text not null default 'Plant enquiry',
  product text not null,
  quantity text,
  amount numeric(14,2) not null default 0 check (amount >= 0),
  status text not null default 'New lead' check (status in ('New lead','Quoted','Confirmed','In progress','Delivered','Completed','Lost')),
  followup date,
  notes text,
  created_by uuid default auth.uid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.workers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  role text not null,
  area text,
  joined date,
  status text not null default 'Active' check (status in ('Active','On leave','Inactive')),
  emergency text,
  notes text,
  created_by uuid default auth.uid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.activity_logs (
  id uuid primary key default gen_random_uuid(),
  action text not null,
  detail text not null,
  actor uuid default auth.uid(),
  created_at timestamptz not null default now()
);

create table if not exists public.media (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null,
  description text,
  media_type text not null check (media_type in ('image','video')),
  mime_type text not null,
  storage_path text not null unique,
  public_url text not null,
  size_bytes bigint not null check (size_bytes > 0),
  published boolean not null default false,
  sort_order integer not null default 0,
  created_by uuid default auth.uid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.set_updated_at() returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end $$;

drop trigger if exists orders_updated_at on public.orders;
create trigger orders_updated_at before update on public.orders for each row execute function public.set_updated_at();
drop trigger if exists workers_updated_at on public.workers;
create trigger workers_updated_at before update on public.workers for each row execute function public.set_updated_at();
drop trigger if exists media_updated_at on public.media;
create trigger media_updated_at before update on public.media for each row execute function public.set_updated_at();

alter table public.orders enable row level security;
alter table public.workers enable row level security;
alter table public.activity_logs enable row level security;
alter table public.media enable row level security;

drop policy if exists "admin orders" on public.orders;
create policy "admin orders" on public.orders for all to authenticated using (true) with check (true);
drop policy if exists "admin workers" on public.workers;
create policy "admin workers" on public.workers for all to authenticated using (true) with check (true);
drop policy if exists "admin logs" on public.activity_logs;
create policy "admin logs" on public.activity_logs for all to authenticated using (true) with check (true);
drop policy if exists "admin media" on public.media;
create policy "admin media" on public.media for all to authenticated using (true) with check (true);
drop policy if exists "public published media" on public.media;
create policy "public published media" on public.media for select to anon using (published = true);

insert into storage.buckets (id,name,public,file_size_limit,allowed_mime_types)
values ('business-media','business-media',true,104857600,array['image/jpeg','image/png','image/webp','video/mp4','video/webm'])
on conflict (id) do update set public=excluded.public,file_size_limit=excluded.file_size_limit,allowed_mime_types=excluded.allowed_mime_types;

drop policy if exists "public media read" on storage.objects;
create policy "public media read" on storage.objects for select to public using (bucket_id='business-media');
drop policy if exists "authenticated media upload" on storage.objects;
create policy "authenticated media upload" on storage.objects for insert to authenticated with check (bucket_id='business-media');
drop policy if exists "authenticated media update" on storage.objects;
create policy "authenticated media update" on storage.objects for update to authenticated using (bucket_id='business-media') with check (bucket_id='business-media');
drop policy if exists "authenticated media delete" on storage.objects;
create policy "authenticated media delete" on storage.objects for delete to authenticated using (bucket_id='business-media');

create index if not exists orders_status_idx on public.orders(status);
create index if not exists orders_followup_idx on public.orders(followup);
create index if not exists workers_status_idx on public.workers(status);
create index if not exists media_published_created_idx on public.media(published,created_at desc);

