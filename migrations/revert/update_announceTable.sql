-- Revert shokubutsu:update_announceTable from pg

BEGIN;

alter table announce
drop column flag;

alter table announce
drop column report_desc;

COMMIT;
