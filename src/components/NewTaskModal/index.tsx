import { useState } from 'react';
import { FormEvent } from 'react';
import Modal from 'react-modal';
import { Container } from "./styles";

interface NewTaskModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTaskModal({ isOpen, onRequestClose }: NewTaskModalProps) {



    const [name, setName] = useState('');
    const [deadline, setDeadline] = useState('');

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault();

        // localStorage.clear();
        var numTasks = localStorage.getItem("numTasks");


        var num: number = 0;
        if (numTasks == null) {
            numTasks = "0";
        }
        else {
            num = JSON.parse(numTasks);
            num = num + 1
        }

        const task = {
            name: name,
            dealine: deadline,
            id: num

        }
        localStorage.setItem(JSON.stringify(numTasks), JSON.stringify(task));
        localStorage.setItem("numTasks", JSON.stringify(num))
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type='button'
                onClick={onRequestClose}
                className="react-modal-close"
            >
                X
            </button>

            <Container onSubmit={handleCreateNewTask}>
                <h2>Create Task</h2>

                <input
                    placeholder='Name'
                    value={name}
                    onChange={event => setName(event.target.value)}
                />

                <input
                    type="text"
                    placeholder='Deadline'
                    value={deadline}
                    onChange={event => setDeadline(event.target.value)}
                />

                <button type="submit">
                    Register
                </button>
            </Container>
        </Modal>
    );
}