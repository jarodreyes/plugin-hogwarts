import React from 'react'
const users = require('./characters.json');
const _ = require('lodash')

export default function HogwartsMessageComponent(props) {
  console.log(props);
  console.log(`Name: ${props.message.source.authorName}`);
  let user = _.find(users, {name: props.message.source.body});
  if (!localStorage.getItem(props.message.source.authorName) && props.message.source.authorName) {
    localStorage.setItem(props.message.source.authorName, user ? user.name : 'Minerva McGonagall');
  }
  return <div>{props.message.source.body}</div>
}