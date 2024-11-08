
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";

// Custom button component with styling and click handling
const CustomButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-200 ease-in-out"
    >
      {text}
    </button>
  );
};

const BestDeals = () => {
  const [data, setData] = useState([]);
  const { allProducts } = useSelector((state) => state.products);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    // Sort products by sold_out property and select top 5
    const allProductsData = allProducts ? [...allProducts] : [];
    const sortedData = allProductsData.sort((a, b) => b.sold_out - a.sold_out);
    const firstFive = sortedData.slice(0, 5);
    setData(firstFive);
  }, [allProducts]);

  // Function to handle "See More" button click
  const handleSeeMore = () => {
    // Navigate to the "Best Pitches" page
    navigate("/checkout");
    // navigate("/Best Pitches"); // Redirect to Best Pitches page
  };

  return (
    <div className={`${styles.section} mb-12 p-6 bg-gray-50 rounded-lg shadow-md`}>
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Best Pitches</h1>
        <CustomButton text="See More" onClick={handleSeeMore} />
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {data && data.length !== 0 ? (
          data.map((product, index) => (
            <ProductCard data={product} key={index} />
          ))
        ) : (
          <p className="text-gray-600">No pitches available.</p>
        )}
      </div>
    </div>
  );
};

export default BestDeals;

