CREATE MATERIALIZED VIEW mv_cards_advanced_faking AS
SELECT
    Client_ID,
    advanced_fake_data_generator('Credit_Card_Number') AS Credit_Card_Number,
    advanced_fake_data_generator('Password') AS Password,
    advanced_fake_data_generator('CVV') AS CVV
FROM
    cards;
