// // // // import React, { useState } from "react";
// // // // import MegaMenu from "./MegaMenu";
// // // // import "./Navbar.css";
// // // // import DarkMode from "./DarkMode";
// // // // import User from "../../Assets/images/chandra.jpg";
// // // // import searchWhite from "../../Assets/images/SearchWhite.svg";
// // // // import searchBlack from "../../Assets/images/SearchBlack.svg";

// // // // const Navbar = () => {
// // // //   const [isDarkMode, setIsDarkMode] = useState(false);

// // // //   const handleToggle = (isDark) => {
// // // //     setIsDarkMode(isDark);
// // // //   };

// // // //   console.log("isDarkMode:", isDarkMode); // Debug log
// // // //   console.log("Search icon source:", isDarkMode ? searchWhite : searchBlack); // Debug log

// // // //   return (
// // // //     <>
// // // //       <nav className={`navbar ${isDarkMode ? "dark" : ""}`}>
// // // //         <div className="container">
// // // //           <ul className="nav-links">
// // // //             <li className="nav-item group">
// // // //               <a href="/" className="nav-link">
// // // //                 Home
// // // //               </a>
// // // //             </li>
// // // //             <li className="nav-item group">
// // // //               <a href="#" className="nav-link">
// // // //                 Category
// // // //               </a>
// // // //               <MegaMenu />
// // // //             </li>
// // // //             <li className="nav-item">
// // // //               <a href="/about" className="nav-link">
// // // //                 About
// // // //               </a>
// // // //             </li>
// // // //             <li className="nav-item">
// // // //               <a href="/contact" className="nav-link">
// // // //                 Contact
// // // //               </a>
// // // //             </li>
// // // //           </ul>
// // // //           <a href="/" className="logo">
// // // //             Logo
// // // //           </a>
// // // //           <div className="iconToggleUser">
// // // //             <img
// // // //               src={isDarkMode ? searchWhite : searchBlack}
// // // //               alt="search-icon"
// // // //               className="searchIcon"
// // // //             />
// // // //             <DarkMode onToggle={handleToggle} />
// // // //             <img src={User} alt="user" className="user-logo" />
// // // //           </div>
// // // //         </div>
// // // //       </nav>
// // // //       <hr className="hr-line" />
// // // //     </>
// // // //   );
// // // // };

// // // // export default Navbar;
// // // import React, { useState } from "react";
// // // import { Link } from "react-router-dom";
// // // import MegaMenu from "./MegaMenu";
// // // import "./Navbar.css";
// // // import DarkMode from "./DarkMode";
// // // import User from "../../Assets/images/chandra.jpg";
// // // import searchWhite from "../../Assets/images/SearchWhite.svg";
// // // import searchBlack from "../../Assets/images/SearchBlack.svg";
// // // import MenuIcon from "../../Assets/images/menu.svg"
// // // import CrossIcon from "../../Assets/images/CrossIcon.svg"
// // // const Navbar = () => {
// // //   const [isDarkMode, setIsDarkMode] = useState(false);
// // //   const [isSearchVisible, setIsSearchVisible] = useState(false);

// // //   const handleToggle = (isDark) => {
// // //     setIsDarkMode(isDark);
// // //   };

// // //   const handleSearchClick = () => {
// // //     setIsSearchVisible(!isSearchVisible);
// // //   };

// // //   console.log("isDarkMode:", isDarkMode); // Debug log
// // //   console.log("Search icon source:", isDarkMode ? searchWhite : searchBlack); // Debug log

