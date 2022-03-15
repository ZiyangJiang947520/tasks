import React, { useState } from "react";
const [answer, setAnswer] = useState<string>("");
export function ChangeColor(): JSX.Element {
    return (
        <div>
            <h3>Change Color</h3>
        </div>
    );
}
