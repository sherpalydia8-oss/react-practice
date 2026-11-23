
import {
  User,
  CalendarDays,
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

function BlogCard({ blog, onDelete, onEdit }) {
  return (
    <div className="bg-white border border-pink-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">

      <div className="h-48 bg-orange-50 overflow-hidden">
        <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
        />
        </div>

      <div className="p-5">

        <div className="flex justify-between items-center mb-3">
          <span className="bg-orange-50 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full">
            {blog.category}
          </span>

          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full ${
              blog.status === "Published"
                ? "bg-green-50 text-green-700"
                : "bg-yellow-50 text-yellow-700"
            }`}
          >
            {blog.status}
          </span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2">
          {blog.title}
        </h3>

        <p className="text-sm text-gray-500 line-clamp-2 mb-4">
          {blog.description}
        </p>

        <div className="flex justify-between text-xs text-gray-400 border-t border-gray-100 pt-4">

          <span className="flex items-center gap-1">
            <User size={14} />
            {blog.author}
          </span>

          <span className="flex items-center gap-1">
            <CalendarDays size={14} />
            {blog.date}
          </span>

        </div>

        <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100">

          <span className="flex items-center gap-1 text-sm text-gray-500">
            <Eye size={16} />
            {blog.views.toLocaleString()} views
          </span>

          <div className="flex gap-2">

            <button
              onClick={() => onEdit(blog)}
              className="p-2 rounded-lg text-blue-600 hover:bg-blue-50"
            >
              <Pencil size={17} />
            </button>

            <button
              onClick={() => onDelete(blog.id)}
              className="p-2 rounded-lg text-red-500 hover:bg-red-50"
            >
              <Trash2 size={17} />
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
