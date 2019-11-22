import React from 'react';
import {connect} from 'react-redux';
import { statement } from '@babel/template';

import {addNewFeature} from '../actions/addFeature'



const AdditionalFeature = props => {
  console.log('additionalFeature.js',props.buyItem)
 
 

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button  className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = () => {
  return {
   
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewFeature: addedFeature => dispatch(addNewFeature(addedFeature)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalFeature);
