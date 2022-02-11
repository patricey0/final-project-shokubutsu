-- Deploy shokubutsu:update_announce to pg

BEGIN;

CREATE FUNCTION update_announce(json) RETURNS announce AS $$
    UPDATE announce SET
        title=$1->>'title',
        "image"=$1->>'image',
        "description"=$1->>'description',
        category=$1->>'category',
        visitor_id=($1->>'visitor_id')::int,
        update_date=NOW()
    WHERE id=($1->>'id')::int RETURNING *;
$$ LANGUAGE sql STRICT;

COMMIT;
