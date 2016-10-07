exports.calculate = function(req,res){
	var json_responses;
	var operation = req.param("operation");
	var result = req.param("result");
	var input = req.param("input");

		if (operation == "+") {
		if(parseFloat(input))
			{
				result=parseFloat(result)+parseFloat(input);
			}
		}
		if (operation == "-") {
			if(parseFloat(input))
			{
				result=parseFloat(result)-parseFloat(input);
			}
		}
		if (operation == "*") {
			if(parseFloat(input))
			{
				result=parseFloat(result)*parseFloat(input);
			}
		}
		if (operation == "/") {
			if(parseFloat(input) && parseInt(input)!=0)
			{
				result=parseFloat(result)/parseFloat(input);
			}
			else
			{
				json_responses = {"statusCode" : 401, "result" : result};
				res.send(json_responses);				
			}
		}
		json_responses = {"statusCode" : 200, "result" : result};
		res.send(json_responses);

};