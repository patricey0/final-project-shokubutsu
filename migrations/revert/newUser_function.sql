-- Revert shokubutsu:newUser_function from pg

BEGIN;

DROP FUNCTION new_user(json);

COMMIT;
