
import { useState } from "react";
function AddExpense({ onAddExpense, onCancel }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || !category || !date) {
      alert("Please fill all fields");
      return;
    }

    const newExpense = {
      id: Date.now(),
      title: title,
      amount: Number(amount),
      category: category,
      date: date
    };
    onAddExpense(newExpense);
    setTitle("");
    setAmount("");
    setCategory("");
    setDate("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
  <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-2xl">
   <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">

      <h2 className="mb-5 text-xl font-bold text-gray-800">
        Add New Expense
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Amount($)
          </label>

          <input
            type="number"
            min="0.01"
            step="0.01"
            placeholder="0.00 "
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
          />
        </div>

         <div>
          <label className="mb-2 block text-sm font-medium">
            Description
          </label>

          <input
            type="text"
            placeholder="Enter Expense description...."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Category
          </label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-3"
          >
            <option value="">Select Category</option>
            <option value="Food & Dining">Food & Dining</option>
            <option value="Personal Care">Personal Care</option>
            <option value="Travel">Travel</option>
            <option value="Shopping">Shopping</option>
            <option value="Education">Education</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Date
          </label>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-3"
          />
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            className="rounded-lg bg-gray-600 px-6 py-3 font-medium text-white hover:bg-white-700"
          >
            Add Expenses
          </button>

          <button
            type="button"
            onClick={onCancel}
            className="rounded-lg border border-gray-300 px-6 py-3 font-medium hover:bg-gray-100"
          >
            Cancel
          </button>

        </div>
      </form>
    </div>

  </div>
</div>
    
  );
}

export default AddExpense;
