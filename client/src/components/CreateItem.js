import React, { Component } from 'react'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default class CreateItem extends Component {
    
    state = {
        show: false,
    }


    handleShow = () => {
        const previousState = { ...this.state }
        previousState.show = true
        this.setState(previousState)
    }

    handleHide = () => {
        const previousState = { ...this.state }
        previousState.show = false
        this.setState(previousState)
    }

    render() {
        return (
            <div>
                <button
                    type="button"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="add-modal"
                    onClick={this.handleShow}
                >
                    Add New Task
                </button>
                <Modal show={this.state.show} onHide={this.handleHide}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Task</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Modal body text goes here.</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleHide}>Close</Button>
                        <Button variant="primary" onClick={this.handleHide}>Save changes</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
