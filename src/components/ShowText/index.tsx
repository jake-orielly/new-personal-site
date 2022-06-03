import React from 'react';

interface Props {
    text: string;
}

export const ShowText = ({ text }: Props) => {
  return (
    <div className="App">
      <p>{text}</p>
    </div>
  );
};

