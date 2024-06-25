import axios from "axios";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const SearchButton = () => {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState(false);
  const [suggestions, setSuggestion] = useState([]);
  const [hotelNames, setHotelNames] = useState([]);

  useState(() => {
    async function fetchingHotelNames() {
      try {
        const res = await axios.get(
          "https://hotello-backend-xivc.onrender.com/api/hotels"
        );
        const names = await res.data.map((hotel) => hotel.name);
        setHotelNames(names);
      } catch (error) {
        console.log(error);
      }
    }
    fetchingHotelNames();
  }, [search]);

  const handleSearch = () => {
    setSearch(!search);
    setSuggestion([])
    console.log(search);
  };

  function handleInputChange(e) {
    const value = e.target.value;
    setQuery(value);
    if (value.length > 0) {
      const filteredSuggestions = hotelNames.filter((name) =>
        name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestion(filteredSuggestions);
    } else {
      setSuggestion([]);
    }
  }
  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setSuggestion([]);
  };
  return (
    <div className="">
      <button className="text-xl w-full" onClick={handleSearch}>
        <span>{search ? <RxCross2 /> : <CiSearch />}</span>
      </button>

      <div className="w-full">
        <input
          type="text"
          placeholder="Search for hotels.."
          value={query}
          onChange={handleInputChange}
          className={`${
            search
              ? "absolute md:right-[230px] right-[28px] md:top-[69px] top-[49px] py-2 px-4 rounded-md md:w-[400px]"
              : "hidden"
          }`}
        />
        
          {suggestions.length > 0 && (
              <ul className="py-1 px-4 rounded-md absolute flex flex-col gap-2 overflow-y-auto top-24 left-1 md:top-[7rem] md:left-[31.4rem] h-[200px] bg-transparent">
                {suggestions.map((suggestion, index) => (
                  <li
                    className=""
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    <button>{suggestion}</button>
                  </li>
                ))}
              </ul>
            
          )}
        
      </div>
    </div>
  );
};

export default SearchButton;
