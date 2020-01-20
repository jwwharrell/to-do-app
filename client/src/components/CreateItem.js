import React, { Component } from 'react'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export default class CreateItem extends Component {

    state = {
        show: false,
        newTaskName: '',
        newTaskDescription: ''
    }


    createNewTask = () => {
        const newTask = {
            name: this.state.newTaskName,
            description: this.state.newTaskDescription
        }
        axios.post('api/item', newTask)
        this.handleHide()
    }

    handleShow = () => {
        const previousState = { ...this.state }
        previousState.show = true
        this.setState(previousState)
    }

    handleHide = () => {
        const previousState = { ...this.state }
        previousState.show = false
        previousState.newTaskName = ''
        previousState.newTaskDescription = ''
        this.setState(previousState)
    }

    onNameFormChange = (e) => {
        const newTaskName = e.target.value;
        this.setState({newTaskName})
    }

    onDescriptionFormChange = (e) => {
        const newTaskDescription = e.target.value;
        this.setState({newTaskDescription})
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
                <Modal
                    show={this.state.show}
                    onHide={this.handleHide}
                    centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Task</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Task Title:</Form.Label>
                                <Form.Control onChange={this.onNameFormChange}/>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Task Description:</Form.Label>
                                <Form.Control as="textarea" rows="3" onChange={this.onDescriptionFormChange}/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleHide}>Close</Button>
                        <Button variant="primary" onClick={this.createNewTask}>Save changes</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
