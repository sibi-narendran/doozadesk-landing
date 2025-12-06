
-- Create partners_signup table
create table public.partners_signup (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  first_name text not null,
  last_name text not null,
  email text not null,
  phone_country text not null,
  phone text not null,
  industry text not null,
  website text,
  linkedin text
);

-- Enable RLS
alter table public.partners_signup enable row level security;

-- Create policy to allow inserting data (public access for signup)
create policy "Enable insert for everyone" on public.partners_signup 
  for insert with check (true);

-- Create policy to allow reading only own data (optional, or just restrict read)
-- For now, we might just want to allow insert. Admin can read via dashboard.

