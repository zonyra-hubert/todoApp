import styles from "./todoitem.module.css";
export default function TodoItem({item, todos, setTodos}){

    function handleDelete(item){
 console.log("delete", item);
 setTodos( todos.filter((todo) => todo !== item) )
}

function handleClick(name){
setTodos(todos.map((todo)=>  todo.name === name ? {...todo, done: !todo.done} : todo));

    }
   

const strike = item.done ? styles.completed : "";
    return (
     
    <div className={styles.item}>
        <div className={styles.itemName}>
            <span  onClick={()=>handleClick(item.name)}   className={strike}>
            {item.name }
            </span>
      
        <span>
            <button onClick ={() =>handleDelete(item)} className={styles.deleteButton}> x</button>
        </span>
        </div>
      
        <hr className={styles.line}/>
    </div>
    );

}