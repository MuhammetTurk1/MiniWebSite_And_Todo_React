import React, { useContext } from 'react'
import { applicationContext } from '../context/applicationContext'


function AddTask() {
  const context =useContext(applicationContext)

 function Save(){

var t =document.getElementById("title").value;
var d =document.getElementById("desc").value;
var c =document.getElementById("content").value;

context.todo.addTodo({
title:t,
decription:d,
context:c,
iscompleted:false
 
}).then(()=>{
  alert("kayıt işlemi tamamlandı")
  
  var t =document.getElementById("title").value="";
var d =document.getElementById("desc").value="";
var c =document.getElementById("content").value="";

});


 }

  return (
    <div>
      <div className='form-group'> 
        <label htmlFor="title">Başlık</label>
        <input type="text" className='form-control' id='title' name='title' />
      </div>
      <div className='form-group'> 
        <label htmlFor="desc">Açıklama</label>
        <input type="text" className='form-control' id='desc' name='desc' />
      </div>
      <div className='form-group'> 
        <label htmlFor="content">İçerik</label>
        <textarea rows="3" className='form-control' id='content' name='content'></textarea>
      </div>
      <div className='form-group'> 
        <button onClick={Save} className='btn btn-success my-1'>Kaydet</button>
      </div>
    </div>
  )
}

export default AddTask
