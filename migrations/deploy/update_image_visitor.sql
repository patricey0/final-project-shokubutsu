-- Deploy shokubutsu:update_image_visitor to pg

BEGIN;

CREATE FUNCTION update_image_visitor(json) RETURNS visitor AS $$
    UPDATE visitor SET
        picture=$1->>'picture'
    WHERE id=($1->>'id')::int RETURNING *;
$$ LANGUAGE sql STRICT;

COMMIT;
