import { MongoClient, Db, Collection, ObjectId } from 'mongodb';

async function run()
{
    const uri = 'mongodb://root:example@localhost:27017';
    const client = new MongoClient(uri);

    try
    {
        await client.connect();

        const db: Db = client.db('mongoDB');

        const clientsCollection: Collection = db.collection('clients');
        const clientsData = [
            { _id: new ObjectId(), client_id: 1, name: "Name1", contact_information: "Contact1" },
            { _id: new ObjectId(), client_id: 2, name: "Name2", contact_information: "Contact2" },
            { _id: new ObjectId(), client_id: 3, name: "Name3", contact_information: "Contact3" },
            { _id: new ObjectId(), client_id: 4, name: "Name4", contact_information: "Contact4" },
            { _id: new ObjectId(), client_id: 5, name: "Name5", contact_information: "Contact5" },
            { _id: new ObjectId(), client_id: 6, name: "Name6", contact_information: "Contact6" },
            { _id: new ObjectId(), client_id: 7, name: "Name7", contact_information: "Contact7" },
            { _id: new ObjectId(), client_id: 8, name: "Name8", contact_information: "Contact8" },
            { _id: new ObjectId(), client_id: 9, name: "Name9", contact_information: "Contact9" },
            { _id: new ObjectId(), client_id: 10, name: "Name10", contact_information: "Contact10" }
        ];
        await clientsCollection.insertMany(clientsData);

        const cardsCollection: Collection = db.collection('cards');
        const cardsData = [
            { _id: new ObjectId(), card_id: 1, client_id: 1, credit_card_number: 1234567890123456, password: 1234, cvv: 123 },
            { _id: new ObjectId(), card_id: 2, client_id: 2, credit_card_number: 2345678901234567, password: 2345, cvv: 234 },
            { _id: new ObjectId(), card_id: 3, client_id: 3, credit_card_number: 3456789012345678, password: 3456, cvv: 345 },
            { _id: new ObjectId(), card_id: 4, client_id: 4, credit_card_number: 4567890123456789, password: 4567, cvv: 456 },
            { _id: new ObjectId(), card_id: 5, client_id: 5, credit_card_number: 5678901234567890, password: 5678, cvv: 567 },
            { _id: new ObjectId(), card_id: 6, client_id: 6, credit_card_number: 6789012345678901, password: 6789, cvv: 678 },
            { _id: new ObjectId(), card_id: 7, client_id: 7, credit_card_number: 7890123456789012, password: 7890, cvv: 789 },
            { _id: new ObjectId(), card_id: 8, client_id: 8, credit_card_number: 8901234567890123, password: 8901, cvv: 890 },
            { _id: new ObjectId(), card_id: 9, client_id: 9, credit_card_number: 9012345678901234, password: 9012, cvv: 901 },
            { _id: new ObjectId(), card_id: 10, client_id: 10, credit_card_number: 123456789012345, password: 123, cvv: 239 }
        ];
        await cardsCollection.insertMany(cardsData);

        const carsCollection: Collection = db.collection('cars');
        const carsData = [
            { _id: new ObjectId(), car_id: 1, vehicle_model_year: 2020, transmission_type: "Automatic", rent_price: 1000, article_type: "Article1", type_of_bodywork: "Type1", engine_displacement: 2.0, type_of_bodywork_year: 2020, rental_cost: 10000 },
            { _id: new ObjectId(), car_id: 2, vehicle_model_year: 2021, transmission_type: "Manual", rent_price: 2000, article_type: "Article2", type_of_bodywork: "Type2", engine_displacement: 2.5, type_of_bodywork_year: 2021, rental_cost: 20000 },
            { _id: new ObjectId(), car_id: 3, vehicle_model_year: 2022, transmission_type: "Automatic", rent_price: 3000, article_type: "Article3", type_of_bodywork: "Type3", engine_displacement: 3.0, type_of_bodywork_year: 2022, rental_cost: 30000 },
            { _id: new ObjectId(), car_id: 4, vehicle_model_year: 2023, transmission_type: "Manual", rent_price: 4000, article_type: "Article4", type_of_bodywork: "Type4", engine_displacement: 3.5, type_of_bodywork_year: 2023, rental_cost: 40000 },
            { _id: new ObjectId(), car_id: 5, vehicle_model_year: 2024, transmission_type: "Automatic", rent_price: 5000, article_type: "Article5", type_of_bodywork: "Type5", engine_displacement: 4.0, type_of_bodywork_year: 2024, rental_cost: 50000 },
            { _id: new ObjectId(), car_id: 6, vehicle_model_year: 2025, transmission_type: "Manual", rent_price: 6000, article_type: "Article6", type_of_bodywork: "Type6", engine_displacement: 4.5, type_of_bodywork_year: 2025, rental_cost: 60000 },
            { _id: new ObjectId(), car_id: 7, vehicle_model_year: 2026, transmission_type: "Automatic", rent_price: 7000, article_type: "Article7", type_of_bodywork: "Type7", engine_displacement: 5.0, type_of_bodywork_year: 2026, rental_cost: 70000 },
            { _id: new ObjectId(), car_id: 8, vehicle_model_year: 2027, transmission_type: "Manual", rent_price: 8000, article_type: "Article8", type_of_bodywork: "Type8", engine_displacement: 5.5, type_of_bodywork_year: 2027, rental_cost: 80000 },
            { _id: new ObjectId(), car_id: 9, vehicle_model_year: 2028, transmission_type: "Automatic", rent_price: 9000, article_type: "Article9", type_of_bodywork: "Type9", engine_displacement: 6.0, type_of_bodywork_year: 2028, rental_cost: 90000 },
            { _id: new ObjectId(), car_id: 10, vehicle_model_year: 2029, transmission_type: "Manual", rent_price: 10000, article_type: "Article10", type_of_bodywork: "Type10", engine_displacement: 6.5, type_of_bodywork_year: 2029, rental_cost: 100000 }
        ];
        await carsCollection.insertMany(carsData);

        const brandsCollection: Collection = db.collection('brands');
        const brandsData = [
            { _id: new ObjectId(), brand_id: 1, car_id: 1, car_model_id: 1, brand: "Brand1" },
            { _id: new ObjectId(), brand_id: 2, car_id: 2, car_model_id: 2, brand: "Brand2" },
            { _id: new ObjectId(), brand_id: 3, car_id: 3, car_model_id: 3, brand: "Brand3" },
            { _id: new ObjectId(), brand_id: 4, car_id: 4, car_model_id: 4, brand: "Brand4" },
            { _id: new ObjectId(), brand_id: 5, car_id: 5, car_model_id: 5, brand: "Brand5" },
            { _id: new ObjectId(), brand_id: 6, car_id: 6, car_model_id: 6, brand: "Brand6" },
            { _id: new ObjectId(), brand_id: 7, car_id: 7, car_model_id: 7, brand: "Brand7" },
            { _id: new ObjectId(), brand_id: 8, car_id: 8, car_model_id: 8, brand: "Brand8" },
            { _id: new ObjectId(), brand_id: 9, car_id: 9, car_model_id: 9, brand: "Brand9" },
            { _id: new ObjectId(), brand_id: 10, car_id: 10, car_model_id: 10, brand: "Brand10" }
        ];
        await brandsCollection.insertMany(brandsData);

        const rentalAgreementsCollection: Collection = db.collection('rental_agreements');
        const rentalAgreementsData = [
            { _id: new ObjectId(), agreement_id: 1, client_id: 1, car_id: 1, start_date: new Date("2022-01-01"), end_date: new Date("2022-01-10"), total_cost: 10000 },
            { _id: new ObjectId(), agreement_id: 2, client_id: 2, car_id: 2, start_date: new Date("2022-02-01"), end_date: new Date("2022-02-10"), total_cost: 20000 },
            { _id: new ObjectId(), agreement_id: 3, client_id: 3, car_id: 3, start_date: new Date("2022-03-01"), end_date: new Date("2022-03-10"), total_cost: 30000 },
            { _id: new ObjectId(), agreement_id: 4, client_id: 4, car_id: 4, start_date: new Date("2022-04-01"), end_date: new Date("2022-04-10"), total_cost: 40000 },
            { _id: new ObjectId(), agreement_id: 5, client_id: 5, car_id: 5, start_date: new Date("2022-05-01"), end_date: new Date("2022-05-10"), total_cost: 50000 },
            { _id: new ObjectId(), agreement_id: 6, client_id: 6, car_id: 6, start_date: new Date("2022-06-01"), end_date: new Date("2022-06-10"), total_cost: 60000 },
            { _id: new ObjectId(), agreement_id: 7, client_id: 7, car_id: 7, start_date: new Date("2022-07-01"), end_date: new Date("2022-07-10"), total_cost: 70000 },
            { _id: new ObjectId(), agreement_id: 8, client_id: 8, car_id: 8, start_date: new Date("2022-08-01"), end_date: new Date("2022-08-10"), total_cost: 80000 },
            { _id: new ObjectId(), agreement_id: 9, client_id: 9, car_id: 9, start_date: new Date("2022-09-01"), end_date: new Date("2022-09-10"), total_cost: 90000 },
            { _id: new ObjectId(), agreement_id: 10, client_id: 10, car_id: 10, start_date: new Date("2022-10-01"), end_date: new Date("2022-10-10"), total_cost: 100000 }
        ];
        await rentalAgreementsCollection.insertMany(rentalAgreementsData);

        const reviewsCollection: Collection = db.collection('reviews');
        const reviewsData = [
            { _id: new ObjectId(), review_id: 1, agreement_id: 1, review_text: "Review1" },
            { _id: new ObjectId(), review_id: 2, agreement_id: 2, review_text: "Review2" },
            { _id: new ObjectId(), review_id: 3, agreement_id: 3, review_text: "Review3" },
            { _id: new ObjectId(), review_id: 4, agreement_id: 4, review_text: "Review4" },
            { _id: new ObjectId(), review_id: 5, agreement_id: 5, review_text: "Review5" },
            { _id: new ObjectId(), review_id: 6, agreement_id: 6, review_text: "Review6" },
            { _id: new ObjectId(), review_id: 7, agreement_id: 7, review_text: "Review7" },
            { _id: new ObjectId(), review_id: 8, agreement_id: 8, review_text: "Review8" },
            { _id: new ObjectId(), review_id: 9, agreement_id: 9, review_text: "Review9" },
            { _id: new ObjectId(), review_id: 10, agreement_id: 10, review_text: "Review10" }
        ];
        await reviewsCollection.insertMany(reviewsData);

        const cruiseControlAvailabilityCollection: Collection = db.collection('cruise_control_availability');
        const cruiseControlAvailabilityData = [
            { _id: new ObjectId(), cruise_control_id: 1, car_id: 1, name: "Name1", manufacturer: "Manufacturer1", model: "Model1", year: 2020 },
            { _id: new ObjectId(), cruise_control_id: 2, car_id: 2, name: "Name2", manufacturer: "Manufacturer2", model: "Model2", year: 2021 },
            { _id: new ObjectId(), cruise_control_id: 3, car_id: 3, name: "Name3", manufacturer: "Manufacturer3", model: "Model3", year: 2022 },
            { _id: new ObjectId(), cruise_control_id: 4, car_id: 4, name: "Name4", manufacturer: "Manufacturer4", model: "Model4", year: 2023 },
            { _id: new ObjectId(), cruise_control_id: 5, car_id: 5, name: "Name5", manufacturer: "Manufacturer5", model: "Model5", year: 2024 },
            { _id: new ObjectId(), cruise_control_id: 6, car_id: 6, name: "Name6", manufacturer: "Manufacturer6", model: "Model6", year: 2025 },
            { _id: new ObjectId(), cruise_control_id: 7, car_id: 7, name: "Name7", manufacturer: "Manufacturer7", model: "Model7", year: 2026 },
            { _id: new ObjectId(), cruise_control_id: 8, car_id: 8, name: "Name8", manufacturer: "Manufacturer8", model: "Model8", year: 2027 },
            { _id: new ObjectId(), cruise_control_id: 9, car_id: 9, name: "Name9", manufacturer: "Manufacturer9", model: "Model9", year: 2028 },
            { _id: new ObjectId(), cruise_control_id: 10, car_id: 10, name: "Name10", manufacturer: "Manufacturer10", model: "Model10", year: 2029 }
        ];
        await cruiseControlAvailabilityCollection.insertMany(cruiseControlAvailabilityData);

        // Navigation systems collection
        const navigationSystemsCollection: Collection = db.collection('navigation_systems');
        const navigationSystemsData = [
            { _id: new ObjectId(), navigation_system_id: 1, car_id: 1, name: "Name1", manufacturer: "Manufacturer1", model: "Model1", screen_size: 5.5, connectivity: "Wi-Fi" },
            { _id: new ObjectId(), navigation_system_id: 2, car_id: 2, name: "Name2", manufacturer: "Manufacturer2", model: "Model2", screen_size: 6.5, connectivity: "Bluetooth" },
            { _id: new ObjectId(), navigation_system_id: 3, car_id: 3, name: "Name3", manufacturer: "Manufacturer3", model: "Model3", screen_size: 7.5, connectivity: "Wi-Fi" },
            { _id: new ObjectId(), navigation_system_id: 4, car_id: 4, name: "Name4", manufacturer: "Manufacturer4", model: "Model4", screen_size: 8.5, connectivity: "Bluetooth" },
            { _id: new ObjectId(), navigation_system_id: 5, car_id: 5, name: "Name5", manufacturer: "Manufacturer5", model: "Model5", screen_size: 9.5, connectivity: "Wi-Fi" },
            { _id: new ObjectId(), navigation_system_id: 6, car_id: 6, name: "Name6", manufacturer: "Manufacturer6", model: "Model6", screen_size: 10.5, connectivity: "Bluetooth" },
            { _id: new ObjectId(), navigation_system_id: 7, car_id: 7, name: "Name7", manufacturer: "Manufacturer7", model: "Model7", screen_size: 11.5, connectivity: "Wi-Fi" },
            { _id: new ObjectId(), navigation_system_id: 8, car_id: 8, name: "Name8", manufacturer: "Manufacturer8", model: "Model8", screen_size: 12.5, connectivity: "Bluetooth" },
            { _id: new ObjectId(), navigation_system_id: 9, car_id: 9, name: "Name9", manufacturer: "Manufacturer9", model: "Model9", screen_size: 13.5, connectivity: "Wi-Fi" },
            { _id: new ObjectId(), navigation_system_id: 10, car_id: 10, name: "Name10", manufacturer: "Manufacturer10", model: "Model10", screen_size: 14.5, connectivity: "Bluetooth" }
        ];
        await navigationSystemsCollection.insertMany(navigationSystemsData);

        const airConditionersCollection: Collection = db.collection('air_conditioners');
        const airConditionersData = [
            { _id: new ObjectId(), air_conditioner_id: 1, car_id: 1, name: "Name1", manufacturer: "Manufacturer1", model: "Model1", year: 2020, energy_efficiency_rating: 5.0, cooling_capacity: 3.5 },
            { _id: new ObjectId(), air_conditioner_id: 2, car_id: 2, name: "Name2", manufacturer: "Manufacturer2", model: "Model2", year: 2021, energy_efficiency_rating: 6.0, cooling_capacity: 4.5 },
            { _id: new ObjectId(), air_conditioner_id: 3, car_id: 3, name: "Name3", manufacturer: "Manufacturer3", model: "Model3", year: 2022, energy_efficiency_rating: 7.0, cooling_capacity: 5.5 },
            { _id: new ObjectId(), air_conditioner_id: 4, car_id: 4, name: "Name4", manufacturer: "Manufacturer4", model: "Model4", year: 2023, energy_efficiency_rating: 8.0, cooling_capacity: 6.5 },
            { _id: new ObjectId(), air_conditioner_id: 5, car_id: 5, name: "Name5", manufacturer: "Manufacturer5", model: "Model5", year: 2024, energy_efficiency_rating: 9.0, cooling_capacity: 7.5 },
            { _id: new ObjectId(), air_conditioner_id: 6, car_id: 6, name: "Name6", manufacturer: "Manufacturer6", model: "Model6", year: 2025, energy_efficiency_rating: 10.0, cooling_capacity: 8.5 },
            { _id: new ObjectId(), air_conditioner_id: 7, car_id: 7, name: "Name7", manufacturer: "Manufacturer7", model: "Model7", year: 2026, energy_efficiency_rating: 11.0, cooling_capacity: 9.5 },
            { _id: new ObjectId(), air_conditioner_id: 8, car_id: 8, name: "Name8", manufacturer: "Manufacturer8", model: "Model8", year: 2027, energy_efficiency_rating: 12.0, cooling_capacity: 10.5 },
            { _id: new ObjectId(), air_conditioner_id: 9, car_id: 9, name: "Name9", manufacturer: "Manufacturer9", model: "Model9", year: 2028, energy_efficiency_rating: 13.0, cooling_capacity: 11.5 },
            { _id: new ObjectId(), air_conditioner_id: 10, car_id: 10, name: "Name10", manufacturer: "Manufacturer10", model: "Model10", year: 2029, energy_efficiency_rating: 14.0, cooling_capacity: 12.5 }
        ];
        await airConditionersCollection.insertMany(airConditionersData);

        const particularModelsCollection: Collection = db.collection('particular_models');
        const particularModelsData = [
            { _id: new ObjectId(), model_id: 1, car_model_id: 1, length: 4.5, width: 2.0, height: 1.5, weight: 1500, ground_clearance: 0.2, cross_weight: 2000, wheelbase: 2.5 },
            { _id: new ObjectId(), model_id: 2, car_model_id: 2, length: 5.0, width: 2.5, height: 2.0, weight: 2000, ground_clearance: 0.3, cross_weight: 2500, wheelbase: 3.0 },
            { _id: new ObjectId(), model_id: 3, car_model_id: 3, length: 5.5, width: 3.0, height: 2.5, weight: 2500, ground_clearance: 0.4, cross_weight: 3000, wheelbase: 3.5 },
            { _id: new ObjectId(), model_id: 4, car_model_id: 4, length: 6.0, width: 3.5, height: 3.0, weight: 3000, ground_clearance: 0.5, cross_weight: 3500, wheelbase: 4.0 },
            { _id: new ObjectId(), model_id: 5, car_model_id: 5, length: 6.5, width: 4.0, height: 3.5, weight: 3500, ground_clearance: 0.6, cross_weight: 4000, wheelbase: 4.5 },
            { _id: new ObjectId(), model_id: 6, car_model_id: 6, length: 7.0, width: 4.5, height: 4.0, weight: 4000, ground_clearance: 0.7, cross_weight: 4500, wheelbase: 5.0 },
            { _id: new ObjectId(), model_id: 7, car_model_id: 7, length: 7.5, width: 5.0, height: 4.5, weight: 4500, ground_clearance: 0.8, cross_weight: 5000, wheelbase: 5.5 },
            { _id: new ObjectId(), model_id: 8, car_model_id: 8, length: 8.0, width: 5.5, height: 5.0, weight: 5000, ground_clearance: 0.9, cross_weight: 5500, wheelbase: 6.0 },
            { _id: new ObjectId(), model_id: 9, car_model_id: 9, length: 8.5, width: 6.0, height: 5.5, weight: 5500, ground_clearance: 1.0, cross_weight: 6000, wheelbase: 6.5 },
            { _id: new ObjectId(), model_id: 10, car_model_id: 10, length: 9.0, width: 6.5, height: 6.0, weight: 6000, ground_clearance: 1.1, cross_weight: 6500, wheelbase: 7.0 }
        ];
        await particularModelsCollection.insertMany(particularModelsData);
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