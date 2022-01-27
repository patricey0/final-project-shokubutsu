-- Revert shokubutsu:announces_with_author from pg

BEGIN;

drop function announce_with_author;
drop view all_announces;


COMMIT;
