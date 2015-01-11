var express = require('express');
var app = express();

app.set('view engine','jade');

app.use(express.static('public'));

app.get('/',function(req,res){
    res.render('index');
})


var PORT = 3000;
app.listen(PORT,function(){
    console.log('CUTC landing page running on port ' + PORT);
})