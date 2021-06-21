var express = require('express');
var cors = require('cors');
const request = require('request')
const bodyParser = require('body-parser');

const app = express();

const port = app.listen(process.env.PORT || 7000);
const _urlencoded = express.urlencoded({ extended: false })
app.use(cors())
app.use(express.json())


app.get('/', (req, res,next)=>{

    res.status(200).send("Hello welcome to gospel Mpesa API")
    
    
    });





    ///----Stk Push ---//
app.get('/stkPush', access, _urlencoded,function(req,res){

    let _phoneNumber = req.body.phone
    let _Amount = req.body.amount


    let endpoint = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"
    let auth = "Bearer "+ req.access_token

    let _shortCode = '174379';
    let _passKey = 'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919'
   


    
      
    const timeStamp = (new Date()).toISOString().replace(/[^0-9]/g, '').slice(0, -3);
    const password = 
    Buffer.from(`${_shortCode}${_passKey}${timeStamp}`).toString('base64');

    request(
        {
            url:endpoint,
            method:"POST",
            headers:{
                "Authorization": auth
            },
    
        json:{
    
                    "BusinessShortCode": "174379",
                    "Password": password,
                    "Timestamp": timeStamp,
                    "TransactionType": "CustomerPayBillOnline",
                    "Amount": "1",
                    "PartyA": "254746291229",
                    "PartyB": "174379", //Till  No.
                    "PhoneNumber": "254723130091",
                    "CallBackURL": "http://localhost:7000/stk_callback",
                    "AccountReference": "Gospel View lipa na Mpesa",
                    "TransactionDesc": "My Payment"

            }

        },
       (error,response,body)=>{

            if(error){

                
                console.log(error);
                res.status(404).json(error);

            }else{
                
                res.status(200).json(body);
                _checkoutRequestId2 = body.CheckoutRequestID;
                console.log(body);
                console.log(_checkoutRequestId2)
                

            }
               

        })

});



//-----Callback Url ----///
app.post('/stk_callback',_urlencoded,function(req,res,next){
 
    console.log('.......... STK Callback ..................');
    if(res.status(200)){

        res.send.json((req.body.Body.stkCallback.CallbackMetadata))
        console.log(req.body.Body.stkCallback.CallbackMetadata)
        
        }else if(res.status(404)){
        res.json((req.body))
        console.log(req.body.Body);
    }
    next()

    })



///----STK QUERY ---
app.post('/stk/query',access,_urlencoded,function(req,res,next){

    let _checkoutRequestId = req.body.checkoutRequestId

    auth = "Bearer "+ req.access_token

    let endpoint =' https://api.safaricom.co.ke/mpesa/stkpushquery/v1/query'
    const _shortCode = '4069571'
    const _passKey = '8e2d5d66120bfb538400be31f2fa885e90ef3acb5bc037454bbf23223fcb394a'
    const timeStamp = (new Date()).toISOString().replace(/[^0-9]/g, '').slice(0, -3)
    const password = Buffer.from(`${_shortCode}${_passKey}${timeStamp}`).toString('base64')
    

    request(
        {
            url:endpoint,
            method:"POST",
            headers:{
                "Authorization": auth
            },
           
        json:{
    
            'BusinessShortCode': _shortCode,
            'Password': password,
            'Timestamp': timeStamp,
            'CheckoutRequestID': _checkoutRequestId

            }

        },
        function(error,response,body){

            if(error){

                console.log(error);
                res.status(404).json(body);

            }else{
                res.status(200).json(body)
                console.log(body)
                next()
            }

        })

})








///-----Get AccessToken ------/////
    app.get('/access_token',access,(req,res)=>{

        res.status(200).json({access_token: req.access_token})
    
    })

function access(res,req,next){

    let endpoint ="https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials"
    let auth = new Buffer.from("lP4Iex4IhHIDPgVoMLRFG5CPoIzEUFZr:gtAXPZpmYxUp0Qkc").toString('base64');

    request(
    {
        url:endpoint,
        headers:{
            "Authorization": "Basic  " + auth
        }

    },
    (error,response,body)=>{

        if(error){
            console.log(error);
        }else{
        
            res.access_token = JSON.parse(body).access_token
            console.log(body)
            next()
        
        }
            
    }
    )


}

 

//--Port listening
app.listen(port,(error)=>{

    if(error){
        
    }else{  
        console.log(`Server running on port http://localhost:${port}`)
    }
    
    });
