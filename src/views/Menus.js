import React, { useState, useEffect } from "react";
import { Card, Container, Table, Form } from "react-bootstrap";

function Menus() {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetchMenus();
  }, []);

  const fetchMenus = async () => {
    try {
      const response = await fetch("http://localhost:5000/all-menus", {
        credentials: "include"
      });
      if (response.ok) {
        const menuData = await response.json();
        setMenus(menuData);
      }
    } catch (error) {
      console.error("Error fetching menus:", error);
    }
  };

  const toggleMenu = async (menuId) => {
    try {
      const response = await fetch(`http://localhost:5000/toggle-menu/${menuId}`, {
        method: "PUT",
        credentials: "include"
      });
      if (response.ok) {
        fetchMenus();
        // Notify sidebar to refresh
        window.dispatchEvent(new CustomEvent('menuUpdated'));
      }
    } catch (error) {
      console.error("Error toggling menu:", error);
    }
  };

  return (
    <Container fluid>
      <Card>
        <Card.Header>
          <Card.Title as="h4">Menu Management</Card.Title>
          <p className="card-category">Manage application menus</p>
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Path</th>
                <th>Icon</th>
                <th>Layout</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {menus.map((menu) => (
                <tr key={menu._id}>
                  <td>{menu.name}</td>
                  <td>{menu.path}</td>
                  <td><i className={menu.icon}></i> {menu.icon}</td>
                  <td>{menu.layout}</td>
                  <td>
                    <span className={`badge ${menu.enabled ? 'bg-success' : 'bg-danger'}`}>
                      {menu.enabled ? 'Enabled' : 'Disabled'}
                    </span>
                  </td>
                  <td>
                    <Form.Check 
                      type="switch"
                      id={`switch-${menu._id}`}
                      checked={menu.enabled}
                      onChange={() => toggleMenu(menu._id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Menus;