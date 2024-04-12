CREATE MATERIALIZED VIEW mv_clients_generalized AS
SELECT
    ID,
    SUBSTRING(Name, 1, 1) AS Name,
    SUBSTRING(Contact_information, 1, 5) AS Contact_information
FROM
    clients;