let express =require('express')
let bodyParser=require('body-parser')
const MongoClient=require('mongodb').MongoClient
const ObjectId=require('mongodb').ObjectId
const url='mongodb://localhost:27017'
let dbName="calorie_count"
let db
const client = new MongoClient(url)
client.connect(function(err) {
    db = client.db(dbName);
  })
let app=express()
app.use(bodyParser.json())
app.get('/',function(req,res){
    db.collection('milk_products').find({}).toArray(function(err,response){
        res.json({"users":response})
    })
})
app.post('/update',function(req,res){
    let data=req.body
    db.collection('milk_products').insertOne(data,(err,response)=>{
        res.json({"updated":response})
    })
})
app.listen(3001)