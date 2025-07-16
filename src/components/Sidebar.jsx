import { useState } from "react";
import packages from "../consumables/packages"; // Assuming the package list is in this path

const FilterPackages = () => {
  const [search, setSearch] = useState("");
  const [minRating, setMinRating] = useState(0);
  const [maxDuration, setMaxDuration] = useState(10);
  const [sortBy, setSortBy] = useState("popularity");

  const filteredPackages = packages
    .filter(pkg =>
      pkg.title.toLowerCase().includes(search.toLowerCase()) ||
      pkg.location.toLowerCase().includes(search.toLowerCase())
    )
    .filter(pkg => pkg.rating >= minRating && pkg.duration <= maxDuration)
    .sort((a, b) => {
      if (sortBy === "popularity") return b.popularity - a.popularity;
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "price") return parseFloat(b.price.replace("$", "")) - parseFloat(a.price.replace("$", ""));
      if (sortBy === "date") return new Date(b.date) - new Date(a.date);
      return 0;
    });

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by title or location"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded w-full"
        />

        <input
          type="number"
          placeholder="Min Rating"
          value={minRating}
          onChange={(e) => setMinRating(Number(e.target.value))}
          className="p-2 border rounded w-full"
          min={0}
          max={5}
        />

        <input
          type="number"
          placeholder="Max Duration (days)"
          value={maxDuration}
          onChange={(e) => setMaxDuration(Number(e.target.value))}
          className="p-2 border rounded w-full"
          min={1}
        />

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="p-2 border rounded w-full"
        >
          <option value="popularity">Sort by Popularity</option>
          <option value="rating">Sort by Rating</option>
          <option value="price">Sort by Price</option>
          <option value="date">Sort by Date</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPackages.map(pkg => (
          <div
            key={pkg.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition duration-300"
          >
            <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="text-xl font-bold mb-1">{pkg.title}</h3>
            <p className="text-gray-600 mb-1">{pkg.location}</p>
            <p className="text-orange-500 font-semibold">{pkg.price}</p>
            <p className="text-sm text-gray-500">Rating: {pkg.rating} ★</p>
            <p className="text-sm text-gray-500">Duration: {pkg.duration} days</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterPackages;
