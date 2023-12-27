
export const Connection = async() => {
    
    const URL = '' ; // yaha pe mogodb url aayega jisme data jake store hoga 

    try{

           await mongoose.connect(URL, {useUnifieldTopology : true })
           console.log('DataBase Connected SuccessFully');


    } catch (error){
        console.log ('Error while connecting with the database', error.message );
    }

}

export default Connection ;