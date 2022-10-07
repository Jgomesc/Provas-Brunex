import React, { useState } from "react";
import { useEffect } from "react";
import "./index.sass";

const Index = () => {
    const [grama, setGrama] = useState(0);
    const [result, setResult] = useState(0);

    useEffect(() => {
        if (grama > 1000) {
            
        }
    })

    return (
        <div className="sorvete">
            <main>
                <h1>Sorvete</h1>
                <div>
                    Gramas: <input type="number" value={grama} onChange={(e) => setGrama(e.target.value)} />
                    </div>
                <div className="sorvete-total">Total: {result}</div>
            </main>
        </div>
    );
};

export default Index;
