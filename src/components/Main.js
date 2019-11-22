import React, { Component } from "react";
import styled from 'styled-components';

import {products} from '../../mockData';

const ListItem = styled.li`

`;

const UL = styled.ul`
  list-style-type:lower-alpha;
`;
class Main extends Component {
  constructor(props) {
    super(props);

  }
 render() {
 	const productMarkUp = products.map((item,index)=> {
 		return (<ListItem key={index}>
 					{item.name}
 				</ListItem>);
 	})
    return (
      <div>
        <h1>product markup</h1>
        <UL>
        {productMarkUp}
        </UL>
      </div>
    );
  }
}


export default Main;