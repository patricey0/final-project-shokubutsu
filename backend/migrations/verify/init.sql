-- Verify shokubutsu:init on pg

BEGIN;

SELECT * FROM visitor WHERE false;
SELECT * FROM announce WHERE false;
SELECT * FROM bookmarked WHERE false;


ROLLBACK;
