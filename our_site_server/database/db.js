import mongoose from "mongoose";



export const Connection = async (username,password) => 
{

    const mongoURL = `mongodb://${username}:${password}@ac-eskiv9h-shard-00-00.azsescj.mongodb.net:27017,ac-eskiv9h-shard-00-01.azsescj.mongodb.net:27017,ac-eskiv9h-shard-00-02.azsescj.mongodb.net:27017/ECOM?ssl=true&replicaSet=atlas-c5brvf-shard-0&authSource=admin&retryWrites=true&w=majority`;
    
    try {

        await mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('DataBase Connected SuccessFully');


    } catch (error) {
        console.log('Error while connecting with the database', error.message);
    }

}

export default Connection;