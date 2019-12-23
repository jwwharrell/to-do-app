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
                <div class="row">
                    <div class="col-4">
                        <div class="list-group" id="list-tab" role="tablist">
                            {this.state.itemList.map((item) => {
                                return (
                                    <a class="list-group-item list-group-item-action" data-toggle="list" role="tab">{item.name}</a>
                                )
                            })}
                        </div>
                    </div>
                    <div class="col-8">
                        <div class="tab-content" id="nav-tabContent">
                            {this.state.itemList.map((item) => {
                                return (
                                    <div class="tab-pane fade show active"  role="tabpanel">{item.description}</div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
