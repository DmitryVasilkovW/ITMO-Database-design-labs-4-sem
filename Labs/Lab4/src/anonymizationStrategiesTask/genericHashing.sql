CREATE MATERIALIZED VIEW mv_cards_hashing AS
SELECT
    Client_ID,
    md5(CAST(Credit_Card_Number AS TEXT)) AS Credit_Card_Number,
    md5(Password) AS Password,
    md5(CAST(CVV AS TEXT)) AS CVV
FROM
    cards;
