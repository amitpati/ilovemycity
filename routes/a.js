exports.home=function(req,res){
	
	res.render('home',{headline:'We belive every city to say something'});
}

exports.city=function(req,res){
	
	var cityName=req.params.city;
	var title,headline,imageCount=4;
	
	if(cityName == 'india'){
		title="India";
		headline="City of democracy";
	}
	else if(cityName == 'pakistan'){
		title="Pakistan";
		headline="City of terorist";
	}
	else if(cityName == 'nepal'){
		title="Nepal";
		headline="City of budha";
		}
	else if(cityName == 'srilanka'){
		title="Srilanka";
		headline="City of loard RAM!!!Jay Hanuman";
	}
	else if(cityName == 'china'){
		title="China";
		headline="City of indian market";
		imageCount=4;
	}
	res.render('city',{
		title:title,
		headline:headline,
		cityName:cityName,
		imageCount:imageCount
	})
	
}