// // //   return (
// // //     <>
// // //       <nav className={`navbar ${isDarkMode ? "dark" : ""}`}>
// // //         <div className="container">
// // //           <div className="left-group">
// // //             <Link to="/">
// // //               <div className="dream-text">Dream</div>
// // //             </Link>
// // //             <ul className="nav-links">
// // //               <li className="nav-item group">
// // //                 <Link to="/" className="nav-link">
// // //                   Home
// // //                 </Link>
// // //               </li>
// // //               <li className="nav-item group">
// // //                 <Link to="#" className="nav-link">
// // //                   Category
// // //                 </Link>
// // //                 <MegaMenu />
// // //               </li>
// // //               <li className="nav-item">
// // //                 <Link to="/about" className="nav-link">
// // //                   About
// // //                 </Link>
// // //               </li>
// // //               <li className="nav-item">
// // //                 <Link to="/contact" className="nav-link">
// // //                   Contact
// // //                 </Link>
// // //               </li>
// // //             </ul>
// // //           </div>
// // //           <div className="iconToggleUser">
// // //             {isSearchVisible && (
// // //               <input
// // //                 type="text"
// // //                 placeholder="Search here"
// // //                 className="search-input"
// // //               />
// // //             )}
// // //             <img
// // //               src={isDarkMode ? searchWhite : searchBlack}
// // //               alt="search-icon"
// // //               className="searchIcon"
// // //               onClick={handleSearchClick}
// // //             />
// // //             <DarkMode onToggle={handleToggle} />
// // //             <img src={User} alt="user" className="user-logo" />
// // //           </div>
// // //         </div>
// // //       </nav>
// // //       <hr className="hr-line" />
// // //     </>
// // //   );
// // // };

// // // export default Navbar;

// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// // import MegaMenu from "./MegaMenu";
// // import "./Navbar.css";
// // import DarkMode from "./DarkMode";
// // import User from "../../Assets/images/chandra.jpg";
// // import searchWhite from "../../Assets/images/SearchWhite.svg";
// // import searchBlack from "../../Assets/images/SearchBlack.svg";
// // import MenuIcon from "../../Assets/images/menu.svg";
// // import CrossIcon from "../../Assets/images/CrossIcon.svg";

// // const Navbar = () => {
// //   const [isDarkMode, setIsDarkMode] = useState(false);
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const [isSearchVisible, setIsSearchVisible] = useState(false);

// //   const handleToggle = (isDark) => {
// //     setIsDarkMode(isDark);
// //   };

// //   const handleMenuToggle = () => {
// //     setIsMenuOpen(!isMenuOpen);
// //   };

// //   const handleSearchClick = () => {
// //     setIsSearchVisible(!isSearchVisible);
// //   };

// //   console.log("isDarkMode:", isDarkMode); // Debug log
// //   console.log("Search icon source:", isDarkMode ? searchWhite : searchBlack); // Debug log

// //   return (
// //     <>
// //       <nav className={`navbar ${isDarkMode ? "dark" : ""}`}>
// //         <div className="container">
// //           <div className="left-group">
// //             <Link to="/">
// //               <div className="dream-text">Dream</div>
// //             </Link>
// //             <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
// //               <li className="nav-item group">
// //                 <Link to="/" className="nav-link">
// //                   Home
// //                 </Link>
// //               </li>
// //               <li className="nav-item group">
// //                 <Link to="#" className="nav-link">
// //                   Category
// //                 </Link>
// //                 <MegaMenu />
// //               </li>
// //               <li className="nav-item">
// //                 <Link to="/about" className="nav-link">
// //                   About
// //                 </Link>
// //               </li>
// //               <li className="nav-item">
// //                 <Link to="/contact" className="nav-link">
// //                   Contact
// //                 </Link>
// //               </li>
// //             </ul>
// //           </div>
// //           <div className="iconToggleUser">
// //             {isSearchVisible && (
// //               <input
// //                 type="text"
// //                 placeholder="Search here"
// //                 className="search-input"
// //               />
// //             )}
// //             <img
// //               src={isDarkMode ? searchWhite : searchBlack}
// //               alt="search-icon"
// //               className="searchIcon"
// //               onClick={handleSearchClick}
// //             />
// //             <DarkMode onToggle={handleToggle} />
// //             <img src={User} alt="user" className="user-logo" />
// //             <img
// //               src={isMenuOpen ? CrossIcon : MenuIcon}
// //               alt="menu-icon"
// //               className="menu-icon"
// //               onClick={handleMenuToggle}
// //             />
// //           </div>
// //         </div>
// //       </nav>
// //       <hr className="hr-line" />
// //     </>
// //   );
// // };

// // export default Navbar;
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import MegaMenu from "./MegaMenu";
// import "./Navbar.css";
// import DarkMode from "./DarkMode";
// import User from "../../Assets/images/chandra.jpg";
// import searchWhite from "../../Assets/images/SearchWhite.svg";
// import searchBlack from "../../Assets/images/SearchBlack.svg";
// import MenuIcon from "../../Assets/images/menu.svg";
// import CrossIcon from "../../Assets/images/CrossIcon.svg";

