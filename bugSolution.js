```javascript
//Correct usage of $inc operator
db.collection.updateOne({"_id":ObjectId("someId")},{$inc:{field:1}});
```