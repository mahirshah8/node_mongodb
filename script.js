const { count } = require('console');
const { MongoClient } = require('mongodb');

async function main() {
    const url = 'mongodb+srv://mahirshah:mahirshah8@cluster0.c2ypt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

    const client = new MongoClient(url);

    try {
        await client.connect();

     await findOneListingByName(client, "akhlaq")

      
    } catch (error) {
        console.error(error);
    } finally {

        await client.close();
    }


}


main().catch(console.error);

async function findOneListingByName(client, nameofListing) { 

const result = await client.db("test_db").collection("newDataFromNode").findOne({name: nameofListing});

if (result) { 

    console.log("found a listing in a collection  with the name of '${nameofListing}'");
    console.log(result);
    } else {
    
    console.log("no listing found with the name '${nameofListing}'");
         
    }


}

async function createmultipulListing(client, newListings) {
    const result = await client.db("test_db").collection("newDataFromNode").insertMany
        (newListings);








    console.log(result.insertedCount + ' new listings  created with the following id (s):');



}

async function listDatabases(client) {

    const databasesList = await client.db().admin().listDatabases();

    console.log('Databases List:');


    databasesList.databases.forEach(element => {
        console.log(element.name);
    });
}

async function addDataToDatabase(client, data) {


    const result = await client.db("test_db").collection("newDataFromNode").insertOne(data);


    console.log("data has been added to databse with id " + result.insertedId);
}