-- Deploy shokubutsu:update_announceTable to pg

BEGIN;

alter table announce
add column flag boolean null default false;

alter table announce
add column report_desc text null;

COMMIT;
