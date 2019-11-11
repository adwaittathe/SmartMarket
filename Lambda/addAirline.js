const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback)  {
    
    var tableName = process.env.TableName;
    if(!event.STATE)
    {
        event.STATE = " "
    }
    var params = {
        Item : {
            "id" : context.awsRequestId,
            "CARR_CODE" : event.CARR_CODE,
            "CARR_ALPHA_CODE" : event.CARR_ALPHA_CODE,
            "CARR_NAME" : event.CARR_NAME,
            "ADDRESS" : event.ADDRESS,
            "CITY" : event.CITY,
            "STATE" : event.STATE,
            "imageUrl" : event.imageUrl
        },
        TableName : tableName
        
    };

    dynamoDB.put(params, function(err,data){
        if (err) {
            console.log(err, err.stack);
            callback(null, {
                statusCode: '500',
                body: err
            });
        }
        else
        {
            callback(null,{
               statusCode:'200',
               body:'Airlines details added successfully'
            });
        }
        
    });
    
};
