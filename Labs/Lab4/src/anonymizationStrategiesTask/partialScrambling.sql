CREATE MATERIALIZED VIEW mv_rental_agreements_scrambling AS
SELECT
    ID,
    scramble(Client_ID) AS Client_ID,
    scramble(Car_ID) AS Car_ID,
    Start_Date,
    End_Date,
    Total_Cost
FROM
    Rental_Agreements;