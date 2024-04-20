// import React from "react";
// import "../styles/LayoutStyles.css";
// import { SidebarMenu } from "../Data/data";
// import { Link, useLocation } from "react-router-dom";
// // import { useSelector } from "react-redux";
// const Layout = ({ children }) => {
//   // const { user } = useSelector((state) => state.user);
//   const location = useLocation();
//   return (
//     <>
//       <div className="main">
//         <div className="layout">
//           <div className="sidebar">
//             <div className="logo">
//               <h6>DR_APP</h6>
//               <hr />
//             </div>
//             <div className="menu">
//               {SidebarMenu.map((menu) => {
//                 const isActive = location.pathname === menu.path;
//                 return (
//                   <>
//                     <div className={`menu-item ${isActive && "active"}`}>
//                       <i className={menu.icon}></i>
//                       <Link to={menu.path}>{menu.name}</Link>
//                     </div>
//                   </>
//                 );
//               })}
//             </div>
//           </div>
//           <div className="content">
//             <div className="header">
//               Header

//             </div>
//             <div className="body">{children}</div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// // export default Layout;
// import React from "react";
// import { message } from "antd";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import "../styles/LayoutStyles.css";
// import { adminMenu, userMenu } from "../Data/data";
// import { useSelector } from "react-redux";

// const Layout = ({ children }) => {
//   const { user } = useSelector((state) => state.user);
//   const location = useLocation();
//   const navigate = useNavigate();

//   //logout function
//   const handleLogout = () => {
//     localStorage.clear();
//     message.success("Logout Successfully");
//     navigate("/login");

//     //rendring menu list
//     const SidebarMenu = user?.isAdmin ? adminMenu : userMenu;

//     return (
//       <div className="main">
//         <div className="layout">
//           <div className="sidebar">
//             <div className="logo">
//               <h6>DR_APP</h6>
//               <hr />
//             </div>
//             <div className="menu">
//               {SidebarMenu.map((menu) => {
//                 const isActive = location.pathname === menu.path;
//                 return (
//                   <div
//                     key={menu.path}
//                     className={`menu-item ${isActive && "active"}`}
//                   >
//                     <i className={menu.icon}></i>
//                     <Link to={menu.path}>{menu.name}</Link>
//                   </div>
//                 );
//               })}
//               <div
//                 // key={'menu.path'}
//                 className={`menu-item`}
//                 onClick={handleLogout}
//               >
//                 <i className="fa-solid fa-right-from-bracket"></i>
//                 <Link to="/login">Logout</Link>
//               </div>
//             </div>
//           </div>
//           <div className="content">
//             {/* Header with added functionality */}
//             <div className="header">
//               <div className="header-content">
//                 <i className="fa fa-bell bell-icon"></i>
//                 <Link to="/profile">{user?.name}</Link>
//               </div>
//               {/* <div className="header-content">
//               <i className="fa fa-bell bell-icon"></i>
//               {user && <Link to="/profile">{user.name}</Link>} */}
//               {/* </div> */}
//             </div>
//             <div className="body">{children}</div>
//           </div>
//         </div>
//       </div>
//     );
//   };
// };
// export default Layout;

// // {{}}
// import React from "react";
// import { message } from "antd";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import "../styles/LayoutStyles.css";
// import { adminMenu, userMenu } from "../Data/data";
// import { useSelector } from "react-redux";

// const Layout = ({ children }) => {
//   const { user } = useSelector((state) => state.user);
//   const location = useLocation();
//   const navigate = useNavigate();

//   //logout function
//   const handleLogout = () => {
//     localStorage.clear();
//     message.success("Logout Successfully");
//     navigate("/login");
//   };

//   //rendering menu list
//   const SidebarMenu = user?.isAdmin ? adminMenu : userMenu;

//   return (
//     <>
//       <div className="main">
//         <div className="layout">
//           <div className="sidebar"></div>
//           <div className="content">
//             <div className="logo">
//               <h6>DR_APP</h6>
//               <hr />
//             </div>
//             <div className="menu">
//               {SidebarMenu.map((menu) => {
//                 const isActive = location.pathname === menu.path;
//                 return (
//                   <>
//                     <div
//                       key={menu.path}
//                       className={`menu-item ${isActive && "active"}`}
//                     >
//                       <i className={menu.icon}></i>
//                       <Link to={menu.path}>{menu.name}</Link>
//                     </div>
//                   </>
//                 );
//               })}
//               <div className={`menu-item`} onClick={handleLogout}>
//                 <i className="fa-solid fa-right-from-bracket"></i>
//                 <Link to="/login">Logout</Link>
//               </div>
//             </div>
//           </div>
//           <div className="content">
//             {/* Header with added functionality */}
//             <div className="header">
//               <div className="header-content">
//                 <i className="fa fa-bell bell-icon"></i>
//                 <Link to="/profile">{user?.name}</Link>
//               </div>
//             </div>
//             <div className="body">{children}</div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Layout;

// import react from "react";

