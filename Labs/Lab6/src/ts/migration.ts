import { MongoClient } from 'mongodb';

async function run()
{
    const uri = 'mongodb://localhost:27017';
    const client = new MongoClient(uri);

    try
    {
        await client.connect();
        const db = client.db('mongoDB');

        await db.createCollection('clients');
        await db.createCollection('cards');
        await db.createCollection('cars');
        await db.createCollection('brands');
        await db.createCollection('rental_agreements');
        await db.createCollection('reviews');
        await db.createCollection('cruise_control_availability');
        await db.createCollection('navigation_systems');
        await db.createCollection('air_conditioners');
        await db.createCollection('particular_models');

        console.log('Collections created successfully.');
    }
    catch (err)
    {
        console.error('An error occurred', err);
    }
    finally
    {
        await client.close();
    }

    process.exit(0);
}

run();