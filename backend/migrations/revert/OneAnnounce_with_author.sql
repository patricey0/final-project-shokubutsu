-- Revert shokubutsu:OneAnnounce_with_author from pg

BEGIN;

DROP function announce_with_author;

COMMIT;
