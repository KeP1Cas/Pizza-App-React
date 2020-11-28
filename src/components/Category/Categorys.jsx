import React, { useState } from "react";
import PropTypes from "prop-types";
const Categorys = React.memo(function Categorys({
  activeCategory,
  items,
  onClickCategory,
}) {
  const onSelectItem = (index) => {
    onClickCategory(index);
  };

  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? "active" : ""}
          onClick={() => onClickCategory(null)}
        >
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={activeCategory === index ? "active" : ""}
              onClick={() => onClickCategory(index)}
              key={`${name}_${index}`}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
});

Categorys.propTypes = {
  // activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func,
};

Categorys.defaultProps = {
  activeCategory: null,
  items: [],
};

export default Categorys;
