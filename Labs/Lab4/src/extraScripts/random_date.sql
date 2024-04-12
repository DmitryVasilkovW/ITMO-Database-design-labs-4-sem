CREATE OR REPLACE FUNCTION random_date(start_date DATE, end_date DATE)
    RETURNS DATE AS
$$
DECLARE
    time_span INT;
    random_date DATE;
BEGIN
    time_span := end_date - start_date;
    random_date := start_date + CAST(trunc(random() * time_span) AS INTEGER);
    RETURN random_date;
END;
$$ LANGUAGE plpgsql;
