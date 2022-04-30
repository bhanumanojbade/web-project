import React,{useRef,useEffect} from 'react';

export default function Paypal({placeOrder}) {
 
    const paypal =useRef();

    useEffect(()=>{
      window.paypal.Buttons({
          createOrder:(data,actions,err) =>{
              return actions.order.create({
                  intent:"CAPTURE",
                  purchase_units: [
                      {
                        description:"hi",
                        amount:{
                            currency_code:'USD',
                            value:300
                        }
                      }
                  ]
              })
          },
          onApprove:async (data,actions) =>{
               const order =await actions.order.capture();
               placeOrder();
               console.log("order",order);
          },
          onError:(err) =>{
              console.log("err",err);
          }    
      }).render(paypal.current)
    },[]);  

    return ( 
        <div>
          <div ref={paypal}></div>

        </div>

    )
}