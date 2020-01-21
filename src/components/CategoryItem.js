import React from 'react';

function CategoryItem({category}) {
  return (
    <div>
      <a href="#"> {category.name}</a>
    </div>
  );
}

export default CategoryItem;