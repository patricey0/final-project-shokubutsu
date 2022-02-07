-- Deploy shokubutsu:update_view_announce to pg

BEGIN;

create or replace function announce_with_author(integer) returns announces_with_author as $$
	select * from announces_with_author where id = $1;
$$ language sql strict;

CREATE OR REPLACE VIEW announces_with_author AS
	SELECT announce.*, visitor.nickname as author, visitor.city as city FROM announce
	JOIN visitor ON visitor.id = announce.visitor_id;



COMMIT;
