//api/new-meetup
// POST /api/new-meetup
// mongodb+srv://<username>:<password>@mflix.ryh22.mongodb.net/?retryWrites=true&w=majority
//mongodb+srv://nextStudent:next220@mflix.ryh22.mongodb.net/?retryWrites=true&w=majority
// const username = encodeURIComponent("<username>");
// const password = encodeURIComponent("<password>");
// let uri =
//   `mongodb+srv://${username}:${password}@${cluster}/?authSource=${authSource}&authMechanism=${authMechanism}`;

import { MongoClient } from "mongodb";

async function hendler(rec, res){
    if(req.method === 'POST'){
        const data = req.body;

        const {title, image, address, description } = data;
        const client = await MongoClient.connect('mongodb+srv://nextStudent:next220@mflix.ryh22.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db();

        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne({data});

        client.close();

        res.status(201).json({message: 'Meetup inserted!'});
    }
}

export default hendler;