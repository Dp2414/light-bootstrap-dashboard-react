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
import React, { Component, useEffect, useState } from "react";
import { useLocation, NavLink } from "react-router-dom";

import { Nav } from "react-bootstrap";

import logo from "assets/img/reactlogo.png";

function Sidebar({image,color }) {

  const [menus, setMenus] = useState([]); 
  const [authorized, setAuthorized] = useState(false);
  


  const fetchMenus = async () => {
    try {
      const menuResponse = await fetch("http://localhost:5000/menus", {
        credentials: "include"
      });
      const menuData = await menuResponse.json();
      setMenus(menuData);
    } catch (menuError) {
      console.error("Error fetching menus:", menuError);
    }
  };

  useEffect(() => {
    async function authenticateAndFetchMenus() {
      try {
        const response = await fetch("http://localhost:5000/verify", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          }
        });
        
        if (response.ok) {
          setAuthorized(true);
          console.log('User is authorized');
          fetchMenus();
        } else {
          setAuthorized(false);
          console.log('User is not authorized');
        }
      } catch (error) {
        console.error("Error verifying token:", error);
        setAuthorized(false);
      }
    }
    
    authenticateAndFetchMenus();
    
    // Listen for menu updates
    const handleMenuUpdate = () => {
      fetchMenus();
    };
    
    window.addEventListener('menuUpdated', handleMenuUpdate);
    
    return () => {
      window.removeEventListener('menuUpdated', handleMenuUpdate);
    };
  }, []);


  const location = useLocation();
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  return (
    <div className="sidebar" data-image={image} data-color={color}>
      <div
        className="sidebar-background"
        style={{
          backgroundImage: "url(" + image + ")"
        }}
      />
      <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center justify-content-center">
       
          <h5 className="simple-text text-center" >
  Dp
          </h5>
        </div>
        <Nav>
          {menus.map((prop, key) => {
            
            if (!prop.redirect)
              return (
                <li
                  className={
                    prop.upgrade
                      ? "active active-pro"
                      : activeRoute(prop.layout + prop.path)
                  }
                  key={key}
                >
                  <NavLink
                    to={prop.layout + prop.path}
                    className="nav-link"
                    activeClassName="active"
                  >
                    {/* <i className={prop.icon} /> */}
                    <i className={prop.icon} />
                    <p>{prop.name}</p>
                  </NavLink>
                </li>
              );
            return null;
          })}
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
