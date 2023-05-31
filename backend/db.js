const mongoose=require('mongoose');

const mongourl='mongodb+srv://gofood:gofood@cluster0.r88hp09.mongodb.net/gofood?retryWrites=true&w=majority'

const mongoDb = async () => {
    try {
        await mongoose.connect(mongourl, { useNewUrlParser: true });
        console.log('Connection success');
        const fetchitems=await mongoose.connection.db.collection("food_items");
        const items = await fetchitems.find({}).toArray()
          global.food_items=items;
       
          console.log(global.food_items)
        const fetchdata=await mongoose.connection.db.collection("food_category");
        const data = await fetchdata.find({}).toArray()
          global.food_cat=data;
       
          // console.log(global.food_items)
        
 
  
        
      } catch (error) {
        console.error('Connection error:', error);
      }
    };


module.exports=mongoDb;