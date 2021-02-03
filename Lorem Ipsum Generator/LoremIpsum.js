import React, { useState } from "react";
import content from "./Para";
import Modal from './Modal'

function LoremIpsum() {
  const [option, setOption] = useState(0);
 const [slidevalue, setSlideValue] = useState(2);
  const [modal,showModal]=useState(false);
  //const [numberofparas,setNumberOfParas]=useState(1);

  function handleChange(event) {
    setOption(event.target.value);

   
  }
  const modalTime=()=>{

    showModal(false)

  }
  const handleChangeSlider=(e)=>{
    setSlideValue(e.target.value)
    //console.log(slidevalue);
  }
  var convalue="";
  for(var i=0;i<slidevalue;i++)
  {
    convalue+=`${content[option]["value"]}`;
  }

  return (
    <div className="container">
      <div className="mainc">
        {modal && <Modal modaltime={modalTime}/>}
        <h1>Lorem Ipsum Generator</h1>
        <h4>Select type of Ipsum</h4>
        <select name="option" onChange={handleChange} className="selectclass">
          
          {content.map((id, index) => {
            return <option value={index}>{content[index].id}</option>;
          })}
        </select>
        <button
          className="btn"
          onClick={() => {
            navigator.clipboard.writeText(convalue);
            showModal(true);
          }}
        >
          Copy
        </button>
        <div>
        <h4>No ofparagraphs: {slidevalue}</h4>
  <input type="range" min="1" max="8" value={slidevalue} onChange={handleChangeSlider} style={{width:'60%'}}/>
</div>
        <p style={{ marginBottom: "40px", fontSize: "20px" }}>
          {convalue}{""}
        </p>
       
      </div>
    </div>
  );
}

export default LoremIpsum;
