import React from 'react';
import { Navigation } from 'react-router';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { history } from '../../../store';
import {
  Card,
  List,
  Layout,
  Input,
  Button,
  Row,
  Col,
  Menu,
  Icon,
  Dropdown,
  Select
} from 'antd';
import SideMenu from 'components/common/sideMenu';

import './Search.css';

const { Content } = Layout;
const SearchBar = Input.Search;
const InputGroup = Input.Group;
const Option = Select.Option;

const menu = (
  <Menu>
    <Menu.Item key="1">Bengaluru</Menu.Item>
    <Menu.Item key="2">Delhi</Menu.Item>
    <Menu.Item key="3">Mumbai</Menu.Item>
  </Menu>
);

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      budget: ''
    };
    this.navigate = this.navigate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  navigate(e) {
    history.push({ pathname: '/srp', state: { detail: this.state.budget } });
  }
  handleChange(value) {
    this.setState({ budget: value });
  }
  render() {
    let { dispatch, sideMenuToggle } = this.props;
    console.log(this.state.budget);
    return (
      <div>
        <Layout className="search-container">
          <div>
            <Row gutter={24}>
              <Col className="gutter-row" span={6}>
                <Link to="/">
                  <img
                    className="header-image"
                    src="https://assets0.roofandfloor.com/images/logo_white-2426df7b40719388e92e19f0cf250396.svg"
                    alt="RoofandFloor"
                  />
                </Link>
              </Col>
              <Col className="gutter-row" span={6}>
                {/* <Link to="/">
                  <img
                    src="https://assets0.roofandfloor.com/images/hindu_transparent-019ac0b84af19a563f590df6d97fb556.png"
                    alt="RoofandFloor"
                    height="40"
                  />
                </Link> */}
              </Col>
              <Col className="gutter-row" span={6}>
                {/* <Dropdown overlay={menu}>
                  <Button className="city-filter">
                    Chennai <Icon type="down" />
                  </Button>
                </Dropdown> */}
              </Col>
              <Col className="gutter-row" span={6}>
                {/*<img
                  onClick={this.toggleMenu}
                  src={
                    this.state.toggleMenuButton
                      ? require("components/common/header/ic_menu_white_36px.svg")
                      : require("components/common/header/ic_close_white_36px.svg")
                  }
                />*/}
                <span>
                  <i
                    onClick={() => dispatch({ type: 'TOGGLE_SIDE_MENU' })}
                    class="material-icons menu-icon"
                  >
                    menu
                  </i>
                </span>
              </Col>
            </Row>
          </div>
          <Content className="search-block">
            <h1>Simplify your home buying journey</h1>
            <Row type="flex" justify="space-around" align="middle">
              <InputGroup compact>
                <Input
                  style={{ width: '70%' }}
                  size="large"
                  placeholder="Search by city, locality, builder, project or landmark"
                />
                <Select
                  defaultValue="Budget"
                  size="large"
                  onChange={this.handleChange}
                >
                  <Option value="priceMin">Min</Option>
                  <Option value="priceMax">Max</Option>
                </Select>
                <Button
                  className="search-btn"
                  size="large"
                  onClick={this.navigate}
                >
                  Search
                </Button>
              </InputGroup>
            </Row>
            <div className={sideMenuToggle ? 'side-menu' : ' '}>
              <SideMenu dispatch={dispatch} />
            </div>

            {/* <Row type="flex" justify="center" className="highlight-card">
              <Col span={8}>
                <h2>Only New Properties</h2>
                <p>
                  Discover brand new properties sourced directly from builders
                </p>
                <Link to="/srp">Explore Properties →</Link>
              </Col>
              <Col span={8}>
                <h2>Home Buying Advisory</h2>
                <p>
                  Complete home buying assistance - from price negotiation to
                  legal verification
                </p>
                <Link to="/srp">Explore Services →</Link>
              </Col>
            </Row> */}
          </Content>
        </Layout>
      </div>
    );
  }
}

export default connect(
  state => ({
    sideMenuToggle: state.sideMenuToggle
  }),
  dispatch => ({ dispatch })
)(Search);
