import React, { useContext, useState } from "react";
import dropdown_icon from "../Assets/dropdown_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import "./FilterWithDropdown.css";

export default function FilterWithDropdown() {
  const { sortOrder, setSortOrder, sortedProducts } = useContext(ShopContext);

  const [isOpen, setIsOpen] = useState(false);
  const options = ["Featured", "Low to High", "High to Low"];
  const [selectedOption, setSelectedOption] = useState("Featured"); // Başlangıçta "Featured" seçili

  const handleOptionClick = (option) => {
    setIsOpen(false);
    setSortOrder(option); // Sıralamayı güncelle
    setSelectedOption(option); // seçili option başlıkta yer alsın
  };

  return (
    <div className="dropdown">
      <div className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
        Sort by <img src={dropdown_icon} alt="Dropdown Icon" /> {selectedOption}
      </div>
      {isOpen && (
        <ul>
          {options.map((option) => (
            <li key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
