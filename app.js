const mongodb=require('mongodb');
const mongoClient=mongodb.MongoClient;
const url='mongodb://127.0.0.1:27017';
mongoClient.connect(url,(err,client)=>{
	if(err){
		console.log('连接失败')
	}else{
		console.log('连接成功')
	}


	var user=client.db('user');
	// var json={
	// 	'name':'张三',
	// 	'age':18,
	// 	'sex':'男'
	// }
	// user.collection('mycol').insert(json,(err,res)=>{
	// 	if(err){
	// 		console.log('添加失败')
	// 	}else{
	// 		console.log('添加成功')
	// 	}
	// 	client.close()
	// })
	
    
    // user.collection('mycol').find().toArray((err,resu)=>{
    // 	if(err){
    // 		console.log('查找失败')
    // 	}else{
    // 		console.log(resu)
    // 	}
    // 	client.close()
    // })
    

    // var z={'age':{$gt:21}}
    // user.collection('mycol').find(z).toArray((err,resu)=>{
    // 	if(err){
    // 		console.log('查找失败')
    // 	}else{
    // 		console.log(resu)
    // 	}
    // })
    
    
    // var old={'name':'张三'}
    // var neww={$set:{'sex':'女'}}
    // user.collection('mycol').updateOne(old,neww,(err,res)=>{
    // 	if(err){
    // 		console.log('更新失败')
    // 	}else{
    // 		console.log('更新成功')
    // 	}
    // 	client.close()
    // })
    
    
    // var shan = {'name':'张三'}
    // user.collection('mycol').deleteOne(shan,(err,res)=>{
    // 	if(err){
    // 		console.log('删除失败')
    // 	}else{
    // 		console.log('删除成功')
    // 	}
    // 	client.close()
    // })
})