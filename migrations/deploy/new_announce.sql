-- Deploy shokubutsu:new_announce to pg

BEGIN;

CREATE FUNCTION new_announce(json) RETURNS "announce" AS $$
    INSERT INTO "announce" (title, image, description, category, visitor_id) VALUES (
        $1->>'title',
        $1->>'image',
        $1->>'description',
        $1->>'category',
        ($1->>'visitor_id')::int
    ) RETURNING *;
$$ LANGUAGE sql STRICT;

COMMIT;