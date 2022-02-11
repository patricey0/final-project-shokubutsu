-- Verify shokubutsu:announces_with_author on pg

BEGIN;

SELECT * FROM announces_with_author WHERE false;

ROLLBACK;
