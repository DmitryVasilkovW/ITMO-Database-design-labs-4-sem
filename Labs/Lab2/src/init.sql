CREATE TABLE clients
(
        ID INT PRIMARY KEY,
        Name VARCHAR(255),
        Contact_information VARCHAR(255)
);

CREATE TABLE cards
(
        Client_ID INT,
        Credit_Card_Number BIGINT,
        Password INT,
        CVV INT,
        FOREIGN KEY (Client_ID) REFERENCES clients(ID)
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

CREATE TABLE Brands
(
         Car_ID INT,
         Car_Model_ID INT,
         Brand VARCHAR(255),
         FOREIGN KEY (Car_ID) REFERENCES Cars(ID)
);

CREATE TABLE Rental_Agreements
(
         ID INT PRIMARY KEY,
         Client_ID INT,
         Car_ID INT,
         Start_Date DATE,
         End_Date DATE,
         Total_Cost NUMERIC,
         FOREIGN KEY (Client_ID) REFERENCES Clients(ID),
         FOREIGN KEY (Car_ID) REFERENCES Cars(ID)
);

CREATE TABLE Reviews
(
          ID INT PRIMARY KEY,
          Agreement_ID INT,
          Review_Text TEXT,
          FOREIGN KEY (Agreement_ID) REFERENCES Rental_Agreements(ID)
);

CREATE TABLE Cruise_Control_Availability
(
          ID INT PRIMARY KEY,
          Car_ID INT,
          Name VARCHAR(255),
          Manufacturer VARCHAR(255),
          Model VARCHAR(255),
          Year INT,
          FOREIGN KEY (Car_ID) REFERENCES Cars(ID)
);

CREATE TABLE Navigation_Systems
(
           ID INT PRIMARY KEY,
           Car_ID INT,
           Name VARCHAR(255),
           Manufacturer VARCHAR(255),
           Model VARCHAR(255),
           Screen_Size FLOAT,
           Connectivity VARCHAR(255),
           FOREIGN KEY (Car_ID) REFERENCES Cars(ID)
);

CREATE TABLE Air_Conditioners
(
           ID INT PRIMARY KEY,
           Car_ID INT,
           Name VARCHAR(255),
           Manufacturer VARCHAR(255),
           Model VARCHAR(255),
           Year INT,
           Energy_Efficiency_Rating FLOAT,
           Cooling_Capacity FLOAT,
           FOREIGN KEY (Car_ID) REFERENCES Cars(ID)
);

CREATE TABLE Particular_Models
(
          ID INT PRIMARY KEY,
          Car_Model_ID INT,
          Length FLOAT,
          Width FLOAT,
          Height FLOAT,
          Weight FLOAT,
          Ground_Clearance FLOAT,
          Cross_weight FLOAT,
          Wheelbase FLOAT,
          FOREIGN KEY (Car_Model_ID) REFERENCES Cars(ID)
);





