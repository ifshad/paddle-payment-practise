import { useEffect, useState } from "react";
import { initializePaddle } from '@paddle/paddle-js';

const Home = () => {
    const [paddle, setPaddle] = useState(null);
    // console.log(paddle);

    // inialize paddle
    useEffect(() => {
        initializePaddle({
            environment: 'sandbox',
            token: 'test_3b5cdb31e5f685c558efdb2ba8a'
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
                priceId: 'pri_01hkqprs3ay7avm80x53w1hpf0', quantity: 1,}]
        });
        // console.log(paddle.Checkout.open);
    }
    return (
        <div className="m-4 p-4">
            <h2>My product</h2>
            <button onClick={handlePurchase} className="btn btn-outline btn-accent">Buy Now</button>
        </div>
    );
};

export default Home;