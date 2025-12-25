import { useState , useEffect} from 'react'
import { TodoProvider } from './context/Todocontext'
import { TodoItem } from './components'


function App() {
  const [todos, settodos] = useState([])

 
  const addTodo = (todo) =>{
    settodos((prev)=>[{id:Date.now(), ...todo}, ...prev])
  }

  const updateTodo =(id, todo)=>{
    settodos((prev)=> prev.map((t)=>(t.id===id ? {...t, ...todo} : t)))
  }

  const deleteTodo =(id)=>{
    settodos((prev)=> prev.filter((t)=>(t.id !== id)))
  }

  const toggleCompleted =(id)=>{
    settodos((prev)=> prev.map((t)=>(t.id===id ? {...t, completed: !t.completed} : t)))
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem('todos')) 
    if(todos || todos.length){
      settodos(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleCompleted }} >
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key={todo.id} className="w-full">
                            {/* TodoItem component */}
                            <TodoItem todo={todo} />
                          </div>
                          ))}
                    </div>
                </div>
            </div>
 
    </TodoProvider>
  )
}

export default App
