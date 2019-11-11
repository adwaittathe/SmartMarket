const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback)  {
    
    var tableName = process.env.TableName;
    var params = {
        Key : {
            "id" : event.id.trim()
        },
        UpdateExpression : "SET  #state = :STATE_a ,  CITY = :CITY, CARR_NAME = :CARR_NAME, ADDRESS = :ADDRESS, CARR_CODE = :CARR_CODE ,CARR_ALPHA_CODE = :CARR_ALPHA_CODE, imageUrl = :IM",
        ExpressionAttributeNames :{
                '#state': "STATE"
        },
        ExpressionAttributeValues:{
          ":CITY" : event.CITY,
          ":CARR_NAME" : event.CARR_NAME,
          ":ADDRESS" : event.ADDRESS,
          ":CARR_CODE" : event.CARR_CODE,
          ":CARR_ALPHA_CODE" : event.CARR_ALPHA_CODE,
          ":STATE_a" : event.STATE,
          ":IM" : event.imageUrl
          
        },
        TableName : tableName,
        ReturnValues:"UPDATED_NEW"
        
    };

    dynamoDB.update(params, function(err,data){
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
               body:'Airlines details updated successfully'
            });
        }
        
    });
    
};
