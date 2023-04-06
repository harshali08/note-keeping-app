import React from 'react'
import './css/header.css'
import { MdStickyNote2} from "react-icons/md"


function Header() {
  return (
    <div className='header'>
<MdStickyNote2 fontSize={70}></MdStickyNote2>
    <h1 >Keep Note</h1>
    </div>
  )
}

export default Header