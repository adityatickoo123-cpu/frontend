import { FaTree, FaCogs, FaFire } from "react-icons/fa";
import Card from "../components/molecule/card";

const HomeDetail = ({ data }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-tag">Premium Wood Collection</span>
          <h1 className="hero-title">Crafted Timber for Exceptional Spaces</h1>
          <p className="hero-subtitle">
            Explore our hand-selected wood materials, sustainably harvested and milled to precision specs for architects, builders, and luxury artisans.
          </p>
          <div className="hero-buttons">
            <a href="/woods" className="btn">Browse Woods</a>
            <a href="/contact" className="btn-secondary">Get in Touch</a>
          </div>
        </div>
      </section>

      {/* Craft Values Section */}
      <section className="values-section">
        <h2 className="values-title">Our Milling Values</h2>
        <p className="values-subtitle">
          Every log we harvest represents a commitment to fine engineering and structural longevity.
        </p>
        <div className="values-grid">
          <div className="value-card">
            <FaTree className="value-icon" />
            <h3>Sustainable Sourcing</h3>
            <p>
              We source exclusively from certified, responsibly managed forests, assuring wood strength and ecosystem health.
            </p>
          </div>
          <div className="value-card">
            <FaCogs className="value-icon" />
            <h3>Precision Milling</h3>
            <p>
              Advanced slow-feed bandsaws cut each board to exact technical blueprints with minimal wood fiber fatigue.
            </p>
          </div>
          <div className="value-card">
            <FaFire className="value-icon" />
            <h3>Kiln Seasoning</h3>
            <p>
              Low-heat dehumidification kilns cure the timber to a stable 10-12% moisture level, preventing seasonal warping.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Showcase Section */}
      <section className="featured-section">
        <h2 className="featured-title">Featured Species</h2>
        <p className="featured-subtitle">
          Take a look at some of our finest timber choices curated for your designs.
        </p>
        <div className="cardsClass">
          {data && data.slice(0, 3).map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default HomeDetail;