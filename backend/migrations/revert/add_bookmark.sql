-- Revert shokubutsu:add_bookmark from pg

BEGIN;

-- XXX Add DDLs here.
drop function add_bookmark;

COMMIT;
