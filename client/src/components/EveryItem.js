import React, { Component } from 'react'
import axios from 'axios'
import CreateItem from './CreateItem.js'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Button from 'react-bootstrap/Button'

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
        const value = this.state.currentItem.finished
        const previousState = { ...this.state }
        previousState.currentItem.finished = !value
        this.setState(previousState)
        const itemId = this.state.currentItem._id
        axios.put(`/api/item/${itemId}`, this.state.currentItem)
    }


    render() {
        let description = this.state.currentItem.description
        let finished = this.state.currentItem.finished
        return (
            <div>
                <h1>To Do</h1>
                <div className="row">
                    <div className="col-4">
                        <div className="list-group" id="list-tab" role="tablist">
                            {this.state.itemList.map((item) => {
                                const refLink = `#list-${item._id}`
                                return (
                                    <a key={item._id} id={item._id} onClick={this.onTaskSelection} className="list-group-item list-group-item-action" href={refLink} data-toggle="list" role="tab">
                                        {item.name}
                                    </a>

                                )
                            })}
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="tab-content" id="nav-tabContent">
                            {description ?
                                <div className="tab-pane fade show active" role="tabpanel">
                                    <ButtonToolbar>
                                        <Button variant="outline-success" size='sm' onClick={this.onFinishedClick} >{finished ? "Make Active Again" : "Mark As Done"}</Button>
                                        <Button variant="outline-warning" size='sm'>Remove</Button>
                                    </ButtonToolbar>
                                    {description}
                                </div>
                                : null}
                        </div>
                    </div>
                </div>
                <br />
                <CreateItem refresh={this.refreshItem} />
            </div>
        )
    }
}
