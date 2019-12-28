import React, { Component } from 'react'
import axios from 'axios'
import CreateItem from './CreateItem.js'

export default class EveryItem extends Component {
    state = {
        itemList: [],
        activeDescription: null
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
                this.setState({ activeDescription: res.data.description })
            })
    }

    render() {
        let description = this.state.activeDescription
        return (
            <div>
                <h1>To Do</h1>
                <div className="row">
                    <div className="col-4">
                        <div className="list-group" id="list-tab" role="tablist">
                            {this.state.itemList.map((item) => {
                                const refLink = `#list-${item._id}`
                                return (
                                    <a key={item._id} id={item._id} onClick={this.onTaskSelection} className="list-group-item list-group-item-action" href={refLink} data-toggle="list" role="tab">{item.name}</a>
                                )
                            })}
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="tab-content" id="nav-tabContent">
                            {description ? <div className="tab-pane fade show active"  role="tabpanel">{description}</div> : null}
                        </div>
                    </div>
                </div>
                <br/>
                <CreateItem />
            </div>
        )
    }
}
