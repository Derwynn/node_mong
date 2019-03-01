const db=require('./models/fnapp');
const express=require('express');
var app=express();
app.use(express.static('./static'));

app.get('/insert',(req,res)=>{
	const query=req.query;
	if(query.name==''||query.tel==''||query.email==''){
		var json={
			ok:false,
			info:'参数不完整'
		}
		res.send(JSON.stringify(json));
		return;
	}
	query.id=new Date().getTime()+''+(Math.floor(Math.random()*899999)+100000)
	db.insert('data',query,(err,result)=>{
		if(err){
			var json={
				ok:false,
				info:'请联系后端'
			}
			res.send(JSON.stringify(json));
			return;
		}
		var json={
			ok:true,
			info:'添加成功'
		}
		res.send(JSON.stringify(json));
	})
})

app.get('/find',(req,res)=>{
	var query=req.query;
	db.find('data',query,(err,result)=>{
		if(err){
			var json={
				ok:false,
				info:'未知'

			}
			res.send(JSON.stringify(json));
			return;
		}
		var json={
			ok:true,
			info:'获取成功',
			data:result
		}
		res.send(JSON.stringify(json));
	})
})




app.get('/findd',(req,res)=>{
	var query=req.query;
	db.find('data',query,(err,result)=>{
		if(err){
			var json={
				ok:false,
				info:'未知'

			}
			res.send(JSON.stringify(json));
			return;
		}
		var json={
			ok:true,
			info:'获取成功',
			data:result
		}
		res.send(JSON.stringify(json));
	})
})




app.get('/delete',(req,res)=>{
	var query=req.query;
	db.deleteinfo('deleteOne','data',query,(err,result)=>{
		if(err){
			var json={
				ok:false,
				info:'删除失败'
			}
			res.send(JSON.stringify(json));
			return;
		}
		var json={
			ok:true,
			info:'删除成功'
		}
		res.send(JSON.stringify(json));
	})
})

app.get('/update',(req,res)=>{
	var query=req.query;
	var oldv={
		id:query.id
	} 
	var newv={
		$set:query
	}
	db.update('updateOne','data',oldv,newv,(err,result)=>{
		if(err){
			var json={
				ok:false,
				info:'修改失败'
			}
			res.send(JSON.stringify(json));
			return;
		}
		var json={
			ok:true,
			info:'更新成功'
		}
		res.send(JSON.stringify(json));
	})
})

app.listen(80);