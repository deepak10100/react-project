import React, { useEffect, useState } from 'react';

function Ecommerce() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const allData = await res.json();
      setData(allData);
      setLoading(false);
    } catch (err) {
      setError("Kuch galat ho gaya",err);
      setLoading(false);
    }
  };

  // ✅ Unified Filtering Logic — NO REPETITION
  const filteredData = data.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;

    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Category Buttons */}
      <div className="flex gap-3 justify-center mt-5 flex-wrap">
        <button onClick={() => setSelectedCategory("All")} className="bg-yellow-400 px-4 py-2">All</button>
        <button onClick={() => setSelectedCategory("men's clothing")} className="bg-yellow-400 px-4 py-2">Men</button>
        <button onClick={() => setSelectedCategory("women's clothing")} className="bg-yellow-400 px-4 py-2">Women</button>
        <button onClick={() => setSelectedCategory("electronics")} className="bg-yellow-400 px-4 py-2">Electronics</button>
      </div>

      {/* Search Box */}
      <div className="flex justify-center mt-4">
        <input
          type="text"
          placeholder="Search products..."
          className="px-4 py-2 border border-yellow-700"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Product Cards */}
      <div className="flex flex-wrap justify-center gap-6 mt-8 px-4">
        {error && <p>{error}</p>}
        {loading ? (
          <p>Loading...</p>
        ) : filteredData.length === 0 ? (
          <p>No products found</p>
        ) : (
          filteredData.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-md shadow-md w-72">
              <img src={item.image} alt={item.title} className="h-40 mx-auto object-contain" />
              <h3 className="font-bold mt-2">{item.title}</h3>
              <p className="text-sm mt-1">{item.description.slice(0, 80)}...</p>
              <p className="font-semibold mt-2">${item.price}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Ecommerce;
