import React from 'react'

function Button(p) {
  return (
    <button data-bs-toggle={p.ismodal ? "modal" : ""} 
    data-bs-target={p.modalid}
     onClick={p.Click} 
     className={`btn btn-${p.type}`}
     >{p.text}</button>
  )
}

export default Button