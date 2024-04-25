CREATE OR REPLACE FUNCTION create_partition(date DATE) RETURNS VOID AS $$
DECLARE
    partition_date TEXT;
    partition_name TEXT;
BEGIN
    partition_date := TO_CHAR(date, 'YYYY');
    partition_name := 'Rental_Agreements_' || partition_date;

    IF NOT EXISTS(SELECT relname FROM pg_class WHERE relname=partition_name) THEN
        EXECUTE 'CREATE TABLE ' || partition_name || ' PARTITION OF Rental_Agreements FOR VALUES FROM (''' || partition_date || '-01-01'') TO (''' || partition_date || '-12-31'');';
    END IF;
END;
$$ LANGUAGE plpgsql;
