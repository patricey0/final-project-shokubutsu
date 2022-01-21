-- Deploy shokubutsu:update_user to pg

BEGIN;

CREATE FUNCTION update_user(json) RETURNS void AS $$
    UPDATE "user"
    SET
        nickname = $1->>'nickname',
        mail = $1->>'mail',
        password = $1->>'password',
        city = $1->>'city',
        isAdmin = ($1->>'isAdmin')::boolean
    WHERE id = ($1->>id)::int
$$ LANGUAGE sql STRICT;

COMMIT;
