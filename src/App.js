import { useState } from "react";
import TopBar from "./components/layout/TopBar";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import ProductDisplay from "./components/products/ProductDisplay";
import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
import Blog from "./components/pages/Blog";
import "./styles/main.css";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");
const [selectedCategory, setSelectedCategory] = useState("Antennas");
const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const handleSidebarClick = (category, subCategory = null) => {
  setSelectedCategory(category);
  setSelectedSubCategory(subCategory);
  setCurrentPage("Products");
};



  const renderPage = () => {
    switch (currentPage) {
      case "Products": return <ProductDisplay category={selectedCategory} subCategory={selectedSubCategory}/>;
      case "Company Profile": return <Profile />;
      case "Services Offered": return <Services />;
      case "Contact Us": return <Contact />;
      case "Blog": return <Blog />;
      default: return <Home />;
    }
  };

  return (
    <>
      <TopBar />
      <Navbar activePage={currentPage} onMenuClick={setCurrentPage} />

      <div className="container main-layout">
        {/* <Sidebar
          activeCategory={currentPage === "Products" ? selectedCategory : null}
          onSelectProduct={(c) => {
            setSelectedCategory(c);
            setCurrentPage("Products");
          }}
        /> */}
        <Sidebar
  activeCategory={selectedCategory}
  onSelectProduct={handleSidebarClick}
/>

        <main className="content-area">{renderPage()}</main>
      </div>
    </>
  );
}

export default App;
