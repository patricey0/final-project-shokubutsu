-- Deploy shokubutsu:newvisitor_function to pg

BEGIN;

CREATE FUNCTION new_visitor(json) RETURNS "visitor" AS $$
    INSERT INTO "visitor" (nickname, mail, "password", city, picture, isAdmin) VALUES (
        $1->>'nickname',
        $1->>'mail',
        $1->>'password',
        $1->>'city',
        $1->>'picture',
        ($1->>'isAdmin')::boolean
    ) RETURNING *;
$$ LANGUAGE sql STRICT;

COMMIT;
