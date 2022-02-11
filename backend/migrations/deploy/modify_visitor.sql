-- Deploy shokubutsu:modify_visitor to pg

BEGIN;

ALTER TABLE visitor
    alter column isadmin DROP NOT NULL;

COMMIT;
