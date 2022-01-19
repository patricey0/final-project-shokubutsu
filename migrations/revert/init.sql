-- Revert shokubutsu:init from pg

BEGIN;

DROP TABLE "bookmarked";
DROP TABLE "announce";
DROP TABLE "user";

COMMIT;
