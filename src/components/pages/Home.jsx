import banner from "../../assets/connection.jpeg";
import { sidebarList } from "../../data/sidebarList";

import antennasImg from "../../assets/images/Antenna/1.jpg";
import cavityImg from "../../assets/images/Cavity_Filter/1.png";
import ceramicImg from "../../assets/images/Ceramic_and_SAW/1.png";
import lnaImg from "../../assets/images/LNA/Low-Noise-Amplifier.webp";
import nonFerrousImg from "../../assets/images/Non_Ferrous_Metals/Bismuth/1.jpg";
import rfAdaptersImg from "../../assets/images/RF_Adapter/1.jpg";

 


export default function Home() {

  let sidebarLists = [
    { name: "Antennas", img: antennasImg },
    { name: "Cavity Filters", img: cavityImg },
    { name: "Ceramic and SAW", img: ceramicImg },
    { name: "LNA", img: lnaImg },
    { name: "Non-Ferrous Metals", img: nonFerrousImg },
    { name: "RF Adapters", img: rfAdaptersImg },
    { name: "RF Cable Assembly", img: rfAdaptersImg },
    // { name: "RF Cables", img: rfAdaptersImg },
    // { name: "RF Connectors", img: rfAdaptersImg },
    // { name: "Waveguides", img: rfAdaptersImg },
  ];
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
  {sidebarLists.slice(0, 6).map((item) => (
    <div key={item.name} className="grid-card">
      <img
        src={item.img}
        alt={item.name}
        className="category-img"
      />
      <strong>{item.name}</strong>
    </div>
  ))}
</div>

    </div>
  );
}
