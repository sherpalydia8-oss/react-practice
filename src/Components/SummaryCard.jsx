
function SummaryCard({ title, value, description, icon: Icon }) {
  return (
    <div className="bg-white border border-pink-100 rounded-2xl p-5 shadow-sm">

      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500 uppercase tracking-wide">
          {title}
        </p>

        <span className="bg-orange-50 text-orange-600 p-3 rounded-xl">
          <Icon size={22} />
        </span>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mt-4">
        {value}
      </h2>

      <p className="text-sm text-gray-500 mt-1">
        {description}
      </p>

    </div>
  );
}

export default SummaryCard;
