import React, { useEffect, useMemo, useState } from 'react'

const Cart = ({ cart }) => {
    const [sum, setSum] = useState(0);
    const aedToInr = (num) => {
        // for (let i = 0; i < 10000; i++) {

        // }                             
        return num * 30;
    }
    const totalPriceInr = useMemo(() => {
        return aedToInr(sum);
    }, [sum])



    useEffect(() => {
        let sum = 0;
        cart.map((item) => sum += item.price)
        console.log(sum)
        setSum(sum)


    }, [])

    return (
        <div>
            <b> Product Card</b>

            {cart.map((items, index) => {
                return (
                    <div key={index} >

                        <b> {items.title}</b>

                        <div className="side-nav-heading-icon">
                            {items.price}
                        </div>

                    </div>


                )
            })}

            <div>
                Total Price -  {totalPriceInr} {sum}
            </div>
        </div>

    );

}

export default React.memo(Cart);