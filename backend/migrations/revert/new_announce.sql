-- Revert shokubutsu:new_announce from pg

BEGIN;

DROP FUNCTION new_announce(json);

COMMIT;
