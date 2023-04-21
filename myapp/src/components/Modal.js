import React, { useContext, useState } from 'react'
import { applicationContext } from '../context/applicationContext'


function Modal(props) {

const [title, setTitle] = useState(props.data.title)
const [description, setDescription] = useState(props.data.description)
const [content, setContent] = useState(props.data.content)

    var context=useContext(applicationContext)


function Kaydet (){

    var verilerim={
            id:props.data.id,
            iscompleted:props.data.iscompleted,
            title : title,
            description:description,
            content:content

    }
    
    
    context.todo.updateTodo(props.data.id,verilerim).then(()=>{
        props.changeHandler();
    })
   
}



  return (
    <div className="modal fade" id={props.id}  aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">{props.data.title}</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div>
      <div className='form-group'> 
        <label htmlFor="title">Başlık</label>
        <input type="text" onChange={(e)=>{setTitle(e.target.value)}} className='form-control' id='title' name='title' value={title} />
      </div>
      <div className='form-group'> 
        <label htmlFor="desc">Açıklama</label>
        <input type="text"onChange={(e)=>{setContent(e.target.value)}} className='form-control' id='desc' name='desc' value={content} />
      </div>
      <div className='form-group'> 
        <label htmlFor="content">İçerik</label>
        <textarea rows="3" onChange={(e)=>{setDescription(e.target.value)}} className='form-control' id='content' name='content' value={description} ></textarea>
      </div>
    </div>
      </div>

       <div className={`modal-footer ${props.isEdit ? "d-block" : "d-none"}`}>
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={Kaydet}>Kaydet</button>
      </div>
    

    </div>
  </div>
</div>
  )
}

export default Modal