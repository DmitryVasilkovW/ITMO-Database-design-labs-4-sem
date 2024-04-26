import { MongoClient, Db, Collection, ObjectId } from 'mongodb';

function getRandomName()
{
    const names = ['John', 'Jane', 'Mary', 'Peter', 'Paul', 'Jennifer', 'Linda', 'Robert', 'Patricia', 'Michael'];
    return names[Math.floor(Math.random() * names.length)];
}

function getRandomContactInfo()
{
    const info = ['Email', 'Phone', 'Address'];
    return info[Math.floor(Math.random() * info.length)] + ': ' + Math.random().toString(36).substring(7);
}

async function run()
{
    const uri = 'mongodb://root:example@localhost:27017';
    const client = new MongoClient(uri);

    await client.connect();

    const db: Db = client.db('mongoDB');
    const clientsCollection: Collection = db.collection('clients');

    const clients = Array.from({ length: 300 }, () => ({
        _id: new ObjectId(),
        client_id: Math.floor(Math.random() * 10000),
        name: getRandomName(),
        contact_information: getRandomContactInfo()
    }));

    await clientsCollection.insertMany(clients);

    console.log('Inserted 300 random clients.');

    process.exit(0);
}

run();