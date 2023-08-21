
const { MongoClient, ServerApiVersion } = require('mongodb');
/**
 * @type {import("mongodb").Db}
 */
let db;
const DbConnect = async () => {
    if (db) return db;
    try {
        const uri = `mongodb+srv://${process.env.NEXT_PUBLIC_db_user}:${process.env.NEXT_PUBLIC_db_pass}@cluster0.v0qpza6.mongodb.net/?retryWrites=true&w=majority`;
        // Create a MongoClient with a MongoClientOptions object to set the Stable API version
        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        db = client.db('PersonalBlogs');
        
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        // console.log("Pinged your deployment. You successfully connected to MongoDB!");
        return db;
    }
    catch (error) {
        console.log(error.message);
    }
}

export default DbConnect;
