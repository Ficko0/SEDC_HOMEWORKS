import { MongoClient } from 'mongodb';

const client = new MongoClient(MONGO_URI);

let connection;

export async function connectToDatabase() {
    try {
        connection = await client.connect();
        console.log(`Successfully connected to MongoDB.`);
    }

    catch (err) {
        console.error(`Error while connecting to database: `, { err });
    }
}

export function getDB() {
    // if it reads the connection as undefined
    if (!connection) {
        return;
    }
    // else
    return connection.db();
}