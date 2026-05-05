import ToDoItem from "./ToDoItem";
import { list as initialList } from "../utils/mockData";
import { useState } from "react";

function ToDoList(props){
    console.log("props : ", props);
    const [inputText, setInputText] = useState("");

    function handleList(){
         if (!inputText.trim()) return;
          const newItem = {
            id: Date.now(),              // unique id
            item: inputText,            // text from input
            isCompleted: false           // default checkbox state
        };
        props.setToDo([...props.listData, newItem]); // ✅ add to list
        setInputText("");             // clear input
    }
    return(
        <>
          <div>
            <input type="text" name="" id="" placeholder="Enter Task" onChange={(e) => setInputText(e.target.value)}></input>
            <br/>
            <button onClick={handleList}>Save</button>
          </div>
           <table border="1">
        <thead>
          <tr>
            <th>Task</th>
            <th>Done</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {props.listData.map((data) => (
            <ToDoItem key={data.id} items={data} />
          ))}
        </tbody>
      </table>
        </>
    
    )
}

export default ToDoList;