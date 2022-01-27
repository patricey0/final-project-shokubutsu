-- Deploy shokubutsu:OneAnnounce_with_author to pg

BEGIN;

create function announce_with_author(integer) returns announces_with_author as $$
	select * from announces_with_author where id = $1;
$$ language sql strict;

COMMIT;
