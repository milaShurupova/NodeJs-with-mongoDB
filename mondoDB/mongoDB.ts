import { MongoClient, Db } from "mongodb";

const connectionString = process.env.DB_CONNECTIONSTRING as string;
console.log("connectionString", connectionString);

const client = new MongoClient(connectionString);
export let db: Db;

export const connect = async () => {
    await client.connect();
    db = client.db("zionet-01122022");
    let collections = await db.collections();
    let collectionStudents = collections.find(
        (c) => c.collectionName === "students"
    );
    let collectionCourses = collections.find(
        (c) => c.collectionName === "courses"
    );

    if (!collectionStudents) {
        db.createCollection("students");
    }

    if (!collectionCourses) {
        db.createCollection("courses");
    }
    

}