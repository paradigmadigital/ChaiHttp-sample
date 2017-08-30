'use stricts';

const restify = require('restify');

const server = restify.createServer();

server.get('/', function(req, res) {  
   res.send("Esto funciona!");
});

let pais={id: 0,country:"Noruega",year:2015,days:17};

var countries = [pais];
let lastId=0;

server.use(restify.jsonBodyParser({ mapParams: true }))

server.post('/country',(req,res,next)=>{
	const body=req.body;
	console.log(body);
	if(body.country==='Madrid'){
		res.send(500,'Elemento country enviado no es un país');
	}else{
		body.id=++lastId;
		countries.push(body);
		res.send(200,'Se ha introducido país');
	}
	next();
});

server.get('/countries',(req,res,next)=>{
	
	res.send(200,countries);
	next();
});

server.get('/country/:id',(req,res,next)=>{
	var id=req.params.id;

	res.send(200,countries[id]);
	next();
});

server.del('/country/:id',(req,res,next)=>{
	var id=req.params.id;
	//delete countries[id];
	countries.splice(id,1);
	res.send(200,'Elemento eliminado');
	next();
});

server.put('/country/:id/days/:days',(req,res,next)=>{
	var id=req.params.id;
	var days=parseInt(req.params.days);
	var data=countries[id];
	data.days=days;
	countries.splice(id,1,data);
	console.log(countries);
	res.send(200,data);
	next();
});

///notes/:id--> req.params.id
server.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
  });