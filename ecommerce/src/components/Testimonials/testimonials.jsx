import React from "react";
import "./Testimonials.css"

const Testimonials=()=>{
    const testimonials=[
    {
        name:"akshat",
        review:"Amazing products and fast delivery",
    },
    {
        name:"yash",
        review:"I love the variety and quality pf product!",
    },
    {
        name:"yashi",
        review:"Great prices and excellent customer servicel"
    },
    ];

    return (
        <section className="testimonials">
            <h2>What Our Customers Say</h2>
            <div className="testimonials-grid">
                {testimonials.map((testimonial,index)=>(
                    <div key={index} className="testimonial-card">
                        <p>"{testimonial.review}"</p>
                        <h4>-{testimonial.name}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
    
};
export default Testimonials;