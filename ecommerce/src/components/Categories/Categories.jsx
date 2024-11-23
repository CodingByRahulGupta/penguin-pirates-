import React from "react";
import "./Categories.css";

const Categories=()=>{
    const categories=["Electronics","Fashion","Home","Beauty","Sports"];
    return (
        <section className="categories">
            <h2>Shop by Categories</h2>
            <div className="categories-grid">
                {categories.map((category,index)=>(
                    <div key={index} className="category-card">
                        <h3>{category}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Categories;