var AWS = require("aws-sdk");

exports.handler = (event,context,callback) => {
   var s3 = new AWS.s3();
   var sb = "s1510soucebucket";
   var db = "s1510destinationbucket";
   var objectKey = event.Records[0].s3.object.key;
   var copySource = encodeURI(sb + "/" + objectKey);
   var copyParams = (Bucket : db, copySource : copySource,key : objectKey);
   s3.copyObject(copyParams,function(err,data){
       if(err){
           console.log(err,err.stack);
       }
       else{
           console.log("s3 object copy successful.");
       }
   });
   
   
};