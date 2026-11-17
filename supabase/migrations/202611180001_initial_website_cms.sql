-- Grobaltech website content and enquiries
-- Apply this migration in the Supabase SQL Editor for the Grobaltech website project.

create table if not exists public.user_roles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  role text not null check (role in ('admin', 'editor')),
  created_at timestamptz not null default now()
);

create or replace function public.can_manage_site_content()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.user_roles
    where user_id = auth.uid() and role in ('admin', 'editor')
  );
$$;

create or replace function public.is_site_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.user_roles
    where user_id = auth.uid() and role = 'admin'
  );
$$;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table if not exists public.services (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  summary text not null default '',
  body text not null default '',
  deliverables jsonb not null default '[]'::jsonb,
  cover_image text,
  status text not null default 'draft' check (status in ('draft', 'published')),
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  category text not null default '',
  summary text not null default '',
  body text not null default '',
  capabilities jsonb not null default '[]'::jsonb,
  cover_image text,
  status text not null default 'draft' check (status in ('draft', 'published')),
  featured boolean not null default false,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.solutions (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  category text not null default '',
  summary text not null default '',
  body text not null default '',
  capabilities jsonb not null default '[]'::jsonb,
  cover_image text,
  status text not null default 'draft' check (status in ('draft', 'published')),
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.team_members (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role_title text not null,
  biography text not null default '',
  photo_url text,
  email text,
  social_links jsonb not null default '{}'::jsonb,
  status text not null default 'draft' check (status in ('draft', 'published')),
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  person_name text not null,
  organisation text not null default '',
  role_title text not null default '',
  quote text not null,
  photo_url text,
  status text not null default 'draft' check (status in ('draft', 'published')),
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  excerpt text not null default '',
  body text not null default '',
  cover_image text,
  author_name text not null default 'Grobaltech Technologies',
  status text not null default 'draft' check (status in ('draft', 'published')),
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.contact_leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  service text not null default '',
  message text not null,
  status text not null default 'new' check (status in ('new', 'in_progress', 'closed', 'spam')),
  created_at timestamptz not null default now()
);

create table if not exists public.site_settings (
  setting_key text primary key,
  setting_value jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.user_roles enable row level security;
alter table public.services enable row level security;
alter table public.projects enable row level security;
alter table public.solutions enable row level security;
alter table public.team_members enable row level security;
alter table public.testimonials enable row level security;
alter table public.blog_posts enable row level security;
alter table public.contact_leads enable row level security;
alter table public.site_settings enable row level security;

create policy "Users can read their own role or admins can read all roles"
on public.user_roles for select to authenticated
using (user_id = auth.uid() or public.is_site_admin());

create policy "Content is public when published"
on public.services for select to anon, authenticated
using (status = 'published' or public.can_manage_site_content());
create policy "Content managers manage services"
on public.services for all to authenticated
using (public.can_manage_site_content()) with check (public.can_manage_site_content());

create policy "Content is public when published"
on public.projects for select to anon, authenticated
using (status = 'published' or public.can_manage_site_content());
create policy "Content managers manage projects"
on public.projects for all to authenticated
using (public.can_manage_site_content()) with check (public.can_manage_site_content());

create policy "Content is public when published"
on public.solutions for select to anon, authenticated
using (status = 'published' or public.can_manage_site_content());
create policy "Content managers manage solutions"
on public.solutions for all to authenticated
using (public.can_manage_site_content()) with check (public.can_manage_site_content());

create policy "Published team profiles are public"
on public.team_members for select to anon, authenticated
using (status = 'published' or public.can_manage_site_content());
create policy "Content managers manage team profiles"
on public.team_members for all to authenticated
using (public.can_manage_site_content()) with check (public.can_manage_site_content());

create policy "Published testimonials are public"
on public.testimonials for select to anon, authenticated
using (status = 'published' or public.can_manage_site_content());
create policy "Content managers manage testimonials"
on public.testimonials for all to authenticated
using (public.can_manage_site_content()) with check (public.can_manage_site_content());

create policy "Published articles are public"
on public.blog_posts for select to anon, authenticated
using ((status = 'published' and published_at <= now()) or public.can_manage_site_content());
create policy "Content managers manage articles"
on public.blog_posts for all to authenticated
using (public.can_manage_site_content()) with check (public.can_manage_site_content());

create policy "Visitors can submit valid enquiries"
on public.contact_leads for insert to anon, authenticated
with check (
  char_length(trim(name)) between 2 and 120
  and char_length(trim(email)) between 5 and 254
  and position('@' in email) > 1
  and char_length(trim(message)) between 5 and 10000
);
create policy "Admins can review enquiries"
on public.contact_leads for select to authenticated
using (public.is_site_admin());
create policy "Admins can update enquiry status"
on public.contact_leads for update to authenticated
using (public.is_site_admin()) with check (public.is_site_admin());

create policy "Public can read published site settings"
on public.site_settings for select to anon, authenticated
using (setting_key like 'public_%' or public.can_manage_site_content());
create policy "Content managers manage site settings"
on public.site_settings for all to authenticated
using (public.can_manage_site_content()) with check (public.can_manage_site_content());

drop trigger if exists services_set_updated_at on public.services;
create trigger services_set_updated_at before update on public.services for each row execute function public.set_updated_at();
drop trigger if exists projects_set_updated_at on public.projects;
create trigger projects_set_updated_at before update on public.projects for each row execute function public.set_updated_at();
drop trigger if exists solutions_set_updated_at on public.solutions;
create trigger solutions_set_updated_at before update on public.solutions for each row execute function public.set_updated_at();
drop trigger if exists team_members_set_updated_at on public.team_members;
create trigger team_members_set_updated_at before update on public.team_members for each row execute function public.set_updated_at();
drop trigger if exists testimonials_set_updated_at on public.testimonials;
create trigger testimonials_set_updated_at before update on public.testimonials for each row execute function public.set_updated_at();
drop trigger if exists blog_posts_set_updated_at on public.blog_posts;
create trigger blog_posts_set_updated_at before update on public.blog_posts for each row execute function public.set_updated_at();
drop trigger if exists site_settings_set_updated_at on public.site_settings;
create trigger site_settings_set_updated_at before update on public.site_settings for each row execute function public.set_updated_at();

-- After creating the first administrator in Supabase Auth, grant the role manually:
-- insert into public.user_roles (user_id, role) values ('AUTH_USER_UUID_HERE', 'admin');
-- Do not add a public self-service role assignment policy.

-- Explicit API grants; row-level security still decides which rows each caller can access.
grant usage on schema public to anon, authenticated;
grant select on public.services, public.projects, public.solutions, public.team_members, public.testimonials, public.blog_posts, public.site_settings to anon, authenticated;
grant insert, update, delete on public.services, public.projects, public.solutions, public.team_members, public.testimonials, public.blog_posts, public.site_settings to authenticated;
grant select on public.user_roles to authenticated;
grant insert on public.contact_leads to anon, authenticated;
grant select, update on public.contact_leads to authenticated;
