import React from 'react';
import CategoryItem from './CategoryItem';

function CategoryList({category}) {
  return (
    <div>
        <p>----메뉴----</p>
       {
                category.map((category) =>
                    (
                        category.show ?
                            <CategoryItem key={category.id} category={category} /> : null
                    )
                )
            }
    </div>
  );
}

export default CategoryList;