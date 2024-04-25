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
    ID INT,
    Client_ID INT,
    Car_ID INT,
    Start_Date DATE,
    End_Date DATE,
    Total_Cost NUMERIC,
    PRIMARY KEY (ID, Start_Date)
) PARTITION BY RANGE (Start_Date);
