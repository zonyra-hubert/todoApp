import { useState } from "react";
import styles from './form.module.css';
export default function Form({todos,setTodos}) {
   
    // const [todo, setTodo] = useState("");
       
    const [todo, setTodo] = useState({name: "", done: false});
 
    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos,todo]);
        setTodo({name: "", done: false});
     
    }
    return  <form   onSubmit={handleSubmit}  className={styles.todoform}>
        <div className={styles.inputContainer}>
    <input type="text"  value={todo.name} onChange={(e) => setTodo({name: e.target.value, done: false})} className={styles.modernInput} placeholder="Enter Todo Item"/>
    <button onSubmit={handleSubmit} type="submit" className={styles.modernButton}> Add</button>
    </div>
</form>
}