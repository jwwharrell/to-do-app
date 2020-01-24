import React, { Component } from 'react'
import axios from 'axios'
import CreateItem from './CreateItem.js'
import EmptyState from './EmptyState'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class EveryItem extends Component {
    state = {
        itemList: [],
        currentItem: {
            name: '',
            description: '',
            finished: ''
        }
    }

    componentDidMount() {
        this.refreshItem()
    }

    refreshItem = () => {
        axios.get('api/item')
            .then((res) => {
                this.setState({ itemList: res.data })
            })
    }

    onTaskSelection = (e) => {
        const itemId = e.target.id
        axios.get(`api/item/${itemId}`)
            .then((res) => {
                this.setState({ currentItem: res.data })
            })
    }

    onFinishedClick = () => {
        console.log()
        const value = this.state.currentItem.finished
        const previousState = { ...this.state }
        previousState.currentItem.finished = !value
        this.setState(previousState)
        const itemId = this.state.currentItem._id
        axios.put(`/api/item/${itemId}`, this.state.currentItem)
            .then(this.refreshItem)
    }

    onRemoveClick = () => {
        let id = this.state.currentItem._id
        axios.delete(`/api/item/${id}`)
            .then(() => {
                this.refreshItem()
            })
        const emptyItem = {
            name: '',
            description: '',
            finished: ''
        }
        const previousState = { ...this.state }
        previousState.currentItem = emptyItem
        this.setState(previousState)

    }

    render() {
        let description = this.state.currentItem.description
        let finished = this.state.currentItem.finished
        return (
            <Container>
                <h1>ToDo</h1>
                <Row>
                    <Col>
                        <div className="list-group" id="list-tab" role="tablist">
                            {this.state.itemList.map((item) => {
                                const refLink = `#list-${item._id}`
                                return (
                                    <a key={item._id} id={item._id} onClick={this.onTaskSelection} className='list-group-item list-group-item-action' href={refLink} data-toggle="list" role="tab" >
                                        {item.finished ? "Complete" : item.name}
                                    </a>
                                )
                            })}
                        </div>
                    </Col>
                    <Col>
                        <div className="tab-content" id="nav-tabContent">
                            {description ?
                                <div className="tab-pane fade show active" role="tabpanel">
                                    <Button variant={finished ? "outline-dark" : "outline-primary"} size='sm' onClick={this.onFinishedClick} >{finished ? "Make Active Again" : "Mark As Done"}</Button>
                                    <br />
                                    <br />
                                    {description}
                                    <br />
                                    <br />
                                    <Button variant="outline-danger" size='sm' onClick={this.onRemoveClick}>Remove</Button>
                                </div>
                                : <EmptyState />}
                        </div>
                        <br />
                        <CreateItem refresh={this.refreshItem} />
                    </Col>

                </Row>

            </Container>
        )
    }
}
