-- Deploy shokubutsu:update_image_visitor to pg

BEGIN;

CREATE FUNCTION update_image_visitor(json) RETURNS visitor AS $$
    UPDATE visitor SET
        picture=$1->>'image_url'
    WHERE id=($1->>'userId')::int RETURNING *;
$$ LANGUAGE sql STRICT;

COMMIT;