// import "../styles/LayoutStyles.css";
// import { UserMenu, adminMenu } from "../Data/data";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { message } from "antd";
// const Layout = ({ children }) => {
//   const { user } = useSelector((state) => state.user);
//   const location = useLocation();
//   const navigate = useNavigate();

//   //logout function
//   const handleLogout = () => {
//     localStorage.clear();
//     message.success("logout sucessfully");
//     navigate("/login");
//   };

//   //rendring menu list
//   const SidebarMenu = user?.isAdmin ? adminMenu : UserMenu;

//   return (
//     <>
//       <div className="main">
//         <div className="layout">
//           <div className="sidebar">
//             <div className="logo">
//               <h6>DR_APP</h6>
//               <hr />
//             </div>
//             <div className="menu">
//               {SidebarMenu.map((menu) => {
//                 const isActive = location.pathname === menu.path;
//                 return (
//                   <>
//                     <div className={`menu-item ${isActive && "active"}`}>
//                       <i className={menu.icon}></i>
//                       <Link to={menu.path}>{menu.name}</Link>
//                     </div>
//                   </>
//                 );
//               })}
//               <div className={`menu-item}`}>
//                 onClick = {handleLogout}
//                 <i className="fa-solid fa-right-from-bracket"></i>
//                 <Link to="/login">Logout</Link>
//               </div>
//             </div>
//           </div>
//           <div className="content">
//             <div className="header">
//               <div className="header-content">
//                 <i className="fa-solid fa-bell"></i>
//                 <Link to="/profile">{user?.name}</Link>
//               </div>
//             </div>
//             <div className="body">{children}</div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Layout;

////

import React from "react";
import { Badge, message } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/LayoutStyles.css";
import { UserMenu, adminMenu } from "../Data/data"; // Renamed from UserMenu to avoid conflict
import { useSelector } from "react-redux";
import { Cursor } from "mongoose";

const Layout = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  const navigate = useNavigate();

  // Rendering menu list
  const SidebarMenu = user?.isAdmin ? adminMenu : UserMenu; // Moved outside of the handleLogout function

  // Logout function
  const handleLogout = () => {
    localStorage.clear();
    message.success("Logout successfully");
    navigate("/login");
  };

  return (
    <>
      <div className="main">
        <div className="layout">
          <div className="sidebar">
            <div className="logo">
              <h6>DR_APP</h6>
              <hr />
            </div>
            <div className="menu">
              {SidebarMenu.map((menu) => {
                const isActive = location.pathname === menu.path;
                return (
                  <>
                    <div
                      key={menu.path}
                      // key={index}
                      className={`menu-item ${isActive && "active"}`}
                    >
                      <i className={menu.icon}></i>
                      <Link to={menu.path}>{menu.name}</Link>
                    </div>
                  </>
                );
              })}
              <div className={`menu-item`} onClick={handleLogout}>
                <i className="fa-solid fa-right-from-bracket"></i>
                <Link to="/login">Logout</Link>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="header">
              <div className="header-content" style={{ Cursor: "pointer" }}>
                <Badge
                  count={user && user.notification.length}
                  onClick={() => {
                    navigate("/notification");
                  }}
                >
                  <i class="fa-solid fa-bell"></i>
                </Badge>

                <Link to="/profile">{user?.name}</Link>
              </div>
            </div>
            <div className="body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;

// //for user

// import React from "react";
// import { message } from "antd";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import "../styles/LayoutStyles.css";
// import { UserMenu, adminMenu } from "../Data/data"; // Renamed from UserMenu to avoid conflict
// import { useSelector } from "react-redux";

// const Layout = ({ children }) => {
//   const { user } = useSelector((state) => state.user);
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Determine the menu based on user role
//   const sidebarMenu = user?.isAdmin ? adminMenu : UserMenu;

//   // Logout function
//   const handleLogout = () => {
//     localStorage.clear();
//     message.success("Logout successfully");
//     navigate("/login");
//   };

//   return (
//     <div className="main">
//       <div className="layout">
//         <div className="sidebar">
//           <div className="logo">
//             <h6>DR_APP</h6>
//             <hr />
//           </div>
//           <div className="menu">
//             {sidebarMenu.map((menu) => {
//               const isActive = location.pathname === menu.path;
//               return (
//                 <div
//                   key={menu.path}
//                   className={`menu-item ${isActive && "active"}`}
//                 >
//                   <i className={menu.icon}></i>
//                   <Link to={menu.path}>{menu.name}</Link>
//                 </div>
//               );
//             })}
//             <div className="menu-item" onClick={handleLogout}>
//               <i className="fa-solid fa-right-from-bracket"></i>
//               <Link to="/login">Logout</Link>
//             </div>
//           </div>
//         </div>
//         <div className="content">
//           <div className="header">
//             <div className="header-content">
//               <i className="fa-solid fa-bell"></i>
//               <Link to="/profile">{user?.name}</Link>
//             </div>
//           </div>
//           <div className="body">{children}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Layout;
