
import {
  FileText,
  CheckCircle,
  FileEdit,
  Eye,
} from "lucide-react";

import SummaryCard from "./SummaryCard";

function SummaryCards({ blogs }) {

  const totalPosts = blogs.length;

  const publishedPosts = blogs.filter(
    (blog) => blog.status === "Published"
  ).length;

  const drafts = blogs.filter(
    (blog) => blog.status === "Draft"
  ).length;

  const totalViews = blogs.reduce(
    (total, blog) => total + blog.views,
    0
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

      <SummaryCard
        title="Total Posts"
        value={totalPosts}
        description="All stories in workspace"
        icon={FileText}
        
      />

      <SummaryCard
        title="Published Posts"
        value={publishedPosts}
        description="Live to subscribers"
        icon={CheckCircle}
      />

      <SummaryCard
        title="Drafts"
        value={drafts}
        description="Awaiting editorial review"
        icon={FileEdit}
      />

      <SummaryCard
        title="Total Views"
        value={totalViews.toLocaleString()}
        description="Cumulative readership"
        icon={Eye}
      />

    </div>
  );
}

export default SummaryCards;
