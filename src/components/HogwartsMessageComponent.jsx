import React from 'react'
const users = require('./characters.json');
const _ = require('lodash')

export default function HogwartsMessageComponent(props) {
  return <div>{props.message.source.body}</div>
}