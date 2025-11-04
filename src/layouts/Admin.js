/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState, useEffect } from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";

import AdminNavbar from "components/Navbars/AdminNavbar";
import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Form from "views/Form.js";
import Menus from "views/Menus.js";
import Notification from "components/Notification/Notification.js";

import sidebarImage from "assets/img/sidebar-3.jpg";
import Home from "views/Home";

function Admin() {
  const [image, setImage] = useState(sidebarImage);
  const [color, setColor] = useState("black");
  const [hasImage, setHasImage] = useState(true);
  const [menus, setMenus] = useState([]);
  const location = useLocation();
  const mainPanel = React.useRef(null);

  const componentMap = {
    "/home": Home,
    "/dashboard": Dashboard,
    "/user": UserProfile,
    "/typography": Typography,
    "/icons": Icons,
    "/maps": Maps,
    "/notifications": Notifications,
    "/form": Form,
    "/menus": Menus
  };

  // Fallback component for missing routes
  const NotFound = () => (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h3>Page Not Found</h3>
      <p>The requested page could not be found.</p>
    </div>
  );

  const fetchMenus = async () => {
    try {
      const response = await fetch("http://localhost:5000/all-menus", {
        credentials: "include",
      });
      if (response.ok) {
        const menuData = await response.json();
        setMenus(menuData);
      }
    } catch (error) {
      console.error("Error fetching menus:", error);
    }
  };

  useEffect(() => {
    fetchMenus();
    
    // Listen for menu updates
    const handleMenuUpdate = () => {
      fetchMenus();
    };
    
    window.addEventListener('menuUpdated', handleMenuUpdate);
    
    return () => {
      window.removeEventListener('menuUpdated', handleMenuUpdate);
    };
  }, []);

  const getRoutes = (menus) => {
    return menus
      .filter(menu => menu.enabled && menu.layout === "/admin")
      .map((menu, key) => {
        const Component = componentMap[menu.path];
        if (Component) {
          return (
            <Route
              exact
              path={menu.layout + menu.path}
              render={(props) => <Component {...props} />}
              key={`route-${menu.path}-${key}`}
            />
          );
        } else {
          console.warn(`Component not found for path: ${menu.path}`);
          return (
            <Route
              exact
              path={menu.layout + menu.path}
              render={() => <NotFound />}
              key={`notfound-${menu.path}-${key}`}
            />
          );
        }
      });
  };

  const getDisabledRedirects = () => {
    const enabledPaths = menus.filter(m => m.enabled === true).map(m => m.layout + m.path);
    const firstEnabledPath = enabledPaths[0] || '/admin/dashboard';
    
    return menus.filter(m => !m.enabled).map((menu, key) => {
      return (
        <Route
          key={`redirect-${key}`}
          path={menu.layout + menu.path}
          render={() => <Redirect to={firstEnabledPath} />}
        />
      );
    });
  };
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current.scrollTop = 0;
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      var element = document.getElementById("bodyClick");
      element.parentNode.removeChild(element);
    }
  }, [location]);
  return (
    <>
      <div className="wrapper">
        <Sidebar color={color} image={hasImage ? image : ""} />
        <div className="main-panel" ref={mainPanel}>
          <AdminNavbar />
          <div className="content">
            <Switch>
              {getRoutes(menus)}
              {getDisabledRedirects()}
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
      <FixedPlugin
        hasImage={hasImage}
        setHasImage={() => setHasImage(!hasImage)}
        color={color}
        setColor={(color) => setColor(color)}
        image={image}
        setImage={(image) => setImage(image)}
      />
      <Notification />
    </>
  );
}

export default Admin;
