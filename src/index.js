import React from 'react';
import ReactDOM from 'react-dom';

const Hi=({name,age}) =>  <div>{"Name: "+ name }{ ", Age:" + age} </div>



ReactDOM.render(<Hi name='Jamil Muhammad' age={10+8}></Hi>,
 document.querySelector('#root'));