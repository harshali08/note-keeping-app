import React,{useState} from 'react'
import { MdAdd } from "react-icons/md";
import './css/AddNote.css'

function AddNote(props) {
    const [notes,setNotes]=useState({
        title:"",
        note:""
    })

    const addEvent=()=>{
     props.passNote(notes)
     setNotes({
      title:"",
      note:"",
    })
    }


    const updateNote=(event)=>{
        console.log('clicked')
        const{value,name}=event.target;

        setNotes((preValue)=>{
          return {
              ...preValue,
              [name]:value
          }
        }) 
    }

// const addNote=(notes)=>{
//     console.log(notes)
//     setAddItem((preData)=>{
//         return [...preData,notes]
//     })
//     console.log(notes)
// }

    
  return (
    <div className='main_cont'>
        <div className='cont'>
        
        <h3>Add a Note</h3>
        <div className='input_cont'>
            <input className='title' type='text' placeholder='Title..' name="title" value={notes.title} onChange={updateNote}></input>
            <input className='note' type='text' placeholder='Type a Note.......' name="note" value={notes.note} onChange={updateNote}></input>
            </div>
            <button onClick={addEvent} ><MdAdd></MdAdd></button>
           
        </div>
        
    </div>
  )
}

export default AddNote