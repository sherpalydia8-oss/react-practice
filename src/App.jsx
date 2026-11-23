
import { useState , useEffect} from "react";

import Navbar from "./Components/Navbar";
import SummaryCards from "./Components/SummaryCards";
import SearchFilter from "./Components/SearchFilter";
import BlogList from "./Components/BlogList";
import BlogForm from "./Components/BlogForm";

function App() {
  const initialBlogs = [
  {
    id: 1,
    title: "Designing with Warm Minimalism",
    author: "Elena Rostova",
    category: "Design",
    description:
      "How soft colours and simple designs transform digital spaces.",
    status: "Published",
    views: 4280,
    date: "Nov 10, 2026",
    image :"https://i.pinimg.com/1200x/56/58/68/565868a94addf021085b2931d7531924.jpg",
  },
  {
    id: 2,
    title: "Building Resilient Web Apps",
    author: "Marcus Vance",
    category: "Technology",
    description:
      "A practical guide to modern web development.",
    status: "Published",
    views: 3190,
    date: "Nov 08, 2026",
    image :"https://i.pinimg.com/736x/a9/11/83/a9118301442c53f893a7004ddc62dd07.jpg",
  },
  {
    id: 3,
    title: "The Slow Morning Ritual",
    author: "Sora Takahashi",
    category: "Lifestyle",
    description:
      "Creating a peaceful morning routine.",
    status: "Draft",
    views: 0,
    date: "Nov 05, 2026",
    image:"https://i.pinimg.com/1200x/e7/5b/15/e75b15eea9f060ace6047a950a069bd8.jpg",
  },
];

    const [blogs, setBlogs] = useState(()=>{
      const blogsfromLocal = JSON.parse(
        localStorage.getItem("Blogdata") || "null"
      );
      return blogsfromLocal || initialBlogs;
    })
    useEffect(() => {
    localStorage.setItem(
        "Blogdata",
        JSON.stringify(blogs)
    );
}, [blogs]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const [showForm, setShowForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.author.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      blog.category === selectedCategory;

    const matchesStatus =
      selectedStatus === "All" ||
      blog.status === selectedStatus;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleDelete = (id) => {
    setBlogs((previousBlogs) =>
      previousBlogs.filter((blog) => blog.id !== id)
    );
  };

 
  const handleNewPost = () => {
    setEditingBlog(null);
    setShowForm(true);
  };

  
  const handleEdit = (blog) => {
    setEditingBlog(blog);
    setShowForm(true);
  };


  const handleSaveBlog = (formData) => {
    if (editingBlog) {
      setBlogs((previousBlogs) =>
        previousBlogs.map((blog) =>
          blog.id === editingBlog.id
            ? { ...blog, ...formData }
            : blog
        )
      );
    } else {
      const newBlog = {
        id: Date.now(),
        ...formData,
        views: 0,
        date: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      };
      setBlogs((previousBlogs) => [newBlog, ...previousBlogs]);
    }

    setShowForm(false);
    setEditingBlog(null);
  };

  return (
    <div className="min-h-screen bg-[#fff9fa]">
      <Navbar onNewPost={handleNewPost} />

      <main className="max-w-7xl mx-auto px-8 py-8">
        <div className="mb-7">
          <h2 className="text-2xl font-bold text-gray-900">
            Dashboard Overview
          </h2>
          <p className="text-gray-500 mt-1">
            Here's what's happening with your blog today.
          </p>
        </div>

        <SummaryCards blogs={blogs} />

        <div className="mt-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Your Stories
            </h2>
            <p className="text-gray-500 mt-1">
              Manage and organize all your blog posts.
            </p>
          </div>

          <SearchFilter
            search={search}
            setSearch={setSearch}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedStatus={selectedStatus}
            setSelectedStatus={setSelectedStatus}
          />

          <BlogList
            blogs={filteredBlogs}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </div>
      </main>

      {showForm && (
  <BlogForm
    key={editingBlog ? editingBlog.id : "new"}
    blog={editingBlog}
    onSave={handleSaveBlog}
    onClose={() => {
      setShowForm(false);
      setEditingBlog(null);
    }}
  />
)}
    </div>
  );
}

export default App;