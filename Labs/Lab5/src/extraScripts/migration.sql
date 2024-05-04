CREATE TABLE clients
(
    ID INT PRIMARY KEY,
    Name VARCHAR(255),
    Contact_information VARCHAR(255)
);

CREATE TABLE Cars
(
    ID INT PRIMARY KEY,
    Vehicle_Model_Year INT,
    Transmission_Type VARCHAR(255),
    Rent_Price NUMERIC,
    Article_Type VARCHAR(255),
    Type_Of_Bodywork VARCHAR(255),
    Engine_Displacement FLOAT,
    Type_Of_Bodywork_year FLOAT,
    Rental_Cost NUMERIC
);

CREATE TABLE Rental_Agreements
(
    ID SERIAL,
    Client_ID INT NOT NULL,
    Car_ID INT NOT NULL,
    Start_Date DATE NOT NULL,
    End_Date DATE,
    Total_Cost DECIMAL(10, 2) NOT NULL,
    Cost_Category VARCHAR(20) GENERATED ALWAYS AS
           (
           CASE
               WHEN Total_Cost < 1000 THEN 'Low'
               WHEN Total_Cost < 5000 THEN 'Medium'
               WHEN Total_Cost < 10000 THEN 'High'
               ELSE 'Very High'
               END
           ) STORED,
    Cost_Category_Raw INT GENERATED ALWAYS AS
           (
           CASE
               WHEN Total_Cost < 1000 THEN 1
               WHEN Total_Cost < 5000 THEN 2
               WHEN Total_Cost < 10000 THEN 3
               ELSE 4
               END
           ) STORED,
    PRIMARY KEY (ID, Total_Cost)
) PARTITION BY RANGE (Total_Cost);

CREATE TABLE Rental_Agreements_Low PARTITION OF Rental_Agreements
    FOR VALUES FROM (MINVALUE) TO (1000);

CREATE TABLE Rental_Agreements_Medium PARTITION OF Rental_Agreements
    FOR VALUES FROM (1000) TO (5000);

CREATE TABLE Rental_Agreements_High PARTITION OF Rental_Agreements
    FOR VALUES FROM (5000) TO (10000);

CREATE TABLE Rental_Agreements_Very_High PARTITION OF Rental_Agreements
    FOR VALUES FROM (10000) TO (MAXVALUE);

ALTER TABLE Rental_Agreements
    ADD CONSTRAINT fk_client_id FOREIGN KEY (Client_ID) REFERENCES Clients(ID),
    ADD CONSTRAINT fk_car_id FOREIGN KEY (Car_ID) REFERENCES Cars(ID);