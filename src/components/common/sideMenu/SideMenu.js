import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Divider, Breadcrumb, Menu, Icon, Button } from 'antd';
import './sideMenu.css';

const SubMenu = Menu.SubMenu;

const SideMenu = ({ dispatch }) => {
  return (
    <div className="sidebar">
      <nav>
        <ul className="sidebar-menu">
          <li className="sidebar-item">
            <Button size="large" className="consult-expert-btn">
              Consult Experts
            </Button>
            <i
              className="material-icons"
              onClick={() => dispatch({ type: 'TOGGLE_SIDE_MENU' })}
            >
              close
            </i>
          </li>
          <li className="sidemenu-padding">
            <Link to="/about" className="call-us">
              <i className="material-icons">call</i> 1800-300-26115
            </Link>
          </li>
          <li>
            <Divider />
          </li>
          <li>
            <Menu mode="inline">
              <SubMenu key="sub1" title={<span>Apartments / Flats</span>}>
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span>Villas / Houses</span>}>
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="7">Option 7</Menu.Item>
                  <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
              </SubMenu>
              <SubMenu key="sub4" title={<span>Plots / Lands</span>}>
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </Menu>
          </li>
          <li>
            <Menu mode="inline">
              <SubMenu key="sub1" title={<span>Budget Search</span>}>
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span>Top Projects</span>}>
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="7">Option 7</Menu.Item>
                  <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
              </SubMenu>
              <SubMenu key="sub4" title={<span>Top Builders</span>}>
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </Menu>
          </li>
          <li className="sidemenu-padding">
            <Divider />
          </li>
          <li className="sidemenu-padding">
            <img
              src={require('components/common/sideMenu/download_android_app.png')}
            />
          </li>
          <li>
            <Divider />
          </li>
          <li className="sidemenu-padding">
            <Breadcrumb separator="|" className="">
              <Breadcrumb.Item>
                <Link to="/about">About</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="/about">Contact</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="/about">Blog</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="/about">Careers</Link>
              </Breadcrumb.Item>
            </Breadcrumb>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideMenu;
