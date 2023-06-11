import React, {useState} from 'react'

export default function TextForm(props) {
    const clickResult  = () => {
        // console.log("you have clicked the button" + Text);
        let newText = Text.toUpperCase()
        setText(newText);
    }

    const handleOnChange  = (event) => {
        // console.log("On Change");
        setText(event.target.value)
    }
    

    const [Text, setText] = useState('Enter your text here')
  return (
    <>
    <div>
    <h2>{props.heading}</h2>
        <div className="mb-3">

        <textarea className="form-control" value={Text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={clickResult}>Convert to Uppercase</button>
    </div>
    <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{Text.split(" ").filter((element)=>{return element.length!==0}).length} words and {Text.length} characters </p>
        <h3>Preview</h3>
        <p>{Text}</p>
    </div>

    </>
  )
}
