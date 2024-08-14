import React from 'react';

const FeatureCard = ({ title, description, image, cta }) => (
 <div className="feature-card">
   <h3>{title}</h3>
   <p>{description}</p>
   <button>{cta}</button>
   <img src={image} alt={title} />
 </div>
);

const Features = () => (
 <section className="features">
   <h2>MarketPulse Features</h2>
   <p>Key functionalities overview</p>
   <div className="feature-grid">
     <FeatureCard
       title="Price Trends"
       description="Track market price changes"
       image="/assets/card-img.png"
       cta="View Trends"
     />
     <FeatureCard
       title="Category Comparisons"
       description="Compare different market segments"
       image="/assets/card-img.png"
       cta="Compare Now"
     />
     <FeatureCard
       title="Stock Distribution"
       description="Visualize stock allocation"
       image="/assets/card-img.png"
       cta="View Distribution"
     />
   </div>
 </section>
);

export default Features;