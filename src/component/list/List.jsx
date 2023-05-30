import "./list.css"
import {BsPlusCircle, BsTrash} from "react-icons/bs"
import {useState} from 'react'
export default function List() {

  const [taskName,setTaskName] = useState("");

  const [arrList, setArrList] = useState([]);

  const [check, setCheck] = useState([]);

  function changeValue(e){
      setTaskName(e.target.value)
    }
  
  function toggleCheck(position){
    let updatedCheck = check.map((item,i) =>{
      return position === i ? !item : item;
    })
    setCheck(updatedCheck)
  }
  function deleteList(position){
    const newArr = [...arrList]
    newArr.splice(position,1)
    setArrList(newArr)
    const newCheck = [...check]
    newCheck.splice(position,1)
    setCheck(newCheck)
    }

  const arrItems = arrList.map((item,i)=>{
    return (
    <div className="item" key={i} id={i}>
      <div className="eachItem" style={{textDecoration: check[i] ? 'line-through' : 'none'}}>
        {item}
      </div>
      <div className="icons">
        <input type="checkbox" className="status" checked={check[i]} onChange={() => toggleCheck(i)}/>
        <BsTrash className="delete" onClick={() => deleteList(i)}/>  
      </div>
    </div>)
  })

  function addItem(){
    if(taskName.length){
        setArrList([...arrList,taskName]);
        setTaskName("");
        setCheck([...check,false]);
    }
  }
  function addItemByEnter(e){
    if(e.key=="Enter" && taskName.length){
        setArrList([...arrList,taskName]);
        setTaskName("");
        setCheck([...check,false]);
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
