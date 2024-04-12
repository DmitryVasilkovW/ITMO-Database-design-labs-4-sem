CREATE MATERIALIZED VIEW mv_rental_agreements_noise AS
SELECT
    ID,
    Client_ID,
    Car_ID,
    Start_Date,
    End_Date,
    Total_Cost + RANDOM() * 10 AS Total_Cost
FROM
    Rental_Agreements;