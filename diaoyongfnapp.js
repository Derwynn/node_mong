const db=require('./models/fnapp');
const util=require('util');
const express=require('express');
const app=express();

app.get('/add',(req,res)=>{
	var query=req.query;
	db.insert('student',query,(err,result)=>{
		if(err){
			res.send('添加失败');
			return;
		}
		res.send(util.inspect(result))
	})
})

app.get('/find',(req,res)=>{
	db.find('student',{},(err,result)=>{
		if(err){
			res.send('查找失败');
			return;
		}
		res.send(util.inspect(result));
	})
})

app.get('/update',(req,res)=>{
	var oldv={
		'name':'张三'
	}
	var newv={$set:{'age':'100'}}
	db.update('updateOne','student',oldv,newv,(err,result)=>{
		if(err){
			res.send('更新失败');
			return;
		}
		res.send(util.inspect(result));
	})
})

app.get('/delete',(req,res)=>{
	var json={
		'name':'张三'
	}
	db.deleteinfo('deleteOne','student',json,(err,result)=>{
		if(err){
			res.send('删除失败');
			return;
		}
		res.send(util.inspect(result));
	})
})

app.listen(80)