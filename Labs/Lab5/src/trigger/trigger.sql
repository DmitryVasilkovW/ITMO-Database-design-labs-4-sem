CREATE OR REPLACE FUNCTION Rental_Agreements_insert_trigger()
    RETURNS TRIGGER AS
$$
BEGIN
    INSERT INTO Rental_Agreements
    VALUES (NEW.id, NEW.client_id, NEW.car_id, NEW.start_date, NEW.end_date, NEW.total_cost);
    RETURN NULL;
END;
$$
    LANGUAGE plpgsql;

CREATE TRIGGER insert_Rental_Agreements_trigger
    BEFORE INSERT ON Rental_Agreements
    FOR EACH ROW EXECUTE PROCEDURE Rental_Agreements_insert_trigger();
