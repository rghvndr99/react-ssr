import React, { Component } from "react";
import {products} from '../../mockData';

class Main extends Component {
  constructor(props) {
    super(props);

  }


 render() {
 	const productMarkUp = products.map((item,index)=> {
 		return (<li key={index}>
 					{item.name}
 				</li>);
 	})
    return (
      <div>
        <h1>product markup</h1>
        <ul>
        {productMarkUp}
        </ul>
      </div>
    );
  }
}


export default Main;