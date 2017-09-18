/**
 * ES2015 Classes instead of constructor functions
 * and import/export instead of require/module.exports
 */
// import {Apple} from './constructor_demo';
//
// let grannySmith = new Apple({isSweet: false});
//
// console.log(grannySmith.isSweet);
// console.log(grannySmith.tart);
// grannySmith.grow();

// import React from 'react';
// import ReactDOM from 'react-dom';
//
// // function is a code container that recieves data and returns data
// function add(num1, num2){
//   return num1 + num2;
// }
//
// // function can be called where we pass data in and get data out
// console.log(add(2, 2));

/**
 * Demonstrate how to build react components as classes and functions
 */

// class that receives data  and returns html
// class Add extends React.Component{
//   render(){
//     var num1 = this.props.num1;
//     var num2 = this.props.num2;
//
//     return (
//       <div>
//         <h1>We are going to add {num1} and {num2}</h1>
//
//         <p>Answer: {num1 + num2}</p>
//       </div>
//     );
//   }
// }

// function Add(props){
//   var num1 = props.num1;
//   var num2 = props.num2;
//
//   // Javascript comments work here
//   // Comment right here
//
//   return (
//     <div>
//       {/* JS COMMENT HERE */}
//       <Title number1={num1} number2={num2} />
//
//       <p>Answer: {num1 + num2}</p>
//     </div>
//   );
// }
//
// function Title(props){
//   return <h1>We are going to add {props.number1} and {props.number2}</h1>
// }
//
// ReactDOM.render(<Add num1={5} num2={5}/>, document.getElementById('app'));



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();
