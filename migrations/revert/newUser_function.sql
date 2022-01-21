-- Revert shokubutsu:newUser_function from pg

BEGIN;

DROP FUNCTION new_visitor(json);

COMMIT;
