
import { useState } from "react";
import { X, ImagePlus } from "lucide-react";

function BlogForm({ blog, onClose, onSave }) {

  const [title, setTitle] = useState(blog?.title || "");
  const [author, setAuthor] = useState(blog?.author || "");
  const [category, setCategory] = useState(blog?.category || "Technology");
  const [description, setDescription] = useState(blog?.description || "");
  const [image, setImage] = useState(blog?.image || "");
  const [status, setStatus] = useState(blog?.status || "Draft");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      title,
      author,
      category,
      description,
      image,
      status,
    };

    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50 overflow-y-auto">

      <div className="bg-white w-full max-w-xl rounded-2xl p-6 my-8">

        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {blog ? "Edit Post" : "Create New Post"}
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              {blog ? "Update your blog details." : "Add a new story to your blog."}
            </p>
          </div>

          <button type="button" onClick={onClose}>
            <X size={22} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="block mb-2 font-medium">Blog Title</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter blog title"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Author</label>
            <input
              type="text"
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Enter author name"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border rounded-lg p-3"
            >
              <option value="Technology">Technology</option>
              <option value="Design">Design</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="Education">Education</option>
              <option value="Travel">Travel</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">Description</label>
            <textarea
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write your blog description..."
              rows="4"
              className="w-full border rounded-lg p-3 resize-none"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Blog Image URL</label>

            <div className="relative">
              <ImagePlus
                size={19}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="url"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="https://example.com/image.jpg"
                className="w-full border rounded-lg p-3 pl-10"
              />
            </div>

            {image && (
              <img
                src={image}
                alt="Blog preview"
                className="w-full h-44 object-cover rounded-xl mt-3"
              />
            )}
          </div>

          <div>
            <label className="block mb-2 font-medium">Post Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border rounded-lg p-3"
            >
              <option value="Draft">Draft</option>
              <option value="Published">Published</option>
            </select>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-lg border"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2.5 rounded-lg bg-orange-600 text-white font-semibold"
            >
              {blog ? "Update Post" : "Create Post"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default BlogForm;
