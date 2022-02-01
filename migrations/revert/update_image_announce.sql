-- Revert shokubutsu:update_image_announce from pg

BEGIN;

drop FUNCTION update_image_announce;

COMMIT;
