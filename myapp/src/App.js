
import { useState } from 'react';
import './App.css';
import AppContext from './context/applicationContext';
import AddTask from './pages/AddTask';
import ListTask from './pages/ListTask';

function App() {

const [page, setPage] = useState(<ListTask/>)
  return (
    <AppContext>
      <div className="container">
      <div className="row">
        <div className="col-12">

            <div id="headerContainer" className='py-3'>
            <img src="" alt="" />
            <button onClick={()=>{setPage(<AddTask/>)}}  className="btn btn-primary">Yeni Kayıt Ekleme</button>
            </div>
           
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <button onClick={()=>{setPage(<AddTask/>)}} className="btn btn-primary w-100 my-1">Task Ekle</button>
          <button onClick={()=>{setPage(<ListTask/>)}} className="btn btn-primary w-100 my-1">Taskları Lİstele</button>
        </div>
        <div className="col-9">
          {page}
        </div>
      </div>
    </div>
    </AppContext>
  );
}

export default App;
