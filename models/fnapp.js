const mongodb=require('mongodb');
const mongoClient=mongodb.MongoClient;
const url='mongodb://127.0.0.1:27017';
var data='user';

function connect(callback){
	mongoClient.connect(url,(err,client)=>{
		if(err){
			callback(err,null);
			return;
		}
		var user=client.db(data);
		callback(null,user)
	})

}

function insert(collectionname,query,callback){
	connect(function(err,user){
		if(err){
			callback(err,null);
			return;
		}
		user.collection(collectionname).insert(query,(err,result)=>{
			if(err){
			callback(err,null);
			return;
		}
		callback(null,result);
		})
	})

}



function find(collectionname,query,callback){
	connect((err,user)=>{
		if(err){
			callback(err,null);
			return;
		}
	user.collection(collectionname).find(query).toArray((err,result)=>{
		if(err){
			callback(err,null);
			return;
		}
		callback(null,result);
		})
	})
}

function update(updatemethod,collectionname,oldv,newv,callback){
	connect((err,user)=>{
		if(err){
			callback(err,null);
			return;

		}
		user.collection(collectionname)[updatemethod](oldv,newv,(err,result)=>{
			if(err){
				callback(err,null);
				return;
			}
			callback(null,result);
		})
	})

}

function deleteinfo(deletemethod,collectionname,query,callback){
	connect((err,user)=>{
		if(err){
			callback(err,null);
			return;
		}
		user.collection(collectionname)[deletemethod](query,(err,result)=>{
			if(err){
				callback(err,null);
				return;
			}
			callback(null,result);
		})
	})
}






module.exports={
	insert,
	find,
	update,
	deleteinfo,

}