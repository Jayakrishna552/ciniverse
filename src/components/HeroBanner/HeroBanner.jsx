import banner from "../../assets/images/banner.jpg";
import "./HeroBanner.css";

function HeroBanner() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">
            Unlimited stories.
          </h1>

          <p className="hero-tagline">
            Endless entertainment.
          </p>

          <p className="hero-description">
            Watch movies and shows anytime. Discover your next
            favorite story and enjoy entertainment made for you.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;