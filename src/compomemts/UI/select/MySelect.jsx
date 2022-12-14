import React from "react";

const MySelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((opt) => {
        return (
          <option value={opt.value} key={opt.value}>
            {opt.name}
          </option>
        );
      })}
    </select>
  );
};

export default MySelect;
