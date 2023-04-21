import React, { createContext } from 'react'
import axios from 'axios'


var contextData ={

    todo:{
        addTodo:(obj)=>{
            return axios.post("http://localhost:3033/todos/",obj)
        },
        deleteTodo:(id)=>{
            return axios.delete("http://localhost:3033/todos/"+id)
        },
        updateTodo:(id,obj)=>{
            return axios.put("http://localhost:3033/todos/"+id,obj)
        },
        getAll:()=>{
            return axios.get("http://localhost:3033/todos/")
        },
        changeStatus:(id)=>{
            //bu id li kaydı bul 
            return axios.get("http://localhost:3033/todos/"+id).then((res)=>{
                var d = res.data;
                console.log(res.data);
                
                d.iscompleted = !d.iscompleted;
                axios.put("http://localhost:3033/todos/"+id,d);

            })
        }

    }

}

function AppContext(props){
   return(
        <applicationContext.Provider value={contextData}>
                {props.children}    
        </applicationContext.Provider>
   )
}
  
export const applicationContext=React.createContext(contextData)
export default AppContext;
