
import { FileText } from "lucide-react";
import BlogCard from "./BlogCard";

function BlogList({ blogs, onDelete, onEdit }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            blog={blog}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))
      ) : (
        <div className="col-span-full text-center bg-white border border-pink-100 rounded-2xl p-12">
          <FileText
            size={40}
            className="mx-auto text-gray-300 mb-3"
          />

          <h3 className="text-lg font-semibold text-gray-700">
            No blogs found
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            Try changing your search or filters.
          </p>
        </div>
      )}

    </div>
  );
}

export default BlogList;
