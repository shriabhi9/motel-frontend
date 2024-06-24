import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

const SearchButton = () => {
  const [search, setSearch] = useState(false);
  const handleSearch = () => {
    setSearch(!search);
    console.log(search);
  };

  return (
    <div>
      <button className="text-xl" onClick={handleSearch}>
        <span>{search ? <RxCross2 /> : <CiSearch />}</span>
      </button>

      <div>
          <input type="text" className={`${search ? "absolute md:right-[230px] right-[110px] md:top-[69px] top-[49px] py-2 px-4 rounded-md":"hidden"}`}/>
      </div>
    </div>
  );
};

export default SearchButton;
