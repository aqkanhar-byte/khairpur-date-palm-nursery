# Supabase production connection

1. Create a Supabase project in the closest suitable region.
2. Open SQL Editor and run `supabase/schema.sql` once.
3. Run `supabase/admin-rls.sql`, create the owner Auth user, then insert that user ID into `public.admin_users`. Disable public sign-ups unless required.
4. Copy `supabase-config.example.js` to `supabase-config.js` and add Project URL + anon key only.
5. Never expose the `service_role` key in the website or GitHub.
6. Connect GitHub Pages after testing login, CRUD, media upload, public gallery and RLS denial for anonymous writes.

The existing local admin remains operational until the Supabase adapter is enabled and verified.
