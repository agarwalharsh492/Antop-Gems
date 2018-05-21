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

const imgPath = 'https://s3.ap-south-1.amazonaws.com/antopgems.com/home/+';

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
    let Products = Array.apply(null, Array(10));
    Products.map((key, val) => {
      Products[val] = val + 1;
    });
    return (
      <main>
        <Affix offsetTop={0}>
          <Row>
            <header className="ap__navbar">
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
              <Col md={8} xs={24} className="category">
                <Card
                  hoverable
                  className="productDiamondBeads category-card"
                  onClick={() => this.updateCurrentCateogry('Diamond Beads')}
                />
              </Col>
              <Col md={8} xs={24} className="category">
                <Card
                  hoverable
                  className="productRings category-card"
                  onClick={() => this.updateCurrentCateogry('Gold Rings')}
                />
              </Col>
              <Col md={8} xs={24} className="category">
                <Card
                  hoverable
                  className="productBracelets category-card"
                  onClick={() => this.updateCurrentCateogry('Bracelets')}
                />
              </Col>
              <Col md={16} xs={24} className="category">
                <Card
                  hoverable
                  className="productEmeralds category-card"
                  onClick={() => this.updateCurrentCateogry('Emeralds')}
                />
              </Col>
              <Col md={8} xs={24} className="category">
                <Card
                  hoverable
                  className="productEarrings category-card"
                  onClick={() => this.updateCurrentCateogry('Earrings')}
                />
              </Col>
            </Row>

            <Divider />
            <Row>
               {Products.map((key, val) => (
                  <Col className="product_container product_container--home gutter-row" md={6} xs={24}>
                    <Card
                      hoverable
                      id={`productEmerald${key}`}
                      className="product"
                      onMouseEnter={() => this.mouseEnter(key)}
                      onMouseLeave={() => this.mouseLeave(key)}
                    >
                      <img src={`${imgPath}${key}.png`} className="product_img" />
                      <div
                        onMouseEnter={() => this.mouseEnter(key)}
                        onMouseLeave={() => this.mouseLeave(key)}
                        id={key}
                        className="product_hover"
                      >
                        <div className="product_contact">
                          <Button type="primary">Contact Us</Button>
                        </div>
                      </div>
                    </Card>
                  </Col>
                ))}
            </Row>
            <Row>
              <div className="section__header">
                About Us
              </div>
              <div>
                ANTOP GEMS is a family-owned business. It all started when MR.ram kishan Agarwal (my father) who has been working with precious gems specially Zambian emeralds for over 35 years. Started his company BINDAL GEMS and he established a successful business and was later joined by me (ANKIT AGARWAL) who from a very young age worked with his father and now opened his new firm ANTOP GEMS. 

 ANTOP GEMS  has been offering a full range of diamond beads, loose emeralds, rubies, semi precious stones and sapphires as well as gold and silver designer settings and custom designed pieces in the best price.

Please feel free to ask us for any requirement in precious or semi precious stones and jewellery, Our factory is conveniently located in Jaipur (India). Customers trust is all we need. 

Please have a look into our website: antopgems.com

Our mission is to provide the finest quality bespoke jewelry and single and matched-pair loose stones at wholesale prices

Located in the heart of JAIPUR, ANTOP GEMS is the online extension of our 25+ year old wholesale gemstones business

All of our gems are 100% natural - we do not carry lab-created or synthetic gemstones - and most stones are certified by distinguished, independent gemstone laboratories.

We specialize in rings, pendants, earrings, and bracelets featuring sapphires, rubies, emeralds, alexandrites, tsavorites, and fine diamonds.
              </div>
            </Row>
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
