import { MongoClient, Db, Collection } from 'mongodb';

async function run()
{
    const uri = 'mongodb://root:example@localhost:27017';
    const client = new MongoClient(uri);

    await client.connect();

    const db: Db = client.db('mongoDB');

    await db.createCollection("clientsWithCards", {
        viewOn: "clients",
        pipeline: [
            {
                $lookup: {
                    from: "cards",
                    localField: "client_id",
                    foreignField: "client_id",
                    as: "clientCards"
                }
            },
            {
                $project: {
                    name: 1,
                    credit_card_number: "$clientCards.credit_card_number"
                }
            }
        ]
    });

    process.exit(0);
}

run();