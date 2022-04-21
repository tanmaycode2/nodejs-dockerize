const express = require("express");
const app = express();

// create route
app.get("/", function(req, res){
    res.send("Hello from Docker by tanmay!")
});

/** port nos : 3000, 8000. 8080, 8888 */
app.listen(3000,function(){
    console.log("app listening on 3000");
});