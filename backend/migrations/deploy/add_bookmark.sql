-- Deploy shokubutsu:add_bookmark to pg

BEGIN;

create function add_bookmark(json) returns bookmarked as $$
	INSERT INTO "bookmarked" (visitor_id, announce_id) VALUES (
        ($1->>'visitor_id')::int,
        ($1->>'announce_id')::int
    ) RETURNING *;
$$ language sql strict;

COMMIT;
