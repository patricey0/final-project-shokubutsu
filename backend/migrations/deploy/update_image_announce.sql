-- Deploy shokubutsu:update_image_announce to pg

BEGIN;

CREATE FUNCTION update_image_announce(json) RETURNS announce AS $$
    UPDATE announce SET
        image=$1->>'image_url'
    WHERE id=($1->>'announceId')::int RETURNING *;
$$ LANGUAGE sql STRICT;


COMMIT;
