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
                this.setState({itemList: res.data})
            })
    }

    render() {
        return (
            <div>
                <h1>Hello Item</h1>
                <ol>
                {this.state.itemList.map((item) => {
                    return (
                        <li>
                            {item.name}
                        </li>
                    )
                })}
                </ol>
            </div>
        )
    }
}
