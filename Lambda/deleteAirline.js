const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();
exports.handler = (event, context, callback) => {
    
    var tableName = process.env.TableName;
    var params = {
        Key : {
            "id" : event.id.trim()
        },
        TableName : tableName
    };
    
    dynamoDB.delete(params, function(err,data){
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
               body:'Airlines details deleted successfully'
            });
        }
        
    });

 
};
