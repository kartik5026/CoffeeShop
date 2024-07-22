"use client";
import confetti from 'canvas-confetti';

function Confetti() {
    const handleCelebrate = () => {
        confetti({
            particleCount: 200,
            spread: 360,
            origin: { y: 0.6 }
        });
    };

    return (
        <div>
            <button onClick={handleCelebrate}>Add to Orders</button>
        </div>
    );
}

export default Confetti;
