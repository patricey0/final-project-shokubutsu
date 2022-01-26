-- Deploy shokubutsu:announces_with_author to pg

BEGIN;

CREATE VIEW announces_with_author AS
	SELECT announce.*, visitor.nickname as author, visitor.city as city FROM announce
	JOIN visitor ON visitor.id = announce.visitor_id;

COMMIT;
