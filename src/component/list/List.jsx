import "./list.css"
import {BsPlusCircle, BsTrash} from "react-icons/bs"
import {useState} from 'react'
export default function List() {
  
/* declaring all states
(
  taskName: state for value of input fild;
  arrList: For the list of todo list and updates on add and delete on the list;
  check : For the state of checkbox element;
  ) */
  const [taskName,setTaskName] = useState("");

  const [arrList, setArrList] = useState([]);

  const [check, setCheck] = useState([]);


  // changing state as input form's value changes;
  function changeValue(e){
      setTaskName(e.target.value)
    }
  
  // chnging the state of checkbox
  function toggleCheck(position){
    let updatedCheck = check.map((item,i) =>{
      return position === i ? !item : item;
    })
    setCheck(updatedCheck)
  }

  // delete function to delete specific element from arrList and check and updating states of both.
  function deleteList(position){
    const newArr = [...arrList]
    newArr.splice(position,1)
    setArrList(newArr)
    const newCheck = [...check]
    newCheck.splice(position,1)
    setCheck(newCheck)
    }

// arrItems iterate over arrList and return below jsx for each element of arrList;
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

  // addItem add a new item in arrList whenever the plus sign got click
  function addItem(){
    if(taskName.length){
        setArrList([...arrList,taskName]);
        setTaskName("");
        setCheck([...check,false]);
    }
  }
  //addItemByEnter do the same as addItem but by pressing "Enter" key from the keyboard  
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
        <div className="subtitle">Determine What's Next..</div>
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
