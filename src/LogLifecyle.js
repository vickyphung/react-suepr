import React from 'react';
import LogLifecyle from 'react-log-lifecycle';

// // Optional flags:
// const flags = {
//   // If logType is set to keys then the props of the object being logged
//   // will be written out instead of the whole object. Remove logType or 
//   // set it to anything except keys to have the full object logged.
//   logType: 'keys',
//   // A list of the param "types" to be logged.
//   // The example below has all the types.
//   names: ['props', 'nextProps', 'nextState', 'prevProps', 'prevState']
// };

export default class MyReactComponent extends LogLifecyle {
  constructor(props) {
    super(props, flags);
  }
  render() {

    console.log('MyReactComponent render');

    return (
      <div>My Component with React Lifecycle Logging</div>
    );
  }
}