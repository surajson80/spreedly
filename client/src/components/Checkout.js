import React from 'react'

const Checkout = () => {
    // console.log(SpreedlyExpress.openView());
    // SpreedlyExpress.openView();
    let SpreedlyExpress = window.Spreedly()
    SpreedlyExpress.init("C7cRfNJGODKh4Iu5Ox3PToKjniY", {
        "amount": "$9.83",
        "company_name": "Acme Widgets",
        "sidebar_top_description": "Providing quality widgets since 2015",
        "sidebar_bottom_description": "Your order total today",
        "full_name": "First Last"
    }, {
        "email": "customer@gmail.com"
    });


    // SpreedlyExpress.onPaymentMethod(function(token, paymentMethod) {

    //     // Send requisite payment method info to backend
    //     var tokenField = document.getElementById("payment_method_token");
      
    //     tokenField.setAttribute("value", token);
      
    //     var masterForm = document.getElementById('payment-form');
    //     masterForm.submit();
    //   });

    return (
        <>
            <form id="payment-form" action="https://yoursite.com/checkout">
                <input type="hidden" name="payment_method_token" id="payment_method_token" />
                <input type="button" value="Enter Payment Info" onclick={SpreedlyExpress.openView()} />
            </form>
        </>
    )
}

export default Checkout