// const Navbar = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [isSearchVisible, setIsSearchVisible] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleToggle = (isDark) => {
//     setIsDarkMode(isDark);
//   };

//   const handleSearchClick = () => {
//     setIsSearchVisible(!isSearchVisible);
//   };

//   const handleMenuToggle = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleLinkClick = () => {
//     setIsMenuOpen(false);
//   };

//   console.log("isDarkMode:", isDarkMode); // Debug log
//   console.log("Search icon source:", isDarkMode ? searchWhite : searchBlack); // Debug log

//   return (
//     <>
//       <nav className={`navbar ${isDarkMode ? "dark" : ""}`}>
//         <div className="container">
//           <div className="left-group">
//             <Link to="/" onClick={handleLinkClick}>
//               <div className="dream-text">Dream</div>
//             </Link>
//             <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
//               <li className="nav-item group">
//                 <Link to="/" className="nav-link" onClick={handleLinkClick}>
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item group">
//                 <Link to="#" className="nav-link" onClick={handleLinkClick}>
//                   Category
//                 </Link>
//                 <MegaMenu />
//               </li>
//               <li className="nav-item">
//                 <Link
//                   to="/about"
//                   className="nav-link"
//                   onClick={handleLinkClick}
//                 >
//                   About
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   to="/contact"
//                   className="nav-link"
//                   onClick={handleLinkClick}
//                 >
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div className="iconToggleUser">
//             {isSearchVisible && (
//               <input
//                 type="text"
//                 placeholder="Search here"
//                 className="search-input"
//               />
//             )}
//             <img
//               src={isDarkMode ? searchWhite : searchBlack}
//               alt="search-icon"
//               className="searchIcon"
//               onClick={handleSearchClick}
//             />
//             <DarkMode onToggle={handleToggle} />
//             <img src={User} alt="user" className="user-logo" />
//             <img
//               src={isMenuOpen ? CrossIcon : MenuIcon}
//               alt="menu-icon"
//               className="menu-icon"
//               onClick={handleMenuToggle}
//             />
//           </div>
//         </div>
//       </nav>
//       <hr className="hr-line" />
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import MegaMenu from "./MegaMenu";
import "./Navbar.css";
import DarkMode from "../Common/DarkMode";
import User from "../../Assets/images/chandra.jpg";
import searchWhite from "../../Assets/images/SearchWhite.svg";
import searchBlack from "../../Assets/images/SearchBlack.svg";
import MenuIcon from "../../Assets/images/menu.svg";
import CrossIcon from "../../Assets/images/CrossIcon.svg";
import WhiteCrossIcon from "../../Assets/images/whitecross.jpeg"; // Import the white cross icon

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = (isDark) => {
    setIsDarkMode(isDark);
  };

  const handleSearchClick = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  console.log("isDarkMode:", isDarkMode); // Debug log
  console.log("Search icon source:", isDarkMode ? searchWhite : searchBlack); // Debug log

  return (
    <>
      <nav className={`navbar ${isDarkMode ? "dark" : ""}`}>
        <div className="container">
          <div className="left-group">
            <Link to="/" onClick={handleLinkClick}>
              <div className="dream-text">Dream</div>
            </Link>
            <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
              <li className="nav-item group">
                <Link to="/" className="nav-link" onClick={handleLinkClick}>
                  Home
                </Link>
              </li>
              <li className="nav-item group">
                <Link to="#" className="nav-link" onClick={handleLinkClick}>
                  Category
                </Link>
                <MegaMenu />
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-link"
                  onClick={handleLinkClick}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-link"
                  onClick={handleLinkClick}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="iconToggleUser">
            {isSearchVisible && (
              <input
                type="text"
                placeholder="Search here"
                className="search-input"
              />
            )}
            <img
              src={isDarkMode ? searchWhite : searchBlack}
              alt="search-icon"
              className="searchIcon"
              onClick={handleSearchClick}
            />
            <DarkMode onToggle={handleToggle} />
            <img src={User} alt="user" className="user-logo" />
            <img
              src={
                isMenuOpen
                  ? isDarkMode
                    ? WhiteCrossIcon
                    : CrossIcon
                  : MenuIcon
              }
              alt="menu-icon"
              className="menu-icon"
              onClick={handleMenuToggle}
            />
          </div>
        </div>
      </nav>
      <hr className="hr-line" />
    </>
  );
};

export default Navbar;
