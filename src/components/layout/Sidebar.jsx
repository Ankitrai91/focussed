import { useState } from "react";
import { sidebarList } from "../../data/sidebarList";


const nonFerrousItems = ["Bismuth", "Lumps","Magnsium Ingots", "Silicon Lumps", "Zinc Ingots"];

export default function Sidebar({ activeCategory, onSelectProduct }) {

    const [showNonFerrous, setShowNonFerrous] = useState(false);


    return (
    <aside className="sidebar">
      <div className="sidebar-box">
        <h3>Quick Contact</h3>
        <input className="sidebar-input" placeholder="Name" />
        <input className="sidebar-input" placeholder="Phone" />
        <button className="btn-red">Contact Now</button>
      </div>

      <div className="sidebar-box">
        <h3>Our Products</h3>

        <ul>
          {sidebarList.map(item => {
            if (item === "Non-Ferrous Metals") {
              return (
                <li key={item}>
                  {/* Parent */}
                  <div
                    className="dropdown-parent"
                    onClick={() => setShowNonFerrous(!showNonFerrous)}
                  >
                    ▶ {item}
                  </div>

                  {/* Dropdown */}
                  {showNonFerrous && (
                    <ul className="dropdown-list">
                      {nonFerrousItems.map(sub => (
                        <li
                          key={sub}
                          className="dropdown-item"
                          onClick={() =>
                            onSelectProduct("Non-Ferrous Metals", sub)
                          }
                        >
                          ▸ {sub}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            }

            return (
              <li
                key={item}
                className={activeCategory === item ? "sidebar-active" : ""}
                onClick={() => onSelectProduct(item)}
              >
                ▶ {item}
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
