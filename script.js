const { ObjectID, ObjectId } = require('bson');
const { count } = require('console');
const { MongoClient } = require('mongodb');

async function main() {
    const url = 'mongodb+srv://mahirshah:mahirshah8@cluster0.c2ypt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

    const client = new MongoClient(url);

    try {
        await client.connect();

   /*      await createListing(client,  { name: "الخدمة"
        
        
        
        
        })
 */

        /* await createListing(client, {
        
        await updateListingByName(client, { childrenIds:   ["6177c1a82522759c5161e0d4","6177c1a82522759c5161e0d5","6177c1a82522759c5161e0d6","6177c1a82522759c5161e0d7","6177c1a82522759c5161e0d8","6177c1a82522759c5161e0d9","6177c1a82522759c5161e0da","6177c1a82522759c5161e0db"] }); */



        await createmultipulListing(client,  
            [
                {
                    parentId: "617930fd8086b17f3afdbdb1",
                    data: "إصدار سجل تجاري رئيسي",
                    childrenIds: []
                },
                {
                    parentId: "617930fd8086b17f3afdbdb1",
                    data: "إصدار",
                    childrenIds: []
                },
                {
                    parentId: "617930fd8086b17f3afdbdb1",
                    data: " إصدار سجل تجاري فرعي ",
                    childrenIds: []
                },
                {
                    parentId: "617930fd8086b17f3afdbdb2",
                    data:  "تجديد",
                    childrenIds: []
                },
                
                {
                    parentId: "617930fd8086b17f3afdbdb2",
                    data: "تجديد سجل تجاري رئيسي",
                    childrenIds: []
                },               
                {
                    parentId: "617930fd8086b17f3afdbdb2",
                    data: "	تجديد سجل تجاري فرعي ",
                    childrenIds: []
                },
                
                {
                    parentId: "617930fd8086b17f3afdbdb2",
                    data: "ما هي خدمة تجديد السجل التجاري؟ ",
                    childrenIds: []
                },
                {
                    parentId: "617930fd8086b17f3afdbdb2",
                    data: " ما هي شروط خدمة إصدار السجل التجاري ؟",
                    childrenIds: []
                },
                
                {
                    parentId: "617930fd8086b17f3afdbdb2",
                    data: "ما هي خطوات الحصول على خدمة تجديد السجل التجاري؟",
                    childrenIds: []
                },
                
                {
                    parentId: "617930fd8086b17f3afdbdb2",
                    data: "كم رسوم تجديد السجل التجاري ؟",
                    childrenIds: []
                },
                
                {
                    parentId: "617930fd8086b17f3afdbdb2",
                    data: "ما هي رسوم تجديد السجل التجاري ؟",
                    childrenIds: []
                },
                
                {
                    parentId: "617930fd8086b17f3afdbdb2",
                    data: "كم رسوم تجديد السجل التجاري الرئيسي؟",
                    childrenIds: []
                },
                
                {
                    parentId: "617930fd8086b17f3afdbdb2",
                    data: "كم رسوم تجديد السجل التجاري الفرعي؟",
                    childrenIds: []
                },
                
                {
                    parentId: "617930fd8086b17f3afdbdb2",
                    data: "كم مدة تنفيذ خدمة تجديد السجل التجاري ؟",
                    childrenIds: []
                },
                
                {
                    parentId: "617930fd8086b17f3afdbdb2",
                    data: "ما هو مكان تنفيذ خدمة تجديد السجل التجاري ؟",
                    childrenIds: []
                },
                {
                    parentId: "617930fd8086b17f3afdbdb3",
                    data: " تعيين مدير",
                    childrenIds: []
                },
                {
                    parentId: "617930fd8086b17f3afdbdb3",
                    data: "	تعديل رأس مال سجل تجاري",
                    childrenIds: []
                },
                {
                    parentId: "617930fd8086b17f3afdbdb3",
                    data:     "	تعديل عنوان سجل تجاري",
                    childrenIds: []
                },
                {
                    parentId: "617930fd8086b17f3afdbdb3",
                    data: " عديل نشاط سجل تجاري " ,
                    childrenIds: []
                },
                {
                    parentId: "617930fd8086b17f3afdbdb3",
                    data: " تعديل سجل تجاري فرعي", 
                    childrenIds: []
                },
                {
                    parentId: "617930fd8086b17f3afdbdb3",
                    data:   "تعديل سجل تجاري رئيسي", 
                    childrenIds: []
                },
                {
                    parentId: "617930fd8086b17f3afdbdb3",
                    data:  " تعديل",
                    childrenIds: []
                },
                {
                    parentId: "617930fd8086b17f3afdbdb5",
                    data: "شطب", 
                    childrenIds: []
                },
                {
                    parentId: "617930fd8086b17f3afdbdb5",
                    data:  " شطب سجل تجاري فرعي  " ,
                    childrenIds: []
                },
                {
                    parentId: "617930fd8086b17f3afdbdb5",
                    data: "شطب سجل تجاري رئيسي",
                    childrenIds: []
                },
                {
                    parentId: "61792d8f6b5ecae82530dc8a",
                    data: "شطب سجل تجاري لشخص متوفي",
                    childrenIds: []
                },
                {
                    parentId: "617930fd8086b17f3afdbdb6",
                    data: "ملكية السجل التجاري" ,
                    childrenIds: []
                },
                {
                    parentId: "617930fd8086b17f3afdbdb6",
                    data: "نقل",
                    childrenIds: []
                },
                {
                    parentId: "61792d8f6b5ecae82530dc8a",
                    data: "نقل ملكية سجل تجاري من شخص متوفي",
                    childrenIds: []
                },
                {
                    parentId: "617930fd8086b17f3afdbdb7",
                    data: ["تحويل سجل تجاري", "	تحويل"],
                    childrenIds: []
                },
                {
                    parentId: "617930fd8086b17f3afdbdb8",
                    data: "المؤسسات الخيرية",
                    childrenIds: []
                },
                {
                    parentId: "617930fd8086b17f3afdbdb9",
                    data: "المؤسسات الوقفية",
                    childrenIds: []
                },


            ]); 

    /*     /*    await addDataToDatabase(client,{
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


main().catch(console.error);/* 

async function createListing(client, newListing) {
    const result = await client.db("test_db").collection("test_data").insertOne(newListing);



    console.log(`New listing  created with the following id: ${result.insertedId} `);


}
 */

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