import React from 'react'
import {useEffect} from 'react'

function Modal({modaltime}) {

    useEffect(() => {
     setTimeout(()=>{
         modaltime();
     },1000)   
     
    }, [])
    return (
        <div 
      
        >
            <h5
            style={{

                backgroundColor:'#cd9e79',
                textAlign:'center',
                border:'2px solid #F1E1C9',
                borderRadius:'6px',
                color:'white',
                letterSpacing:'0.1rem',
               //width:'200px',
               padding:'8px',
              // alignItems:'center'
               
                
            }}
            >Text copied to clipboard</h5>
        </div>
    )
}

export default Modal
