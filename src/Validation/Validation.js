import React from 'react';
const validate = (props) =>{
    let validationText = "Text Long Enough";
    if(props.textInput<5){
         validationText = "Text too short";
    }
return (
    <div>
     { 
        <p onClick={props.click}>{validationText}</p>
     }
       
    </div>
    );
    
};
export default validate;