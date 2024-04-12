CREATE MATERIALIZED VIEW mv_clients_randomization AS
SELECT
    ID,
    CAST((48 + FLOOR(RANDOM() * 10)::INT) AS TEXT) || Name AS Name,
    CAST((48 + FLOOR(RANDOM() * 10)::INT) AS TEXT) || Contact_information AS Contact_information
FROM
    clients;
