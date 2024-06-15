import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { useCategory } from "../../Context/Category-context";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [numberOfCategoriesToShow, setNumberOfCategoriesToShow] = useState(0);
  const { hotelCategory, setHotelCategory } = useCategory();

  const RightClickToShowCategories = () => {
    setNumberOfCategoriesToShow((prev) => prev + 10);
  };
  const LeftClickToShowCategories = () => {
    setNumberOfCategoriesToShow((prev) => prev - 10);
  };

  async function fetchingCategoriesData() {
    try {
      const response = await axios.get(
        "https://hotello-backend-xivc.onrender.com/api/category"
      );
      const data = response.data;

      const categoriesToShow = data.slice(
        numberOfCategoriesToShow + 10 > data.length
          ? data.length - 10
          : numberOfCategoriesToShow,
        numberOfCategoriesToShow > data.length
          ? data.length
          : numberOfCategoriesToShow + 10
      );
      setCategories(categoriesToShow);
    } catch (error) {
      console.log("Error in fetching Categories", error);
    }
  }

  useEffect(() => {
    fetchingCategoriesData();
  }, [numberOfCategoriesToShow]);

  const handleCategoryClick = (category) => {
    setHotelCategory(category);
  };
  console.log({ "Hotel category": hotelCategory });

  return (
    <div className="flex gap-10 w-full px-2 py-2 rounded-md mt-2 mb-2">
      {numberOfCategoriesToShow >= 10 && (
        <button onClick={LeftClickToShowCategories}>
          <FaCaretLeft />
        </button>
      )}
      {categories.map((category) => {
        return (
          <button
            
            key={category._id}
            onClick={() => {
              handleCategoryClick(category.category);
            }}
          >
            <span className={`${category.category === hotelCategory ? "border-b-[2px] border-[#455d7a]" : ""}`}>{category.category}</span>
          </button>
        );
      })}
      {numberOfCategoriesToShow <= 10 && (
        <button onClick={RightClickToShowCategories}>
          <FaCaretRight />
        </button>
      )}
    </div>
  );
};

export default Categories;
