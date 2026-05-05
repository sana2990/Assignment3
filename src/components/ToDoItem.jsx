function ToDoItem(props){
    return(
        <tr>
      <td>{props.items.item}</td>
      <td>
        <input
          type="checkbox"
          checked={props.items.isCompleted}
        />
      </td>
      <td>
        <button>Delete</button>
      </td>
    </tr>
    )
}

export default ToDoItem;