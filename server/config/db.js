const mongoose=require('mongoose');

mongoose.Promise = global.Promise;
mongoose.set("strictQuery", false);
mongoose.connect('mongodb://127.0.0.1:27017/mydb',  {   useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
   console.log('Database sucessfully connected')
},
error => {
   console.log('Database could not connected: ' + error)
}
)