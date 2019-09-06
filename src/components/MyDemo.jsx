import React from 'react';

export default function MyDemo(props) {
  console.log(props);
  return <div>{props.message.source.body.toUpperCase()}</div>;
}

// if (!props.message.source.isFromMe && !localStorage.getItem(props.message.source.authorName) && props.message.source.authorName) {
//     let user = _.find(users, {name: props.message.source.body});
//     localStorage.setItem(props.message.source.authorName, user ? user.name : 'Minerva McGonagall');
// }
// return <div>{props.message.source.body}</div>