import React from 'react';
import { connect } from 'react-redux';
import CommonHeader from '../common/header';

// import Search from './search';
// import HomeFooter from './footer';
// import ListingCard from './cards/listing';
// import BuilderCard from './cards/builder';
// import CollectionCard from './cards/collection';

// import CommonFooter from 'components/common/footer';
// import AppDownloadBanner from 'components/common/appDownloadBanner';

import {
  Layout,
  Button,
  Row,
  Col,
  Card,
  Carousel,
  Divider,
  Affix,
  Menu,
  Icon
} from 'antd';
// import { bannerManager } from 'actions';
import './Home.css';
import siteLogo from './logo.png';

import Diamonds from '../diamonds/Diamonds';
import Emeralds from '../emeralds/Emeralds';
import Goldrings from '../goldrings/Goldrings';
import Bracelets from '../bracelets/Bracelets';
import Silverings from '../silverings/Silverings';
import Earings from '../earings/Earings';

const { Content } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Home extends React.Component {
  state = {
    toggleMenuButton: true,
    current: 'home'
  };
  componentDidMount() {
    // let { dispatch } = this.props;
    // dispatch(bannerManager.getBannerData('Bangalore', 20, 0));
    document.getElementsByClassName('lazy-load');
  }
  addImgBackground = imgId => {
    const imgStyle = {
      backgroundImage: `url(image${imgId})`
    };
    return imgStyle;
  };
  updateCurrentCateogry = cat => {
    this.setState({ current: cat });
  };
  mouseEnter = key => {
    document.getElementById(key).classList += ' show-desc';
  };

  handleClick = e => {
    this.setState({
      current: e.key
    });
    console.log(this.state.current);
  };
  mouseLeave = key => {
    document.getElementById(key).classList.remove('show-desc');
  };
  render() {
    // let { bannerData } = this.props;
    return (
      <main>
        <Affix offsetTop={0}>
          <Row>
            <header className="ap__navbar">
              <Col span={8} />
              <Col span={8} offset={0}>
                <div className="ap__navbar__logo">
                  <a href="/">
                    <img
                      src={siteLogo}
                      width="auto"
                      height="67"
                      alt="Antop Gems"
                    />
                  </a>
                </div>
              </Col>
              <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
                offset={0}
                className="ap__navbar__nav"
              >
                <Menu.Item key="home">Home</Menu.Item>
                <Menu.Item key="Diamond Beads">Diamond Beads</Menu.Item>
                <SubMenu title={<span>Jewellery</span>}>
                  <MenuItemGroup title="Gold">
                    <Menu.Item key="Gold Rings">Rings</Menu.Item>
                  </MenuItemGroup>
                  <MenuItemGroup title="Silver">
                    <Menu.Item key="Silver Rings">Rings</Menu.Item>
                    <Menu.Item key="Bracelets">Bracelets</Menu.Item>
                    <Menu.Item key="Earrings">Earrings</Menu.Item>
                  </MenuItemGroup>
                </SubMenu>
                <Menu.Item key="Emeralds">Emeralds</Menu.Item>
              </Menu>
            </header>
          </Row>
        </Affix>
        <Row>
          <Col md={24} xs={24}>
            <div className="ap__bg" />
          </Col>
        </Row>
        <div className="container">
          <Row>
            <Row className="section__header">
              <Col>
                <span>{this.state.current}</span>
              </Col>
            </Row>
            {this.state.current === 'Diamond Beads' && <Diamonds />}
            {this.state.current === 'Earrings' && <Earings />}
            {this.state.current === 'Emeralds' && <Emeralds />}
            {this.state.current === 'Bracelets' && <Bracelets />}
            {this.state.current === 'Silver Rings' && <Silverings />}
            {this.state.current === 'Gold Rings' && <Goldrings />}
            <Divider />

            <Row>
              <Col md={8} xs={24}>
                <Card
                  hoverable
                  className="productDiamondBeads category-card"
                  onClick={() => this.updateCurrentCateogry('Diamond Beads')}
                />
              </Col>
              <Col md={8} xs={24}>
                <Card
                  hoverable
                  className="productRings category-card"
                  onClick={() => this.updateCurrentCateogry('Gold Rings')}
                />
              </Col>
              <Col md={8} xs={24}>
                <Card
                  hoverable
                  className="productBracelets category-card"
                  onClick={() => this.updateCurrentCateogry('Bracelets')}
                />
              </Col>
              <Col md={8} xs={24}>
                <Card
                  hoverable
                  className="productEmeralds category-card"
                  onClick={() => this.updateCurrentCateogry('Emeralds')}
                />
              </Col>
              <Col md={8} xs={24}>
                <Card
                  hoverable
                  className="productEarrings category-card"
                  onClick={() => this.updateCurrentCateogry('Earrings')}
                />
              </Col>
            </Row>

            <Divider />

            <Row>
              <Carousel effect="fade" autoplay>
                <Row gutter={10}>
                  <Col className="gutter-row" md={8} xs={24}>
                    <Card hoverable className="product1 gutter-box" />
                  </Col>
                  <Col className="gutter-row" md={8} xs={24}>
                    <Card hoverable className="product2 gutter-box" />
                  </Col>
                  <Col className="gutter-row" md={8} xs={24}>
                    <Card hoverable className="product3 gutter-box" />
                  </Col>
                </Row>
                <Row gutter={10}>
                  <Col className="gutter-row" md={8} xs={24}>
                    <Card hoverable className="product3 gutter-box" />
                  </Col>
                  <Col className="gutter-row" md={8} xs={24}>
                    <Card hoverable className="product1 gutter-box" />
                  </Col>
                  <Col className="gutter-row" md={8} xs={24}>
                    <Card hoverable className="product2 gutter-box" />
                  </Col>
                </Row>
              </Carousel>
            </Row>
          </Row>
        </div>
      </main>
    );
  }
}

export default connect(
  state => ({
    bannerData: state.bannerDetails
  }),
  dispatch => ({ dispatch })
)(Home);
