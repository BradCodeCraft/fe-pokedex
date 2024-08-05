import React from "react";

export default function Sort() {
  return (
    <div>
      <select className="px-2.5 py-2 border-2 border-gray-400 bg-white rounded-lg">
        <option>Lowest Number First</option>
        <option>Highest Number First</option>
        <option>Alphabetically Ascending</option>
        <option>Alphabetically Descending</option>
      </select>
    </div>
  );
}
