import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({ id, title, image, price, rating }) {
    // console.log(id, title, image, price, rating);
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })

    }
    return (
        <div className="CheckoutProduct">
            <img className="CheckoutProduct__image" src={image} alt="" />
            <div className="CheckoutProduct__info">
                <p className="CheckoutProduct__title">{title}</p>
                <small>Rs.</small>
                <strong>{price}</strong>
                <div className="CheckoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>&#11088;</p>
                        ))}
                </div>
                <button onClick={removeFromBasket}>Remove From Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
