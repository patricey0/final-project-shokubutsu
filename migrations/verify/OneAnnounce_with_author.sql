-- Verify shokubutsu:OneAnnounce_with_author on pg

BEGIN;

SELECT * FROM announce_with_author WHERE false;

ROLLBACK;
