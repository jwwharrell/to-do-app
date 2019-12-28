import React, { Component } from 'react'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default class CreateItem extends Component {

    onAddNewTaskClick = (e) => {
        console.log(e.target)
    }

    render() {
        return (
            <div>
                <button
                    type="button"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="add-modal"
                    onClick={this.onAddNewTaskClick}
                >
                    Add New Task
                </button>
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Modal body text goes here.</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary">Close</Button>
                        <Button variant="primary">Save changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        )
    }
}
