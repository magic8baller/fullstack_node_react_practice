import React from 'react';

const DragonAvatar = props => {
  const { generationId, dragonId, traits } = props.dragon;
  return (
    <div>
      <span>G-{generationId}</span>
      <br />
      <span>I-{dragonId}</span>
      <br />
      {traits.map(trait => trait.traitValue).join(', ')}
    </div>
  );
};

export default DragonAvatar;
