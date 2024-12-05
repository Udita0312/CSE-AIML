import React, { useState } from "react";

const FavoriteColor = () => {
    const [color, setColor] = useState("black");

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1 style={{ color }}>My Favorite Color is {color}</h1>
            <div>
                <button
                    onClick={() => setColor("red")}
                    style={{
                        backgroundColor: "red",
                        color: "white",
                        border: "none",
                        padding: "10px 20px",
                        margin: "5px",
                        cursor: "pointer",
                    }}
                >
                    Red
                </button>
                <button
                    onClick={() => setColor("green")}
                    style={{
                        backgroundColor: "green",
                        color: "white",
                        border: "none",
                        padding: "10px 20px",
                        margin: "5px",
                        cursor: "pointer",
                    }}
                >
                    Green
                </button>
                <button
                    onClick={() => setColor("yellow")}
                    style={{
                        backgroundColor: "yellow",
                        color: "white",
                        border: "none",
                        padding: "10px 20px",
                        margin: "5px",
                        cursor: "pointer",
                    }}
                >
                    Yellow
                </button>
                <button
                    onClick={() => setColor("blue")}
                    style={{
                        backgroundColor: "blue",
                        color: "white",
                        border: "none",
                        padding: "10px 20px",
                        margin: "5px",
                        cursor: "pointer",
                    }}
                >
                    Blue
                </button>
            </div>
        </div>
    );
};

export default FavoriteColor;
