import React, { Component, PropTypes } from 'react';
import {withTheme, withTaskContext} from '@twilio/flex-ui';
import styled from 'react-emotion';

const _ = require('lodash');
const users = require('./characters.json');
const CharacterCard = styled("div")`
    padding: 10px;
    margin: 0px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: left;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;
    color: rgb(34, 34, 34);
    flex: 1 1 auto;
    background: rgb(255, 255, 255);

    h1 {
        padding:10px;
        display:block;
    }
    img {
        height:250px;
    }`;


class CharacterComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const number = _.get(this.props, 'task.attributes.name');
        if(number && localStorage.getItem(number)) {
            let name = localStorage.getItem(number);
            let user = _.find(users, { 'name': name });
            return <CharacterCard>
                <h1 className="Twilio">User Info</h1>
                <p>Name: {user.name}</p>
                <img src={user.image} />
                <span className="Twilio">House: {user.house}</span>
                <br / >
                <p>Birthday: {user.dateOfBirth}</p>
                <br / >
                <b>Student: {user.hogwartsStudent ? 'Yes': 'No'}</b>   
            </CharacterCard>;
        } else {
            return <CharacterCard>
                <h1 class="Twilio">User Info</h1>
            </CharacterCard>;
        }
        
    }
}

export default withTheme(withTaskContext(CharacterComponent));
