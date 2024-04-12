CREATE OR REPLACE FUNCTION fake_data_generator(data_type text)
    RETURNS text AS $$
DECLARE
    output text;
BEGIN
    IF data_type = 'Credit_Card_Number' THEN
        output := LPAD(CAST(FLOOR(RANDOM() * 99923999923999) AS TEXT), 16, '0');
    ELSIF data_type = 'Password' THEN
        output := SUBSTRING(MD5(RANDOM()::TEXT) FROM 1 FOR 10);
    ELSIF data_type = 'CVV' THEN
        output := LPAD(CAST(FLOOR(RANDOM() * 999) AS TEXT), 3, '0');
    ELSE
        output := 'Unknown data type';
    END IF;
    RETURN output;
END;
$$ LANGUAGE plpgsql;
