import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export function EditMode(): JSX.Element {
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [edit, setEdit] = useState<boolean>(false);

    function UpdateStudent(event: ChangeEvent) {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <Form.Check
                    type="switch"
                    id="is-edit-mode"
                    label="Edit"
                    checked={edit}
                    onChange={() => setEdit(!edit)}
                />
            </div>
            <div>
                {edit ? (
                    <Form.Group controlId="FormPersonName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            value={name}
                            onChange={(event: ChangeEvent) =>
                                setName(event.target.value)
                            }
                        />
                        <Form.Check
                            type="switch"
                            id="is-student"
                            label="Are you a student?"
                            checked={isStudent}
                            onChange={UpdateStudent}
                        />
                    </Form.Group>
                ) : (
                    <div>
                        {name} is {isStudent ? "a student" : "not a student"}
                    </div>
                )}
            </div>
        </div>
    );
}
