--language=PLpgSQL
CREATE OR REPLACE FUNCTION advanced_fake_data_generator(data_type text)
    RETURNS text AS $$
DECLARE
    output text;
BEGIN
    IF data_type = 'Credit_Card_Number' THEN
        output := '4' || LPAD(CAST(FLOOR(RANDOM() * 999999999999999) AS TEXT), 15, '0');
    ELSIF data_type = 'Password' THEN
        output := CHR(65 + FLOOR(RANDOM() * 26)::INT) ||
                  CHR(97 + FLOOR(RANDOM() * 26)::INT) ||
                  CAST(FLOOR(RANDOM() * 10) AS TEXT) ||
                  SUBSTRING(MD5(RANDOM()::TEXT) FROM 1 FOR 7);
    ELSIF data_type = 'CVV' THEN
        output := '9' || LPAD(CAST(FLOOR(RANDOM() * 99) AS TEXT), 2, '0');
    ELSE
        output := 'Unknown data type';
    END IF;
    RETURN output;
END;
$$ LANGUAGE plpgsql;
