import React,{useState} from 'react'
import Header from './components/header'
import AddNote from './components/AddNote'
import NoteKeeping from './components/Notekeeping'
import './App.css'

function App() {
 
  const [addItem,setAddItem]=useState([])
  const addNote=(notes)=>{
    
    console.log("clicked");
    console.log(notes)
   
    setAddItem((preData)=>{
        return [...preData,notes]
    })
    console.log(notes)
  
  }

  const deleteItems=(id)=>{
        setAddItem((oldData)=>{
         return oldData.filter((val,index)=>{
          return index!==id
         })
            
          
        })
  }
  return (
    <div>
      <Header></Header>
      <AddNote passNote={addNote}></AddNote>
      <div className="notes_container">
      
      {addItem.map((val,index)=>{
                    return <NoteKeeping  key={index} id={index} Title={val.title} keepNote={val.note} onSelect={deleteItems}></NoteKeeping>
                })}
                </div>
    
    </div>
  )
}

export default App