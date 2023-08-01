import React from 'react'

export default function Alert(props) {
    // const Capital=(word)=>{
    //     const lower = word.toLowerCase();
    //     return lower.CharAt(0).toUpperCase() + lower.slice(1);
    //     }
  return (
    <div style={{height:'50px'}}>
        {  props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong> {props.alert.msg} </strong> 
       
        </div>}
        </div>
    
  )
}
