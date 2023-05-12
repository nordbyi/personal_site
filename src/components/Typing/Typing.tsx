import React, { useState } from "react";

const Typing: React.FC = () => {
  const [textInput, setTextInput] = useState('')

  const example = 'You must me a pretty tough fighter to have made it past my cow!'

  return (
    <div>
      <p>{example}</p>
      <p>{textInput || 'hi'}</p>
      <input value={textInput} onChange={e => setTextInput(e.target.value)}/>
    </div>
  );
};

export default Typing;
