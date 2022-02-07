-- Deploy shokubutsu:report_function to pg

BEGIN;

-- XXX Add DDLs here.
create function report_announce(json) returns announce as $$
    update announce set
        flag=($1->>'flag')::boolean,
        report_desc=$1->>'report_desc'
    where id=($1->>'id')::int RETURNING *;
$$ language sql STRICT;



COMMIT;
