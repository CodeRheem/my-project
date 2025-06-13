import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TODOS_API = 'https://jsonplaceholder.typicode.com/todos';
const ITEMS_PER_PAGE = 10;

function App() {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newTodo, setNewTodo] = useState('');
  const [editTodo, setEditTodo] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch(TODOS_API);
      const data = await res.json();
      setTodos(data);
    };
    fetchTodos();
  }, []);

  const handleCreate = () => {
    if (!newTodo.trim()) return;
    const newEntry = {
      id: todos.length + 1,
      title: newTodo,
      completed: false,
    };
    setTodos([newEntry, ...todos]);
    setNewTodo('');
    setShowCreateModal(false);
  };

  const handleUpdate = (updated) => {
    setTodos(todos.map(todo => todo.id === updated.id ? updated : todo));
    setEditTodo(null);
  };

  const handleDelete = () => {
    setTodos(todos.filter(todo => todo.id !== showDeleteConfirm));
    setShowDeleteConfirm(null);
  };

  const filteredTodos = todos.filter((todo) => {
    const matchesSearch = todo.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      filterStatus === 'all' ||
      (filterStatus === 'complete' && todo.completed) ||
      (filterStatus === 'incomplete' && !todo.completed);
    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.ceil(filteredTodos.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentTodos = filteredTodos.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <main className="p-6 font-lato max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-1">Paginated Todos</h1>

      <section className="flex flex-col md:flex-row items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-3 py-2 border rounded w-full md:w-1/2"
        />

        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-2 border rounded "
        >
          <option value="all">All</option>
          <option value="complete">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>

        <button
          onClick={() => setShowCreateModal(true)}
          className="bg-blue-500 text-white-800 px-4 py-2 rounded"
          aria-label="Add new todo" 
        >
          + Add Todo
        </button>
      </section>

      <ul className="space-y-4">
        {currentTodos.map((todo) => (
          <li key={todo.id} className="border p-4 rounded-lg shadow-sm">
            <p className="text-sm text-grey-800">ID: {todo.id}</p>
            <h2 className="text-lg font-semibold">
              {editTodo?.id === todo.id ? (
                <input
                  value={editTodo.title}
                  onChange={(e) => setEditTodo({ ...editTodo, title: e.target.value })}
                  className="border px-2 py-1 rounded w-full"
                />
              ) : (
                todo.title
              )}
            </h2>
            <p className="text-sm mt-1">
              Status:{' '}
              <span className={
                todo.completed ? 'text-green-600' : 'text-red-800'
              }>
                {todo.completed ? 'Completed' : 'Not Completed'}
              </span>
            </p>
            <section className="flex gap-2 mt-2">
              <button
                onClick={() => setEditTodo(todo)}
                className="text-blue-500 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => setShowDeleteConfirm(todo.id)}
                className="text-red-800 hover:underline"
              >
                Delete
              </button>
              {editTodo?.id === todo.id && (
                <button
                  onClick={() => handleUpdate(editTodo)}
                  className="text-green-600 hover:underline"
                >
                  Save
                </button>
              )}
            </section>
          </li>
        ))}
      </ul>

      <section className="flex items-center justify-between mt-6">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>

        <span className="text-sm">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </section>

      {/* Create Modal */}
      {showCreateModal && (
        <section className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Add New Todo</h2>
            <input
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Enter title"
              className="w-full border px-3 py-2 mb-4 rounded"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowCreateModal(false)}
                className="bg-gray-300 px-4 py-2 rounded"
              >Cancel</button>
              <button
                onClick={handleCreate}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >Add</button>
            </div>
          </div>
        </section>
      )}

      {/* Delete Confirmation */}
      {showDeleteConfirm && (
        <section className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Confirm Deletion</h2>
            <p>Are you sure you want to delete this todo?</p>
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setShowDeleteConfirm(null)}
                className="bg-gray-300 px-4 py-2 rounded"
              >Cancel</button>
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >Delete</button>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

export default App;
