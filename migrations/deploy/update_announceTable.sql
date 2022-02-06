-- Deploy shokubutsu:update_announceTable to pg

BEGIN;

alter table announce
add column flag boolean null default false;

COMMIT;
