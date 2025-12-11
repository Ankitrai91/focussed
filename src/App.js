import React, { useState } from 'react';
import logo from '../src/focussed.jpeg';
import connection from '../src/connection.jpeg';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";


// --- MOCK DATABASE FOR PRODUCTS ---
const categoriesDB = {
  "Antennas": [
    { id: 1, name: "GPS Antenna", img: "📡", desc: "High precision GPS modules." },
    { id: 2, name: "GSM Antenna", img: "📶", desc: "Standard GSM communication." },
  ],
  "Attenuators & Terminators": [
    { id: 1, name: "1W Attenuator", img: "⚡", desc: "Low power handling." },
  ],
  "default": [
    { id: 1, name: "Generic Product", img: "📦", desc: "Product details coming soon." },
    { id: 2, name: "Standard Component", img: "🔧", desc: "High quality material." }
  ]
};

const sidebarList = [
  "Antennas", "Attenuators & Terminators", "Bias TEE", "Cavity Filters", 
  "Ceramic Filters", "E1 & BER Testers", "LNA & Mixers", "RF Adapters", 
  "RF Amplifiers", "RF Cable Assembly", "RF Cables", "RF Connectors", 
  "Waveguides"
];

// --- PAGE COMPONENTS (Content for Top Menu) ---

const PageHome = () => (
  <div className="fade-in">
    <div >
      <img 
        src={connection}
        alt="Focussed Solutions Banner" 
        style={{width: '100%', borderRadius: '5px'}}
      />
    </div>
    <div className="hero-box">
      <h2>Welcome to Focussed Solutions!</h2>
      <p>
        Focussed Solutions established in New Delhi India. We are India's leading 
        representative company in high rel. Electronic, Communication, RF & MW Components.
      </p>
      <button className="btn-red">Know More</button>
    </div>
    <h3>Featured Products</h3>
    <div className="grid-container">
      {sidebarList.slice(0, 4).map(item => (
        <div key={item} className="grid-card">
          <div className="img-placeholder">★</div>
          <strong>{item}</strong>
        </div>
      ))}
    </div>
  </div>
);

const PageProfile = () => (
  <div className="fade-in">
    <h2>Company Profile</h2>
    <div className="text-content">
      <p><strong>Founded in 2012</strong>, Focussed has grown into a major player in the RF industry.</p>
      <p>
        Our mission is to provide high-quality electronic components to the Defense, 
        Space, and Communication sectors. We partner with top manufacturers from 
        the USA, Europe, and Asia.
      </p>
      <ul>
        <li>Headquarters: New Delhi, India</li>
        <li>Specialty: RF & Microwave Components</li>
        <li>Clients: DRDO, ISRO, BEL</li>
      </ul>
    </div>
  </div>
);

const PageServices = () => (
  <div className="fade-in">
    <h2>Services Offered</h2>
    <div className="grid-container">
      <div className="grid-card">
        <h3>Consultation</h3>
        <p>Technical consultation for RF designs.</p>
      </div>
      <div className="grid-card">
        <h3>Sourcing</h3>
        <p>Global sourcing of hard-to-find components.</p>
      </div>
      <div className="grid-card">
        <h3>Testing</h3>
        <p>In-house testing and validation services.</p>
      </div>
    </div>
  </div>
);

const PageContact = () => (
  <div className="fade-in">
    <h2>Contact Us</h2>
    <div className="contact-layout">
      <div className="contact-info">
        <p><strong>Address:</strong> 27, CB Nagar, Greater Noida, Uttar pradesh, 201009</p>
        <p><strong>Phone:</strong> +91 9217056624</p>
        <p><strong>Email:</strong> sales@focussed.co.in || fcsdsol@gmail.com</p>
      </div>
      <form className="big-form">
        <label>Your Name</label>
        <input type="text" className="input-field" />
        <label>Your Message</label>
        <textarea className="input-field" rows="4"></textarea>
        <button className="btn-red">Send Message</button>
      </form>
    </div>
  </div>
);

const PageBlog = () => (
  <div className="fade-in">
    <h2>Latest Blog Posts</h2>
    <p>No recent updates. Check back later for industry news!</p>
  </div>
);

