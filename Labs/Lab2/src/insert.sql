Copy clients (id, name, contact_information) FROM 'Clients.csv' DELIMITER ',' CSV HEADER;
Copy Cards (Client_ID, Credit_Card_Number, Password, CVV) FROM 'Cards.csv' DELIMITER ',' CSV HEADER;
Copy Cars (ID, Vehicle_Model_Year, Transmission_Type, Rent_Price, Article_Type, Type_Of_Bodywork, Engine_Displacement, Type_Of_Bodywork_year, Rental_Cost) FROM 'Cars.csv' DELIMITER ',' CSV HEADER;
Copy Brands (Car_ID, Car_Model_ID, Brand_) FROM 'Brands.csv' DELIMITER ',' CSV HEADER;
Copy Rental_Agreements (ID, Client_ID, Car_ID, Start_Date, End_Date, Total_Cost_) FROM 'RentalAgreements.csv' DELIMITER ',' CSV HEADER;

INSERT INTO Reviews (ID, Agreement_ID_, Review_Text) VALUES (1, 1, 'This is a review text.');
INSERT INTO Reviews (ID, Agreement_ID_, Review_Text) VALUES (2, 2, 'This is another review text.');

INSERT INTO Cruise_Control_Availability (ID, Car_ID, Name_, Manufacturer_, Model_, Year_) VALUES (1, 1, 'Cruise Control 1', 'Manufacturer 1', 'Model 1', 2022);
INSERT INTO Cruise_Control_Availability (ID, Car_ID, Name_, Manufacturer_, Model_, Year_) VALUES (2, 2, 'Cruise Control 2', 'Manufacturer 2', 'Model 2', 2023);

INSERT INTO Navigation_Systems (ID, Car_ID, Name_, Manufacturer_, Model_, Screen_Size_, Connectivity_) VALUES (1, 1, 'Navigation System 1', 'Manufacturer 1', 'Model 1', 5.5, 'Wi-Fi');
INSERT INTO Navigation_Systems (ID, Car_ID, Name_, Manufacturer_, Model_, Screen_Size_, Connectivity_) VALUES (2, 2, 'Navigation System 2', 'Manufacturer 2', 'Model 2', 6.5, 'Bluetooth');

INSERT INTO Air_Conditioners (ID, Car_ID, Name_, Manufacturer_, Model_, Year_, Energy_Efficiency_Rating_, Cooling_Capacity_) VALUES (1, 1, 'Air Conditioner 1', 'Manufacturer 1', 'Model 1', 2022, 3.5, 1000);
INSERT INTO Air_Conditioners (ID, Car_ID, Name_, Manufacturer_, Model_, Year_, Energy_Efficiency_Rating_, Cooling_Capacity_) VALUES (2, 2, 'Air Conditioner 2', 'Manufacturer 2', 'Model 2', 2023, 4.5, 2000);

INSERT INTO Particular_Models (ID, Car_Model_ID, Length_, Width_, Height_, Weight, Ground_Clearance, Cross_weight, Wheelbase) VALUES (1, 1, 4.1, 1.9, 1.6, 1500, 0.16, 2000, 2.6);
INSERT INTO Particular_Models (ID, Car_Model_ID, Length_, Width_, Height_, Weight, Ground_Clearance, Cross_weight, Wheelbase) VALUES (2, 2, 4.2, 1.91, 1.61, 1510, 0.17, 2010, 2.61);

