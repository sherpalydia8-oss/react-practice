
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center w-80">

        <h1 className="text-2xl font-bold text-purple-600 mb-4">
          Counter App
        </h1>

        <h2 className="text-5xl font-bold text-gray-800 mb-6">
          {count}
        </h2>

        <div className="flex justify-center gap-3">
          <button
            onClick={() => setCount(count + 1)}
            className="bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600"
          >
            +
          </button>

          <button
            onClick={() => setCount(count - 1)}
            className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600"
          >
            -
          </button>

          <button
            onClick={() => setCount(0)}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
          >
            Reset
          </button>
        </div>

      </div>
    </div>
  );
}

export default Counter;
