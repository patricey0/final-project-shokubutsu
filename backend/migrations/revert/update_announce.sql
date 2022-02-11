-- Revert shokubutsu:update_announce from pg

BEGIN;

DROP FUNCTION update_announce(json);

COMMIT;
