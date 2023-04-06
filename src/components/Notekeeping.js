import React from 'react'
import { MdDeleteForever} from "react-icons/md"
import './css/NoteKeeping.css'

function NoteKeeping(props) {
    const deleteNote=()=>{
            props.onSelect(props.id)
    }
  return (
    <div className='note_main_cont'>
  
        <div className='note_cont'>
    
        <h3>{props.Title}</h3>
        <p>{props.keepNote}</p> 
        <button onClick={deleteNote}><MdDeleteForever></MdDeleteForever></button>
        
      
        </div>
    </div>
  )
}

export default NoteKeeping