// --- PRODUCT GRID COMPONENT ---
const ProductDisplay = ({ category }) => {
  const products = categoriesDB[category] || categoriesDB["default"];
  
  return (
    <div className="fade-in">
      <h2>{category}</h2>
      <p style={{marginBottom: '20px', color: '#666'}}>
        Displaying available products for: <strong>{category}</strong>
      </p>
      <div className="grid-container">
        {products.map((prod) => (
          <div key={prod.id} className="grid-card product-card">
            <div className="img-placeholder">{prod.img}</div>
            <h4>{prod.name}</h4>
            <p className="desc">{prod.desc}</p>
            <button className="btn-small">View Specifications</button>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- NAVIGATION COMPONENTS ---

const TopBar = () => (
  <div className="top-bar">
    <div className="container flex-between">
      <span>📞 +91-8630477039 | ✉️ : sales@focussed</span>
      <div 
      className="socials" 
      style={{ display: "flex", gap: "15px", alignItems: "center" }}
    >
      {/* Facebook */}
      <a 
        href="https://facebook.com/" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ fontSize: "24px", color: "#1877F2", cursor: "pointer" }}
      >
        <FaFacebookF />
      </a>

      {/* Twitter */}
      <a 
        href="https://twitter.com/" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ fontSize: "24px", color: "#1DA1F2", cursor: "pointer" }}
      >
        <FaTwitter />
      </a>

      {/* Instagram */}
      <a 
        href="https://www.instagram.com/focussed_solutions?utm_source=qr&igsh=cnVoYndjeTVzb2ts" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ fontSize: "24px", color: "#E4405F", cursor: "pointer" }}
      >
        <FaInstagram />
      </a>

      {/* LinkedIn */}
      <a 
        href="https://linkedin.com/" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ fontSize: "24px", color: "#0077B5", cursor: "pointer" }}
      >
        <FaLinkedinIn />
      </a>
    </div>
    </div>
  </div>
);

