-- Revert shokubutsu:announces_with_author from pg

BEGIN;

DROP VIEW announces_with_author;

COMMIT;
