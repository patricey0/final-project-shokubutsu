-- Deploy shokubutsu:OneAnnounce_with_author to pg

BEGIN;

CREATE VIEW announce_with_author AS
    SELECT announce.*, visitor.nickname as author, visitor.city as city FROM announce
    JOIN visitor ON visitor.id = announce.visitor_id
    WHERE announce.id = 4;

COMMIT;
