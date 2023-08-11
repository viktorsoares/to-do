import { useState } from 'react'

const Form = ({ addTodo }) => {

  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!value || !category) return;
    addTodo(value, category)
    setCategory("");
    setValue("");
  }
  
  return (
    <div className="todo-form">
      <h2>Create Todo</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Todo name" value={value} onChange={(e) => setValue(e.target.value)}/>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select a category </option>
          <option value="study">Study</option>
          <option value="training">Training</option>
          <option value="basketball">Basketball</option>
        </select>
        <button type="submit">Create task</button>
      </form>
    </div>
  )
}

export default Form;