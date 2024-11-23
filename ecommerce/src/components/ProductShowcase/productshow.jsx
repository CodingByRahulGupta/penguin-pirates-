import React from "react";
import "./ProductShowcase.css";

const ProductShowCase=()=>{
    const products = [
        { id: 1, name: "Smartphone", price: "Rs699", image: "https://tse3.mm.bing.net/th?id=OIP.4BL8Obiwh6W1MiWIQvxORgHaHm&pid=Api&P=0&h=180" },
        { id: 2, name: "Laptop", price: "Rs999", image: "https://www.bhphotovideo.com/images/images2500x2500/asus_ux581gv_xb74t_15_6_zenbook_pro_duo_1502409.jpg" },
        { id: 3, name: "Watch", price: "Rs199", image: "https://tse3.mm.bing.net/th?id=OIP.8nLjcpYnG3o2MtNnHf6e6wHaHa&pid=Api&P=0&h=180" },
        { id: 4, name: "Shoes", price: "Rs129", image: "https://www.mynavyexchange.com/products/images/xlarge/13546070_001.jpg" },
    ];

    return (
        <section className="Product-Showcase">
            <h2>Featured Products</h2>
            <div className="product-grid">
                {products.map((product)=>(
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name}/> 
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                        <button className="buy-now-btn">Buy Now</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductShowCase;
