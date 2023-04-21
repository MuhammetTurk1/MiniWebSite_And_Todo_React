import React, { useContext, useState } from 'react'
import { applicationContext } from '../context/applicationContext'
import Button from './Button';
import Modal from './Modal';


function TaskItem(props) {

   const context= useContext(applicationContext);
   const [completion, setCompletion] = useState(props.data.iscompleted)
   const [editing, setEditing] = useState(false)
  return (
    <li className='list-group-item'>
            <span>{props.data.title}</span>
            <div className='btn-group'>
                {completion ? <Button text="İncele" type="outline-primary" ismodal={true} modalid={`#modal_${props.data.id}`} Click={()=>{
                    setEditing(false)
                }}/> : <></>}
                {!completion ? <Button text="Düzenle" type="success" ismodal={true} modalid={`#modal_${props.data.id}`} Click={()=>{
                    setEditing(true)
                }}/> : <></>}
                
                <Button text={completion ? "Tamamlanmadı olarak işaretle" : "Tamamlandı olarak işaretle"} type="outline-warning" Click={()=>{
                    setCompletion(!completion)

                    context.todo.changeStatus(props.data.id);
                    


                }}/>

                            
                <Button text="Sil" type="danger" Click={()=>{
                    

                    var id =props.data.id  
                    console.log(id);
                    
                    context.todo.deleteTodo(id).then(()=>{
                        props.changeHandler()
                    })
                        }}/>
 
            </div>

            <Modal isEdit={editing} changeHandler={props.changeHandler} data={props.data} id={`modal_${props.data.id}`}/>
    </li>
    
  )
}

export default TaskItem