const Navbar = ({ activePage, onMenuClick }) => {
  const menuItems = ["Home", "Company Profile", "Services Offered", "Products", "Blog", "Contact Us"];
  
  return (
  <nav
      style={{
        width: "100%",
        padding: "10px 0",
        background: "#4A521F",
        boxShadow: "0 0 5px rgba(0,0,0,0.1)"
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between", // LOGO LEFT / MENU RIGHT
          alignItems: "center"
        }}
      >
        {/* LEFT LOGO */}
        <div>
          <img
            src={logo}
            alt="Logo"
            style={{
              height: "50px",
              objectFit: "contain"
            }}
          />
        </div>

        {/* RIGHT MENU */}
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "25px",
            margin: 0,
            padding: 0
          }}
        >
          {menuItems.map((item) => (
            <li
              key={item}
              onClick={() => onMenuClick(item)}
              style={{
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: activePage === item ? "bold" : "normal",
                color: activePage === item ? "#718138" : "white"
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

const Sidebar = ({ activeCategory, onSelectProduct }) => (
  <aside className="sidebar">
    <div className="sidebar-box">
      <h3>Quick Contact</h3>
      <input type="text" placeholder="Name" className="sidebar-input"/>
      <input type="text" placeholder="Phone" className="sidebar-input"/>
      <button className="btn-red">Contact Now</button>
    </div>

    <div className="sidebar-box">
      <h3>Our Products</h3>
      <ul>
        {sidebarList.map((item) => (
          <li 
            key={item} 
            className={activeCategory === item ? "sidebar-active" : ""}
            onClick={() => onSelectProduct(item)}
          >
            ▶ {item}
          </li>
        ))}
      </ul>
    </div>
  </aside>
);

// --- MAIN APP ---

function App() {
  // State 1: Which Top Menu Page is active?
  const [currentPage, setCurrentPage] = useState("Home");
  
  // State 2: Which Product Category is active? (Only used if currentPage === "Products")
  const [selectedCategory, setSelectedCategory] = useState("Antennas");

  // Handler: When clicking Sidebar Product
  const handleSidebarClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage("Products"); // Force view to switch to Product mode
  };

  // Handler: When clicking Top Menu
  const handleMenuClick = (pageName) => {
    setCurrentPage(pageName);
    // If they click "Products" in top menu, reset to a default category or keep previous
    if(pageName === "Products" && !selectedCategory) {
      setSelectedCategory("Antennas"); 
    }
  };

  // Logic: Decide what to render in the Main Content Area
  let mainContentComponent;
  switch (currentPage) {
    case "Home":
      mainContentComponent = <PageHome />;
      break;
    case "Company Profile":
      mainContentComponent = <PageProfile />;
      break;
    case "Services Offered":
      mainContentComponent = <PageServices />;
      break;
    case "Contact Us":
    case "Enquiry Now":
      mainContentComponent = <PageContact />;
      break;
    case "Blog":
      mainContentComponent = <PageBlog />;
      break;
    case "Products":
      mainContentComponent = <ProductDisplay category={selectedCategory} />;
      break;
    default:
      mainContentComponent = <PageHome />;
  }

  return (
    <div className="app-wrapper">
      <TopBar />
     

      <Navbar activePage={currentPage} onMenuClick={handleMenuClick} />

      <div className="container main-layout">
        <Sidebar 
          activeCategory={currentPage === "Products" ? selectedCategory : null} 
          onSelectProduct={handleSidebarClick} 
        />
        
        <main className="content-area">
          {mainContentComponent}
        </main>
      </div>

      <footer className="footer">
        © 2014 Focussed Solutions. All Rights Reserved.
      </footer>

      {/* --- CSS STYLES --- */}
      <style>{`
        /* Core Layout */
        * { box-sizing: border-box; }
        body { font-family: 'Segoe UI', Arial, sans-serif; margin: 0; background: #f4f4f4; color: #333; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 15px; }
        .flex-between { display: flex; justify-content: space-between; align-items: center; }
        .main-layout { display: flex; gap: 20px; margin-top: 20px; align-items: flex-start; }
        
        /* Headers */
        .top-bar { background: #333; color: white; padding: 8px 0; font-size: 0.85rem; }
        .logo-section { padding: 20px 0; color: #718138; }
        .navbar { background: #718138; }
        .nav-list { list-style: none; padding: 0; margin: 0; display: flex; flex-wrap: wrap; }
        .nav-list li { padding: 15px 20px; color: white; cursor: pointer; font-weight: bold; transition: 0.3s; }
        .nav-list li:hover { background: #4A521F; }
        .nav-active { background: #4A521F !important; }

        /* Sidebar */
        .sidebar { width: 25%; flex-shrink: 0; }
        .sidebar-box { background: white; padding: 15px; border: 1px solid #ddd; margin-bottom: 20px; border-radius: 4px; }
        .sidebar-box h3 { border-bottom: 2px solid #718138; padding-bottom: 5px; color: #718138; margin-top: 0; }
        .sidebar-input { width: 100%; padding: 8px; margin-bottom: 10px; border: 1px solid #ccc; }
        .sidebar-box ul { list-style: none; padding: 0; }
        .sidebar-box li { padding: 8px 0; border-bottom: 1px dotted #ccc; cursor: pointer; color: #555; }
        .sidebar-box li:hover { color: #718138; font-weight: bold; padding-left: 5px; transition: 0.2s; }
        .sidebar-active { color: #718138 !important; font-weight: bold; padding-left: 5px; }

        /* Main Content */
        .content-area { width: 75%; background: white; padding: 25px; border: 1px solid #ddd; border-radius: 4px; min-height: 500px; }
        .hero-box { background: #fff3f3; padding: 20px; margin-bottom: 20px; border-left: 5px solid #718138; }
        .text-content { line-height: 1.6; }
        
        /* Grid & Cards */
        .grid-container { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 20px; margin-top: 20px; }
        .grid-card { border: 1px solid #eee; padding: 15px; text-align: center; border-radius: 5px; background: #fff; transition: 0.2s; }
        .grid-card:hover { transform: translateY(-5px); box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
        .img-placeholder { height: 80px; background: #f9f9f9; display: flex; align-items: center; justify-content: center; font-size: 2rem; margin-bottom: 10px; }
        
        /* Forms */
        .big-form { display: flex; flexDirection: column; gap: 10px; max-width: 500px; }
        .input-field { padding: 10px; border: 1px solid #ccc; width: 100%; border-radius: 4px; margin-bottom: 10px; }

        /* Buttons */
        .btn-red { background: #718138; color: white; border: none; padding: 10px 20px; cursor: pointer; font-weight: bold; }
        .btn-small { background: #444; color: white; border: none; padding: 5px 10px; margin-top: 10px; cursor: pointer; font-size: 0.8rem; }
        
        /* Footer */
        .footer { background: #222; color: #aaa; text-align: center; padding: 20px; margin-top: 40px; }

        /* Animation */
        .fade-in { animation: fadeIn 0.5s ease-in; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

        /* Responsive */
        @media (max-width: 768px) {
          .main-layout { flex-direction: column; }
          .sidebar, .content-area { width: 100%; }
          .nav-list { flex-direction: column; text-align: center; }
        }
      `}</style>
    </div>
  );
}

export default App;