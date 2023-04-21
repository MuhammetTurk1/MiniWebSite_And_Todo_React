import React, { useContext, useEffect, useState } from 'react'
import TaskItem from '../components/TaskItem'
import {applicationContext} from '../context/applicationContext'


function ListTask() {
    const context =useContext(applicationContext)
    const [taskData, setTaskData] = useState([])
   const [changeData, setChangeData] = useState(false)
    
    useEffect(()=>{

        context.todo.getAll().then((res)=>{
            setTaskData(res.data)
        })

    },[changeData]);


    function changeDataHandler(){
      setChangeData(!changeData)
    }

  return (
    <div>
      {
        taskData.map((task,taskOrderNumber)=>{
        return(<ul  key={taskOrderNumber} className="list-group taskItems"> 
          <TaskItem data={task} changeHandler={changeDataHandler}/>
          </ul>)

        })
      }

    </div>
  )
}

export default ListTask