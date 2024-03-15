CREATE VIEW ClientsCarsView AS
SELECT Clients.ID as ClientID, Clients.Name, Cars.ID as CarID, Cars.vehicle_model_year
FROM Clients JOIN Cars ON Clients.ID = Cars.ID;