const mongodb=require('mongodb');
const mongoClient=mongodb.MongoClient;
const url='mongodb://127.0.0.1:27017';
const util=require('util');
const express=require('express');
var app=express();

app.get('/add',(req,res)=>{
	var query=req.query;
	mongoClient.connect(url,(err,client)=>{
		if(err){
			res.send('连接失败');
			client.close();
            return;
		}
		var user=client.db('user');
		user.collection('student').insert(query,(err,result)=>{
			if(err){
			res.send('添加失败');
			client.close();
            return;
		}
		res.send(util.inspect(result));
		client.close();
		})
	})
})

app.get('/find',(req,res)=>{
	mongoClient.connect(url,(err,client)=>{
		if(err){
			res.send('连接失败');
			client.close();
            return;
	}
	var user=client.db('user');
	user.collection('student').find({}).toArray((err,result)=>{
		if(err){
			res.send('查询失败');
			client.close();
            return;
		}
		res.send(util.inspect(result));
		client.close();
	})
  })
})

app.get('/update',(req,res)=>{
	mongoClient.connect(url,(err,client)=>{
		if(err){
			res.send('连接失败');
			client.close();
			return;
		}
		var user=client.db('user');
		var oldv={'name':'张三'};
		var newv={$set:{'name':'李四','sex':'男'}};
		user.collection('student').updateOne(oldv,newv,(err,result)=>{
			if(err){
				res.send('更新失败');
				client.close();
				return;
			}
			res.send(util.inspect(result));
			client.close();
		})
	})
})

app.get('/delete',(req,res)=>{
	mongoClient.connect(url,(err,client)=>{
		if(err){
			res.senf('连接失败');
			client.close();
			return;

		}
		var user=client.db('user');
		var json={
			'sex':'男'
		}
		user.collection('student').deleteOne(json,(err,result)=>{
			if(err){
				res.send('删除失败');
				client.close();
				return;
			}
			res.send(util.inspect(result));
			client.close();
		})
	})
})


app.listen(80);