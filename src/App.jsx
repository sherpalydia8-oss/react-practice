
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Movies from "./Components/Movies";
import InstaNavbar from "./Components/Instanavbar";
import Expenses from "./Components/Expenses";
import Navbar from "./Components/Navbar";
import SummaryCards from "./Components/SummaryCards";
import Todo from "./Components/Todo";

function Expense() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      date: "2026-11-01",
      title: "Momo",
      category: "Food & Dining",
      amount: 800
    },
    {
      id: 2,
      date: "2026-11-01",
      title: "Masara",
      category: "Personal Care",
      amount: 100
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="mx-auto w-full max-w-6xl px-4 py-5 sm:px-6">
        <SummaryCards expenses={expenses} />

        <Expenses
          expenses={expenses}
          setExpenses={setExpenses}
        />
      </main>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/movies" element={<Movies />} />
      <Route path="/instagram" element={<InstaNavbar />} />
      <Route path="/expenses" element={<Expenses />} />
       <Route path="/Todo" element={<Todo />} />
    </Routes>
  );
}

export default App;
