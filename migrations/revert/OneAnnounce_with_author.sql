-- Revert shokubutsu:OneAnnounce_with_author from pg

BEGIN;

DROP VIEW announce_with_author;

COMMIT;
