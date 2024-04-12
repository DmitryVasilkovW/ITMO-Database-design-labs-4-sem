CREATE MATERIALIZED VIEW mv_cards_destruction AS
SELECT
    Client_ID,
    NULL AS Credit_Card_Number,
    NULL AS Password,
    NULL AS CVV
FROM
    cards;