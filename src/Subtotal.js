import React from 'react'
import './Subtotal.css'
import { getBasketTotal } from './reducer'
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider'
function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    const thankYouMessage = () => {
        alert("Your order is confirmed.")
    }
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            ( Subtotal {basket.length} items ) : <strong>{`${value}`}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains
                        </small>
                    </>
                )}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'Rs.'}
            />

            <button onClick={thankYouMessage}>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
