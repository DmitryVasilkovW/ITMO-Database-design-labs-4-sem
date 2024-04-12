CREATE MATERIALIZED VIEW mv_cards_faking AS
SELECT
    Client_ID,
    fake_data_generator('Credit_Card_Number') AS Credit_Card_Number,
    fake_data_generator('Password') AS Password,
    fake_data_generator('CVV') AS CVV
FROM
    cards;