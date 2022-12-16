import './App.css';
// import Checkout from './components/Checkout';
let Spreedly = window.Spreedly()


Spreedly.init("C7cRfNJGODKh4Iu5Ox3PToKjniY", {
  "amount": "$9.83",
  "company_name": "Acme Widgets",
  "sidebar_top_description": "Providing quality widgets since 2015",
  "sidebar_bottom_description": "Your order total today",
  "full_name": "First Last"
}, {
  "email": "customer@gmail.com"
});

function App() {
  return (
    <div className="App">
        {/* <Checkout/> */}
        <form id="payment-form" action="https://yoursite.com/checkout">
                <input type="hidden" name="payment_method_token" id="payment_method_token" />
                <input type="button" value="Enter Payment Info" onclick={Spreedly.openView()} />
            </form>
    </div>
  );
}

export default App;
