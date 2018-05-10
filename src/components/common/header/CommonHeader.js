import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Affix, Button, Row, Col, Menu, Icon } from 'antd';
import { connect } from 'react-redux';
import SideMenu from 'components/common/sideMenu';
import './CommonHeader.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class CommonHeader extends React.Component {
  state = {
    toggleMenuButton: true,
    current: 'home'
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key
    });
  };

  toggleMenu = () => {
    let { dispatch } = this.props;
    dispatch({ type: 'TOGGLE_SIDE_MENU' });
    this.setState({
      toggleMenuButton: !this.state.toggleMenuButton
    });
  };

  render() {
    let { dispatch, sideMenuToggle } = this.props;
    return (
      <Affix offsetTop={0}>
        <Row>
          <header className="ap__navbar">
            <Col span={8} offset={0} className="ap__navbar__logo">
              <a href="/">
                <img src="" width="auto" height="67" alt="Antop Gems" />
              </a>
            </Col>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
              offset={0}
              className="ap__navbar__nav"
            >
              <Menu.Item key="home">Home</Menu.Item>
              <Menu.Item key="diamond">Diamond Beads</Menu.Item>
              <SubMenu
                title={
                  <span>
                    <Icon type="setting" />Jewellery
                  </span>
                }
              >
                <MenuItemGroup title="Gold">
                  <Menu.Item key="setting:1">Rings</Menu.Item>
                  <Menu.Item key="setting:2">Option 2</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup title="Silver">
                  <Menu.Item key="setting:3">Option 3</Menu.Item>
                  <Menu.Item key="setting:4">Option 4</Menu.Item>
                </MenuItemGroup>
              </SubMenu>
            </Menu>
          </header>
        </Row>
      </Affix>
    );
  }
}

export default connect(
  state => ({ sideMenuToggle: state.sideMenuToggle }) // mapStateToProps
)(CommonHeader);
