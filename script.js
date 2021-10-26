const { ObjectID, ObjectId } = require('bson');
const { count } = require('console');
const { MongoClient } = require('mongodb');

async function main() {
    const url = 'mongodb+srv://mahirshah:mahirshah8@cluster0.c2ypt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

    const client = new MongoClient(url);

    try {
        await client.connect();




        /* await createListing(client, {
      

        })
        
        await updateListingByName(client, { childrenIds:   ["6177c1a82522759c5161e0d4","6177c1a82522759c5161e0d5","6177c1a82522759c5161e0d6","6177c1a82522759c5161e0d7","6177c1a82522759c5161e0d8","6177c1a82522759c5161e0d9","6177c1a82522759c5161e0da","6177c1a82522759c5161e0db"] }); */



        await addDataToDatabase(client,  
            [
                {
                    parentId: "6177d9382c10f970c0a3bf56",
                    data: " تعديل  سجل تجاري",
                    childrenIds: []
                },
                {
                    parentId: "6177d9382c10f970c0a3bf56",
                    data: "وصف الخدمة",
                    childrenIds: []
                },
                {
                    parentId: "6177d9382c10f970c0a3bf56",
                    data: " شروط ومتطلبات الخدمة ",
                    childrenIds: []
                },
                {
                    parentId: "6177d9382c10f970c0a3bf56",
                    data: "خطوات الحصول على الخدمة ",
                    childrenIds: []
                },
                {
                    parentId: "6177d9382c10f970c0a3bf56",
                    data: "رسوم الخدمة ",
                    childrenIds: []
                },
                {
                    parentId: "6177d9382c10f970c0a3bf56",
                    data: "مدة تنفيذ الخدمة  ",
                    childrenIds: []
                },
                {
                    parentId: "6177d9382c10f970c0a3bf56",
                    data: "مكان تنفيذ الخدمة ",
                    childrenIds: []
                },


            ]);

        /*    await addDataToDatabase(client,{
                 childrenIds:[],
                 data:"السعودي"
   
        
             });
    */



    } catch (error) {
        console.error(error);
    } finally {

        await client.close();
    }


}


main().catch(console.error);

async function createListing(client, newListing) {
    const result = await client.db("test_db").collection("test_data").insertOne(newListing);



    console.log(`New listing  created with the following id: ${result.insertedId} `);


}


async function createmultipulListing(client, newListings) {


    const result = await client.db("test_db").collection("test_data").insertMany
        (newListings);




}

async function updateListingByName(client, updateListing) {

    const result = await client.db("test_db").collection("test_data").updateOne({ _id: ObjectId("6177bec2a3b7c031e734bfd4") }, { $set: updateListing });

    console.log(`${result.matchedCount} document(s) matched the query criteria`); console.log(`${result.modifedCount} documents was/were updated`);

}

async function findOneListingByName(client, nameofListing) {

    const result = await client.db("test_db").collection("test_data").findOne({ name: nameofListing });

    if (result) {

        console.log("found a listing in a collection  with the name of '${nameofListing}'");
        console.log(result);
    } else {

        console.log("no listing found with the name '${nameofListing}'");

    }


}






async function listDatabases(client) {

    const databasesList = await client.db().admin().listDatabases();

    console.log('Databases List:');


    databasesList.databases.forEach(element => {
        console.log(element.name);
    });
}

async function addDataToDatabase(client, data) {


    const result = await client.db("test_db").collection("test_data").insertOne(data);


    console.log("data has been added to databse with id " + result.insertedId);
}