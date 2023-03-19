import React, {useRef, useEffect} from 'react'





export default function () {
    const paypal = useRef()
    
    useEffect(()=>{
        window.paypal.Buttons({
            createOrder: (data, actions, err) =>{
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase: [
                        {
                            description: "Pickfurniture",
                            amount: {
                                currency_code: "USD",
                                value: 100,
                            },
                        },
                    ],
                });
            },
            onApprove: async (data, actions) =>{
                const order = await actions.order.capture();
                console.log(order);
            },
            onError: (err)=>{
                console.log(err);
            }
        })
        .render(paypal.current)
    }, [])
  return (
    <div>
        <div ref={paypal}></div>
    </div>
  )
}

