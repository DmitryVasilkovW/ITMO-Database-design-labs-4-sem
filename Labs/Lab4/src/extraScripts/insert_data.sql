INSERT INTO clients (ID, Name, Contact_information)
SELECT generate_series(1, 100) AS ID,
       md5(random()::text) AS Name,
       md5(random()::text) AS Contact_information;

INSERT INTO cards (Client_ID, Credit_Card_Number, Password, CVV)
SELECT generate_series(1, 100) AS Client_ID,
       (random() * (10^16))::bigint AS Credit_Card_Number,
       (random() * (10^4))::int AS Password,
       (random() * (10^3))::int AS CVV;

INSERT INTO Cars (ID, Vehicle_Model_Year, Transmission_Type, Rent_Price, Article_Type, Type_Of_Bodywork, Engine_Displacement, Type_Of_Bodywork_year, Rental_Cost)
SELECT generate_series(1, 100) AS ID,
       (random() * (2024 - 1980) + 1980)::int AS Vehicle_Model_Year,
       (CASE WHEN random() < 0.5 THEN 'Automatic' ELSE 'Manual' END) AS Transmission_Type,
       (random() * 1000)::numeric(10,2) AS Rent_Price,
       md5(random()::text) AS Article_Type,
       md5(random()::text) AS Type_Of_Bodywork,
       (random() * 5)::float AS Engine_Displacement,
       (random() * (2024 - 1980) + 1980)::float AS Type_Of_Bodywork_year,
       (random() * 10000)::numeric(10,2) AS Rental_Cost;


INSERT INTO Rental_Agreements (ID, Client_ID, Car_ID, Start_Date, End_Date, Total_Cost)
SELECT generate_series(1, 100) AS ID,
       (random() * 100 + 1)::int AS Client_ID,
       (random() * 100)::int AS Car_ID,
       current_date + (random() * (365 * 3))::int AS Start_Date,
       current_date + (random() * (365 * 3 + 30))::int AS End_Date,
       (random() * 10000)::numeric(10,2) AS Total_Cost;
