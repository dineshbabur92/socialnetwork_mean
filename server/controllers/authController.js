var user = require("../datasets/users");

module.exports.signup = function(req, res){
    
    console.log("inside signup");
    var u = new user(req.body);
    u.save();
    
    res.send(req.body);
     
    
};

module.exports.login = function(req, res){
    
    console.log("server login initiated");
    console.log("request body===========",req.body);
    user.find(req.body, function(err, results){
        
        if(err){
            
            console.log(err);
            
        }
        if(results && results.length==1){
            console.log(results);
            console.log({"userid": results[0]._id.toString(), "email": results[0].email.toString()});
            res.json({"userid": results[0]._id, "email": results[0].email, "following": results[0].following});
            console.log("sent email");
            
        }
        
    });
    
};