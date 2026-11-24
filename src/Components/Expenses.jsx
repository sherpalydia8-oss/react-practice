
import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import AddExpense from "./AddExpenses";

function Expenses({ expenses=[], setExpenses }) {
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const addExpense = (newExpense) => {
    setExpenses((previousExpenses) => [
      ...previousExpenses,
      newExpense
    ]);
    setShowForm(false);
  };

  const deleteExpense = (id) => {
    setExpenses((previousExpenses) =>
      previousExpenses.filter((item) => item.id !== id)
    );
  };

  const filteredExpenses = expenses.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="mt-8">
      <div className="border-b border-gray-200">
        <button className="border-b-2 border-blue-600 px-4 py-3 font-semibold text-blue-600">
          Expenses
        </button>
      </div>

      <div className="mt-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <h2 className="text-xl font-bold">
          Expense History
        </h2>

        <button
          onClick={() => setShowForm(true)}
          className="rounded-lg bg-blue-600 px-4 py-3 font-medium text-white hover:bg-blue-700"
        >
          + Add Expense
        </button>
      </div>

      {showForm && (
        <AddExpense
          onAddExpense={addExpense}
          onCancel={() => setShowForm(false)}
        />
      )}

      <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            placeholder="Search expenses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
          />

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="rounded-lg border border-gray-300 px-4 py-3"
          >
            <option value="All">All Categories</option>
            <option value="Food & Dining">Food & Dining</option>
            <option value="Personal Care">Personal Care</option>
            <option value="Travel">Travel</option>
            <option value="Shopping">Shopping</option>
            <option value="Education">Education</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b bg-gray-50 text-gray-500">
                <th className="px-4 py-4">Date</th>
                <th className="px-4 py-4">Description</th>
                <th className="px-4 py-4">Category</th>
                <th className="px-4 py-4">Amount</th>
                <th className="px-4 py-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredExpenses.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="whitespace-nowrap px-4 py-4">
                    {item.date}
                  </td>

                  <td className="px-4 py-4 font-semibold">
                    {item.title}
                  </td>

                  <td className="px-4 py-4">
                    <span className="rounded-full bg-orange-100 px-3 py-1 text-sm text-orange-700">
                      {item.category}
                    </span>
                  </td>

                  <td className="whitespace-nowrap px-4 py-4 font-semibold">
                    ${Number(item.amount).toFixed(2)}
                  </td>

                  <td className="px-4 py-4">
                    <div className="flex justify-end gap-2">
                      <button className="rounded-lg border p-2 hover:bg-gray-100">
                        <Pencil size={17} />
                      </button>

                      <button
                        onClick={() => deleteExpense(item.id)}
                        className="rounded-lg border p-2 text-red-500 hover:bg-red-50"
                      >
                        <Trash2 size={17} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredExpenses.length === 0 && (
                <tr>
                  <td colSpan="5" className="py-8 text-center text-gray-500">
                    No expenses found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Expenses;
