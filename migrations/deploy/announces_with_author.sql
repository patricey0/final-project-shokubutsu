-- Deploy shokubutsu:announces_with_author to pg

BEGIN;

create view all_announces AS
	select announce.*, visitor.nickname as author, visitor.city as city from announce
	join visitor on visitor.id = announce.visitor_id;


create function announce_with_author(integer) returns all_announces as $$
	select * from all_announces where id = $1;
$$ language sql strict;

COMMIT;
