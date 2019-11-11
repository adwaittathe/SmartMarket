const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback)  {
    
    var tableName = process.env.TableName;
    var params = {
        Item : {
            "id" : context.awsRequestId,
            "AGENCY_NBR" : event.AGENCY_NBR ? event.AGENCY_NBR : " ",
            "BUSINESS_NAME" : event.BUSINESS_NAME ? event.BUSINESS_NAME : " ",
            "HOME_AGENCY_NUMBER" : event.HOME_AGENCY_NUMBER ? event.HOME_AGENCY_NUMBER : " ",
            "BRANCH_AGENCY_NUMBER" : event.BRANCH_AGENCY_NUMBER ? event.BRANCH_AGENCY_NUMBER : " ",
            "ADDR_LINE_1": event.ADDR_LINE_1 ? event.ADDR_LINE_1 : " ",
            "ADDR_LINE_2" : event.ADDR_LINE_2 ? event.ADDR_LINE_2 : " " ,
            "ZIP" : event.ZIP ? event.ZIP : " ",
            "CITY" : event.CITY ? event.CITY : " ",
            "STATE" : event.STATE ? event.STATE : " ",
            "EMAIL" : event.EMAIL ? event.EMAIL : " ",
            "COMPANY_LEGAL_NAME" : event.COMPANY_LEGAL_NAME ? event.COMPANY_LEGAL_NAME : " ",
            "imageUrl" : event.imageUrl ? event.imageUrl : " "
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
               body:'Travel Agency details added successfully'
            });
        }
        
    });
    
};
