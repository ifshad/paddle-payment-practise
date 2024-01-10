import { useEffect, useState } from "react";
import { initializePaddle } from '@paddle/paddle-js';

const Home = () => {
    const [paddle, setPaddle] = useState(null);
    // const clientSideToken = import.meta.env.REACT_APP_CLIENT_SIDE_TOKEN;
    // const priceIdToken = import.meta.env.REACT_APP_PRICE_ID;
    // console.log(import.meta.env.REACT_APP_CLIENT_SIDE_TOKEN);

    // inialize paddle
    useEffect(() => {
        initializePaddle({
            environment: 'sandbox',
            token: `${import.meta.env.REACT_APP_CLIENT_SIDE_TOKEN}`,
        })
            .then((paddleInstance) => {
                if (paddleInstance) {
                    setPaddle(paddleInstance)
                }
                // console.log(paddleInstance);
            })
    }, [])

    // button handler
    const handlePurchase = () => {
        paddle.Checkout.open({
            items: [{
                priceId: `${import.meta.env.REACT_APP_PRICE_ID}`, 
                quantity: 1,
            }]
        });
        // console.log(items);
    }
    return (
        <div className="m-4 p-4">
            <h2>My product</h2>
            <button onClick={handlePurchase} className="btn btn-outline btn-accent">Buy Now</button>
        </div>
    );
};

export default Home;