CREATE TABLE clients
(
        ID INT PRIMARY KEY,
        Name VARCHAR(255),
        Contact_information VARCHAR(255)
);

CREATE TABLE cards
(
        Client_ID INT,
        Credit_Card_Number INT,
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
         Brand_ VARCHAR(255),
         FOREIGN KEY (Car_ID) REFERENCES Cars(ID)
);

CREATE TABLE Rental_Agreements
(
         ID INT PRIMARY KEY,
         Client_ID INT,
         Car_ID INT,
         Start_Date DATE,
         End_Date DATE,
         Total_Cost_ NUMERIC,
         FOREIGN KEY (Client_ID) REFERENCES Clients(ID),
         FOREIGN KEY (Car_ID) REFERENCES Cars(ID)
);

CREATE TABLE Reviews
(
          ID INT PRIMARY KEY,
          Agreement_ID_ INT,
          Review_Text TEXT,
          FOREIGN KEY (Agreement_ID_) REFERENCES Rental_Agreements(ID)
);

CREATE TABLE Cruise_Control_Availability
(
          ID INT PRIMARY KEY,
          Car_ID INT,
          Name_ VARCHAR(255),
          Manufacturer_ VARCHAR(255),
          Model_ VARCHAR(255),
          Year_ INT,
          FOREIGN KEY (Car_ID) REFERENCES Cars(ID)
);

CREATE TABLE Navigation_Systems
(
           ID INT PRIMARY KEY,
           Car_ID INT,
           Name_ VARCHAR(255),
           Manufacturer_ VARCHAR(255),
           Model_ VARCHAR(255),
           Screen_Size_ FLOAT,
           Connectivity_ VARCHAR(255),
           FOREIGN KEY (Car_ID) REFERENCES Cars(ID)
);

CREATE TABLE Air_Conditioners
(
           ID INT PRIMARY KEY,
           Car_ID INT,
           Name_ VARCHAR(255),
           Manufacturer_ VARCHAR(255),
           Model_ VARCHAR(255),
           Year_ INT,
           Energy_Efficiency_Rating_ FLOAT,
           Cooling_Capacity_ FLOAT,
           FOREIGN KEY (Car_ID) REFERENCES Cars(ID)
);

CREATE TABLE Particular_Models
(
          ID INT PRIMARY KEY,
          Car_Model_ID INT,
          Length_ FLOAT,
          Width_ FLOAT,
          Height_ FLOAT,
          Weight FLOAT,
          Ground_Clearance FLOAT,
          Cross_weight FLOAT,
          Wheelbase FLOAT,
          FOREIGN KEY (Car_Model_ID) REFERENCES Cars(ID)
);





