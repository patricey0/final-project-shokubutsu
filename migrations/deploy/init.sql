-- Deploy shokubutsu:init to pg

BEGIN;

CREATE TABLE visitor (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nickname TEXT UNIQUE NOT NULL,
    mail TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    city TEXT NOT NULL,
    picture TEXT NULL,
    isAdmin BOOLEAN NOT NULL DEFAULT false
);

CREATE TABLE announce (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title TEXT NOT NULL,
    image TEXT NOT NULL,
    creation_date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    update_date TIMESTAMPTZ NULL,
    description TEXT NOT NULL,
    category TEXT NOT NULL,
    visitor_id INT NOT NULL REFERENCES "visitor"(id)
);

CREATE TABLE bookmarked (
    "visitor_id" INT NOT NULL REFERENCES "visitor"(id),
    "announce_id" INT NOT NULL REFERENCES announce(id),
    added_date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY ("visitor_id", "announce_id")
);

COMMIT;
