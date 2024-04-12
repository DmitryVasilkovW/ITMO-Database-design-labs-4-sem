CREATE OR REPLACE FUNCTION scramble(integer)
    RETURNS integer AS $$
DECLARE
    input_number ALIAS FOR $1;
    output_number integer;
BEGIN
    output_number := (input_number * 214013 + 2531011) % 2147483648;
    RETURN output_number;
END;
$$ LANGUAGE plpgsql;
