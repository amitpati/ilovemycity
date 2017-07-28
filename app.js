var express= require ('express');
var app=express();
var routes= require ('./routes/a.js');

app.set('view engine','ejs');
//Middle wares
app.use(express.static(__dirname + '/public'));

app.get('/',routes.home);
app.get('/:city',routes.city);


var port=process.env.PORT || 8081;

var server=app.listen(port,function(req,res){
	console.log("http://localhost:"+port)
})
