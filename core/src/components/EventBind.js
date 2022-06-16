import React, { Component } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background-color: #5715d1;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;
const countapi = require('countapi-js');

class EventBind extends Component {

    constructor(props) {
        super(props)
        this.state = {
            views: 0
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
                <Button button onClick={this.websiteVisits.bind(this)}>Add Views</Button>
            </div>
        )
    }
}

export default EventBind