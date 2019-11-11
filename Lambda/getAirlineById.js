const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient(); 

exports.handler = (event, context, callback) => {
    
    var tableName = process.env.TABLE_NAME;
    let scanning = {
        TableName : tableName,
        Key : {
            id : event.id
        }
    };
    dynamo.get(scanning, function(err,data){
       if(err){
            const errorResponse = {
            statusCode: 400,
                body: JSON.stringify({
                  message: err.stack,
                }),
            };
            
           callback(null,errorResponse)
       } 
       else
       {
           const response = {
                statusCode: 200,
                body: JSON.stringify(data.Item)
            };
           callback(null,data.Item);
       }
    });

};
