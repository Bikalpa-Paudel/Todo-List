import "./list.css"
import {BsPlusCircle, BsTrash} from "react-icons/bs"
import {useState} from 'react'
export default function List() {
  const [taskName,setTaskName] = useState("");
  const [arrList, setArrList] = useState([])
  function changeValue(e){
      setTaskName(e.target.value)
    }

  const arrItems = arrList.map((item) =>{
    return (<div className="item"><BsTrash />{item}</div>)
  })
  function addItem(){
    if(taskName.length){
        setArrList([...arrList,taskName])
        setTaskName("")
    }
  }
  function addItemByEnter(e){ 
    if(e.key=="Enter" && taskName.length){
        setArrList([...arrList,taskName])
        setTaskName("")
    }
}
  return (
    <div className='list'>
        <div className="title">ToDo List</div>
        <div className="subtitle">Determine Your Own Plans.</div>
        <div className="add-item">
            <input type="text" className="item-name" value={taskName} placeholder="Write Your To Do Plans" onChange={changeValue} onKeyDown={addItemByEnter}/>
            <div className="add" onClick={addItem}><BsPlusCircle /></div>
        </div>
        <div className="items">
            {arrItems}
        </div>

    </div>
  )
}
