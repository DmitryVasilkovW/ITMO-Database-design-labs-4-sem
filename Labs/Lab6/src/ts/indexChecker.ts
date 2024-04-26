import { MongoClient, Db, Collection } from 'mongodb';

async function run()
{
    const uri = 'mongodb://root:example@localhost:27017';
    const client = new MongoClient(uri);

    await client.connect();

    const db: Db = client.db('mongoDB');
    const clientsCollection: Collection = db.collection('clients');

    await clientsCollection.createIndex({ name: 1, contact_information: 1 });

    const explain1 = await clientsCollection.find({ name: "Mary", contact_information: "Phone: ryr1nb" }).explain();

    const isIndexUsed1 = explain1.queryPlanner.winningPlan.stage === 'IXSCAN';

    if (isIndexUsed1)
    {
        console.log('Index is used for this query.' + "\n");
    }
    else
    {
        console.log('Index is not used for this query.' + "\n");
    }

    const explain2 = await clientsCollection.find({
        $or: [
            { name: "Mary", contact_information: "Phone: ryr1nb" },
            { name: "John", contact_information: "Email: example@example.com" },
            { name: "Name1", contact_information: "Contact1" },
            { name: "Name10", contact_information: "Contact10" }
        ]
    }).hint({ name: 1, contact_information: 1 }).explain();


    const isIndexUsed2 = explain2.queryPlanner.winningPlan.stage === 'IXSCAN';

    if (isIndexUsed2)
    {
        console.log('Index is used for this query.' + "\n");
    }
    else
    {
        console.log('Index is not used for this query.' + "\n");
    }

    process.exit(0);
}

run();