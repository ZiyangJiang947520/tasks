import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "white",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "black"
];

export function ChangeColor(): JSX.Element {
    const [chosen, setChosen] = useState<string>("white");
    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((color: string) => (
                <Form.Check
                    type="radio"
                    name="colors"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setChosen(event.target.value)
                    }
                    key={color}
                    inline
                    id={"colors-choice" + color}
                    label={
                        <span style={{ backgroundColor: color }}>{color}</span>
                    }
                    value={color}
                    checked={chosen === color}
                />
            ))}
            <p>
                You have chosen:{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: chosen }}
                >
                    {chosen}
                </span>
            </p>
        </div>
    );
}
