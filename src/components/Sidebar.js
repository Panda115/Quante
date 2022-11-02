import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <Nav variant="pills" className="settings-nav">
          <Nav.Item>
            <Nav.Link as={Link} to="/profile">
              <span>Profile</span>
              <i class="mdi mdi-account"></i>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/settings">
              <span>Settings</span>
              <i class="mdi mdi-settings"></i>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/authentication">
              <span>Authentication</span>
              <i class="mdi mdi-lock"></i>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/referral">
              <span>Referral</span>
              <i class="mdi mdi-diamond"></i>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/verification">
              <span>Verification</span>
              <i class="mdi mdi-verified"></i>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/api">
              <span>API</span>
              <i class="mdi mdi-database"></i>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </>
  )
}
