-- Deploy shokubutsu:init to pg

BEGIN;

CREATE TABLE "user" (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nickname TEXT UNIQUE NOT NULL,
    mail TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    city TEXT NOT NULL,
    isAdmin BOOLEAN NOT NULL DEFAULT false
);

CREATE TABLE announce (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title TEXT NOT NULL,
    "image" TEXT NOT NULL,
    creation_date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    update_date TIMESTAMPTZ NULL,
    "description" TEXT NOT NULL,
    category TEXT NOT NULL,
    "user_id" INT NOT NULL REFERENCES "user"(id)
);

CREATE TABLE bookmarked (
    "user_id" INT NOT NULL REFERENCES "user"(id),
    "announce_id" INT NOT NULL REFERENCES announce(id),
    added_date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY ("user_id", "announce_id")
);

COMMIT;