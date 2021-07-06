import React, { useEffect, useState } from 'react';
import './styles.scss';

const CategoriesCheckBoxes = ({ categories, handleCheckChieldElement }) => {


    const changeClassName = (category) => {
        return category.isChecked ? "btn-checked" : "btn-unchecked";
    }

    const changeTextClassName = (category) =>{
        return category.isChecked ? "btn-checked" : "";
    }
    return <div>
        {categories.map(category =>
            <button
                key={category.CategoryName}
                className={changeClassName(category)}
                onClick={handleCheckChieldElement}>

                    {category.CategoryName}

            </button>
        )
        }
    </div>

}

export default CategoriesCheckBoxes;