-- Revert shokubutsu:report_function from pg

BEGIN;

drop function report_announce;

COMMIT;
