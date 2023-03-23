BEGIN TRANSACTION

CREATE TABLE jobs (
    id SERIAL,
    title TEXT NOT NULL,
    clientName TEXT NOT NULL,
    clientPhoneNumber TEXT NOT NULL,
    clientEmail TEXT NOT NULL,
    jobStatus TEXT NOT NULL,
    location TEXT NOT NULL,
    description TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(), 
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(), 
    userId INTEGER NOT NULL,
    JobDate TEXT NOT NULL
);