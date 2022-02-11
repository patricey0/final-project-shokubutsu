-- Deploy shokubutsu:update_user to pg

BEGIN;

CREATE FUNCTION update_visitor(json) RETURNS visitor AS $$
    UPDATE visitor SET
        nickname=$1->>'nickname',
        mail=$1->>'mail',
        "password"=$1->>'password',
        city=$1->>'city',
        picture=$1->>'picture',
        isAdmin=($1->>'isAdmin')::boolean
    WHERE id=($1->>'id')::int RETURNING *;
$$ LANGUAGE sql STRICT;

COMMIT;