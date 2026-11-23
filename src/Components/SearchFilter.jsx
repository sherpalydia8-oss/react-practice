
import { Search, SlidersHorizontal } from "lucide-react";

function SearchFilter({
  search,
  setSearch,
  selectedCategory,
  setSelectedCategory,
  selectedStatus,
  setSelectedStatus,
}) {
  return (
    <div className="bg-white border border-pink-100 rounded-2xl p-5 mb-7">

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1 relative">
          <Search
            size={19}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search by title or author..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-200 rounded-xl py-3 pl-11 pr-4 outline-none focus:border-orange-400"
          />
        </div>

        <div className="flex items-center gap-2">
          <SlidersHorizontal size={18} className="text-gray-400" />

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-orange-400"
          >
            <option value="All">All Categories</option>
            <option value="Design">Design</option>
            <option value="Technology">Technology</option>
            <option value="Lifestyle">Lifestyle</option>
          </select>
        </div>

      </div>

      <div className="flex gap-3 mt-5">

        {["All", "Published", "Draft"].map((status) => (
          <button
            key={status}
            onClick={() => setSelectedStatus(status)}
            className={`px-5 py-2 rounded-full text-sm font-medium ${
              selectedStatus === status
                ? "bg-orange-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-orange-50"
            }`}
          >
            {status}
          </button>
        ))}

      </div>
    </div>
  );
}

export default SearchFilter;
