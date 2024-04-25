CREATE OR REPLACE FUNCTION create_partition() RETURNS TRIGGER AS $$
DECLARE
    partition_date TEXT;
    partition_name TEXT;
BEGIN
    partition_date := TO_CHAR(NEW.Start_Date, 'YYYY');
    partition_name := 'Rental_Agreements_' || partition_date;

    IF NOT EXISTS(SELECT relname FROM pg_class WHERE relname=partition_name) THEN
        EXECUTE 'CREATE TABLE ' || partition_name || ' PARTITION OF Rental_Agreements FOR VALUES FROM (''' || partition_date || '-01-01'') TO (''' || partition_date || '-12-31'');';
    END IF;

    EXECUTE 'INSERT INTO ' || partition_name || ' VALUES (($1).*);' USING NEW;

    RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER create_partition_trigger
    BEFORE INSERT ON Rental_Agreements
    FOR EACH ROW EXECUTE FUNCTION create_partition();
