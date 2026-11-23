
import { Feather, Plus } from "lucide-react";

function Navbar({ onNewPost }) {
  return (
    <nav className="bg-white border-b border-pink-100 px-10 py-5 flex justify-between items-center">

      <div>
        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <Feather className="text-orange-600" size={26} />
          BlogHub 
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          Create, publish & manage your editorial stories
        </p>
      </div>

      <button
        onClick={onNewPost}
        className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl font-semibold"
      >
        <Plus size={19} />
        New Post
      </button>

    </nav>
  );
}

export default Navbar;
