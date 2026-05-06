function ToDoItem(props){
    return(
        <tr>
      <td>{props.items.item}</td>
      <td>
        <input
          type="checkbox"
          checked={props.items.isCompleted}
          onChange={()=> props.onToggle(props.items.id)}
        />
      </td>
      <td>
        <button onClick={() => props.onDelete(props.items.id)}>Delete</button>
      </td>
    </tr>
    )
}

export default ToDoItem;