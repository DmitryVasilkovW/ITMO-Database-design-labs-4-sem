CREATE OR REPLACE VIEW anonymized_clients AS
SELECT
    ID,
    anon.fake_last_name() AS Name,
    anon.fake_email() AS Contact_information
FROM clients;

CREATE OR REPLACE VIEW anonymized_cards AS
SELECT
    Client_ID,
    cast(anon.random_in_numrange(numrange(1, 239)) as bigint) AS Credit_Card_Number,
    anon.md5(password) as Password,
    anon.md5(cast(cvv as text)) as CVV
FROM cards;

CREATE OR REPLACE VIEW anonymized_rental_agreements AS
SELECT
    ID,
    Client_ID,
    Car_ID,
    random_date('2003-11-11'::date, '2023-11-11'::date) AS Start_Date,
    random_date('2003-11-11'::date, '2023-11-11'::date) AS End_Date,
    cast(anon.random_in_numrange(numrange(1, 239)) as numeric) AS Total_Cost
FROM Rental_Agreements;