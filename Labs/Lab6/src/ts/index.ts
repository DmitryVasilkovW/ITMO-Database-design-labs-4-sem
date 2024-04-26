import { MongoClient, Db, Collection } from 'mongodb';

async function run()
{
    const uri = 'mongodb://root:example@localhost:27017';
    const client = new MongoClient(uri);

    await client.connect();

    const db: Db = client.db('mongoDB');
    const clientsCollection: Collection = db.collection('clients');

    await clientsCollection.createIndex({ name: 1, contact_information: 1 });

    process.exit(0);
}