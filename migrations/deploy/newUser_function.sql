-- Deploy shokubutsu:newUser_function to pg

BEGIN;

CREATE FUNCTION new_user(json) RETURNS "user" AS $$
    INSERT INTO "user" (nickname, mail, "password", city, isAdmin) VALUES (
        $1->>'nickname',
        $1->>'mail',
        $1->>'password',
        $1->>'city',
        ($1->>'isAdmin')::boolean
    ) RETURNING *;
$$ LANGUAGE sql STRICT;

COMMIT;
