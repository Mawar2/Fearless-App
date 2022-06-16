import React, { Component } from 'react'

const countapi = require('countapi-js');

class EventBind extends Component {

    constructor(props) {
        super(props)
        this.state = {
            views: "click to add views"
        }
    }
    websiteVisits(response) {
        countapi.visits().then((result) => {
            this.setState({
                views: result.value
            })
        })
    }
    render() {
        return (
            <div>

                <div>
                    <h1>This site has been visited {this.state.views} times!</h1>
                </div>
                <button onClick={this.websiteVisits.bind(this)}>Add Views</button>
            </div>
        )
    }
}

export default EventBind