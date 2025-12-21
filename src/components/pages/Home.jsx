import banner from "../../assets/connection.jpeg";
import { sidebarList } from "../../data/sidebarList";

export default function Home() {
  return (
    <div className="fade-in">
      <img src={banner} alt="hero" className="hero-img" />

      <div className="hero-box">
        <h2>Welcome to Focussed Solutions</h2>
        <p>India’s leading RF & Microwave component partner.</p>
        <button className="btn-red">Know More</button>
      </div>
       <h3>Featured Products</h3>
    <div className="grid-container">
      {sidebarList.slice(0, 6).map((item) => (
        <div key={item} className="grid-card">
          <div className="img-placeholder">★</div>
          <strong>{item}</strong>
        </div>
      ))}
    </div>
    </div>
  );
}
