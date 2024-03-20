SET enable_seqscan = OFF;

SELECT /*+ IndexScan(Clients idx_clients) */ ID, name FROM Clients;

SELECT /*+ IndexScan(Cars idx_cars) */ ID, vehicle_model_year FROM Cars WHERE ID != 10 AND vehicle_model_year != 1000;

