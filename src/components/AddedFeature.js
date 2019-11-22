import React from 'react';

const AddedFeature = props => {
  // console.log('addedFeatures:props.feature.name', props.feature.name)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
