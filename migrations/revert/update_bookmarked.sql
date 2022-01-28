-- Revert shokubutsu:update_bookmarked from pg

BEGIN;

drop table bookmarked cascade;

COMMIT;
