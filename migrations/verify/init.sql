-- Verify shokubutsu:init on pg

BEGIN;

SELECT * FROM user WHERE false;
SELECT * FROM announce WHERE false;
SELECT * FROM bookmarked WHERE false;


ROLLBACK;
