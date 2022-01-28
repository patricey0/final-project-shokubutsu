-- Deploy shokubutsu:update_bookmarked to pg

BEGIN;

drop table bookmarked cascade;

CREATE TABLE bookmarked (
    "visitor_id" INT NOT NULL REFERENCES "visitor"(id) ON DELETE CASCADE,
    "announce_id" INT NOT NULL REFERENCES announce(id) ON DELETE CASCADE,
    added_date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY ("visitor_id", "announce_id")
);


COMMIT;
