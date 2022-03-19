import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function GiveAttempts(): JSX.Element {
    const [attempts, setattempts] = useState<string>("3");
    const [gain, setGain] = useState<string>("");

    function UpdateAttempts(event: ChangeEvent) {
        setGain(event.target.value);
    }

    function Use() {
        const att = parseInt(attempts) - 1;
        setattempts(att.toString());
    }

    function Gain() {
        let att = 0;
        if (isNaN(parseInt(gain))) {
            att = parseInt(attempts);
        } else {
            att = parseInt(attempts) + parseInt(gain);
        }
        setattempts(att.toString());
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>{attempts}</div>
            <Form.Group controlId="FormAttempt">
                <Form.Label>Attempts you want:</Form.Label>
                <Form.Control
                    type="number"
                    value={gain}
                    onChange={UpdateAttempts}
                />
                <Button onClick={Use} disabled={parseInt(attempts) < 1}>
                    use
                </Button>
                <Button onClick={Gain}>gain</Button>
            </Form.Group>
        </div>
    );
}
