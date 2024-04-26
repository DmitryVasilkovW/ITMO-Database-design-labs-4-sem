import { MongoClient, Db, Collection } from 'mongodb';

async function run()
{
    const uri = 'mongodb://root:example@localhost:27017';
    const client = new MongoClient(uri);

    await client.connect();

    const db: Db = client.db('mongoDB');
    const collections = await db.listCollections().toArray();
    const collectionNames = ['clients', 'cards', 'cars', 'brands', 'rental_agreements', 'reviews', 'cruise_control_availability', 'navigation_systems', 'air_conditioners', 'particular_models', 'clientsWithCards'];
    var count = 0;

    for (const name of collectionNames)
    {
        if (collections.some(collection => collection.name === name))
        {
            console.log(`Collection or view "${name}" exists.`);
            count++;
        }
        else
        {
            console.log(`Collection or view "${name}" does not exist.`);
        }
    }

    console.log(`exists are ${count} collections and views of ${collections.length - 1}`)
    process.exit(0);
}

run();