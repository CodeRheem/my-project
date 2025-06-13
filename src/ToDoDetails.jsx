import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function TodoDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    const fetchTodo = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
      const data = await res.json();
      setTodo(data);
    };
    fetchTodo();
  }, [id]);

  if (!todo) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 font-sans max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Todo Details</h2>
      <div className="space-y-2">
        <p><strong>ID:</strong> {todo.id}</p>
        <p><strong>User ID:</strong> {todo.userId}</p>
        <p><strong>Title:</strong> {todo.title}</p>
        <p>
          <strong>Status:</strong>{' '}
          {todo.completed ? 'Completed ✅' : 'Not Completed ❌'}
        </p>
      </div>

      <button
        onClick={() => navigate('/')}
        className="mt-6 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        ← Back to List
      </button>
    </div>
  );
}

export default TodoDetails;
