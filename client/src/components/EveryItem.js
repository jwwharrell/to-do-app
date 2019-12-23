import React, { Component } from 'react'
import axios from 'axios'

export default class EveryItem extends Component {
    state = {
        itemList: [],
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

    render() {
        return (
            <div>
                <h1>To Do</h1>
                <div className="row">
                    <div className="col-4">
                        <div className="list-group" id="list-tab" role="tablist">
                            {this.state.itemList.map((item) => {
                                const refLink = `#list-${item._id}`
                                return (
                                    <a key={item._id} className="list-group-item list-group-item-action" href={refLink} data-toggle="list" role="tab">{item.name}</a>
                                )
                            })}
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="tab-content" id="nav-tabContent">
                            {this.state.itemList.map((item) => {
                                const refLink = `#list-${item._id}`
                                return (
                                    <div key={item._id} id={refLink} className="tab-pane fade show active"  role="tabpanel">{item.description}</div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
