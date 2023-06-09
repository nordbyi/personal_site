import React from "react";

interface Props {
  example: string,
  current: string
}

const DisplayText: React.FC<Props> = ({example, current}) => {
    const exampleArr = example.split("");
    // console.log(exampleArr)
    // console.log(current.split(''))
    // console.log(current.split('').every((el, i) => exampleArr[i] === el))
    const wrongStart: number = current
      .split("")
      .findIndex((el, index) => exampleArr[index] !== el);
    
    if(wrongStart === -1) {
      return (
      <>
        <span className="correct">{current}</span>
        <span className="missing">{example.substring(current.length)}</span>
      </>
     )
    } else {
     return (
      <>
        <span className="correct">{example.substring(0, wrongStart)}</span>
        <span className="incorrect">{example.substring(wrongStart, current.length)}</span>
        <span className="missing">{example.substring(current.length)}</span>
      </>
     )
    }
}

export default DisplayText