CREATE MATERIALIZED VIEW mv_clients_pseudonymization AS
SELECT
    ID,
    md5(Name) AS Name,
    md5(Contact_information) AS Contact_information
FROM
    clients;