-- Revert shokubutsu:update_user from pg

BEGIN;

DROP FUNCTION update_visitor(json);

COMMIT;
