import { MongoClient } from "mongodb";

async function handler(req,res) {
    if (req.method === "POST") {
        try {
            const data = req.body;
            const client = await MongoClient.connect('mongodb+srv://nir:7281161@meetups.7fwfjef.mongodb.net/?retryWrites=true&w=majority');
            const db = client.db();
    
            const meetupCollection = db.collection('meetups');
            const result = await meetupCollection.insertOne(data);
            console.log(result);
            client.close();

            res.status(201).json({message:"meetup added to database"})
        } catch (error) {
            console.log(error);
            alert('database connection failed!')
        }
    }
}

export default handler;