# Live setup checklist

## 1. GitHub repository

1. Open GitHub and create a new repository.
2. Recommended repository name: `khairpur-date-palm-nursery`
3. Keep it public if you want free GitHub Pages hosting.
4. Do not initialize with a README, because this folder is already a Git repository.

After GitHub shows the new repository URL, run these commands from this folder:

```powershell
git remote add origin https://github.com/YOUR_USERNAME/khairpur-date-palm-nursery.git
git branch -M master
git push -u origin master
```

## 2. GitHub Pages

1. Open the repository on GitHub.
2. Go to Settings > Pages.
3. Under Build and deployment, choose Source: GitHub Actions.
4. Open the Actions tab and wait for "Deploy GitHub Pages" to finish.

The default live URL will be:

```text
https://YOUR_USERNAME.github.io/khairpur-date-palm-nursery/
```

If you later connect a custom domain, add a `CNAME` file containing only the domain name.

## 3. Supabase database

1. Open the Supabase project.
2. Go to SQL Editor.
3. Run `supabase/schema.sql`.
4. Then run `supabase/admin-rls.sql`.
5. Go to Authentication > Users and create the owner admin user.
6. Copy the new user's UUID.
7. Run this SQL, replacing the UUID and name:

```sql
insert into public.admin_users (user_id, display_name)
values ('PASTE_AUTH_USER_UUID_HERE', 'Owner')
on conflict (user_id) do update set display_name = excluded.display_name;
```

## 4. Supabase keys

The website uses `supabase-config.js`.

Only use the Project URL and anon/publishable key in that file. Never place the Supabase `service_role` key in this website or in GitHub.

## 5. Final test

After the GitHub Pages site is live:

1. Open the live URL.
2. Confirm the homepage loads.
3. Open `/admin.html`.
4. Create or enter your device PIN.
5. Go to Backup & Settings.
6. Sign in with the Supabase admin email/password.
7. Add one test media item as a draft first.
8. Publish it and confirm it appears in the homepage Pictures & Videos section.
