-- Revert shokubutsu:update_image_visitor from pg

BEGIN;

drop FUNCTION update_image_visitor;

COMMIT;
