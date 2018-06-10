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
import Semiprecious from '../semiprecious/Semiprecious';

const { Content } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const imgPath = 'https://s3.ap-south-1.amazonaws.com/antopgems.com/home/+';

class Home extends React.Component {
  state = {
    toggleMenuButton: true,
    current: 'Our Collections'
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
    window.location.href = '#category';
  };
  mouseEnter = key => {
    document.getElementById(key).classList += ' show-desc';
  };

  handleClick = e => {
    this.setState({
      current: e.key
    });
    console.log(this.state.current);
    window.location.href = '#category';
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
                <Menu.Item key="Our Collections">Home</Menu.Item>
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
                <Menu.Item key="Semi precious">Semi Precious</Menu.Item>
              </Menu>
            </header>
          </Row>
        </Affix>
        <Row>
          <Col md={24} xs={24}>
            <div className="ap__bg" />
            <span id="category">Browse Our Collections</span>
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
            {this.state.current === 'Semi precious' && <Semiprecious />}
            <Divider />

            <Row>
              <Col md={8} xs={24} className="category">
                <Card
                  hoverable
                  className="productDiamondBeads category-card"
                  onClick={() => this.updateCurrentCateogry('Diamond Beads')}
                >
                  <span>Diamond Beads</span>
                </Card>
              </Col>
              <Col md={8} xs={24} className="category">
                <Card
                  hoverable
                  className="productRings category-card"
                  onClick={() => this.updateCurrentCateogry('Gold Rings')}
                >
                  <span>Rings</span>
                </Card>
              </Col>
              <Col md={8} xs={24} className="category">
                <Card
                  hoverable
                  className="productBracelets category-card"
                  onClick={() => this.updateCurrentCateogry('Bracelets')}
                >
                  <span>Bracelets</span>
                </Card>
              </Col>
              <Col md={16} xs={24} className="category">
                <Card
                  hoverable
                  className="productEmeralds category-card"
                  onClick={() => this.updateCurrentCateogry('Emeralds')}
                >
                  <span>Emeralds</span>
                </Card>
              </Col>
              <Col md={8} xs={24} className="category">
                <Card
                  hoverable
                  className="productEarrings category-card"
                  onClick={() => this.updateCurrentCateogry('Earrings')}
                >
                  <span>Earrings</span>
                </Card>
              </Col>
            </Row>

            <Divider />

            <Row>
              <div className="section__header">About Us</div>
              <div className="about">
                <div className="about_daddy about_person" />
                <div className="about_ankit about_person" />
              </div>
              <div className="about_company">
                <p>
                  ANTOP GEMS is a family-owned business. It started when Mr. Ram
                  Kishan Agarwal who has been working with precious gems
                  specially Zambian emeralds for over 35 years, started his
                  company BINDAL GEMS and established a successful business and
                  was later joined by Ankit Agarwal who from a very young age
                  worked with his father and now opened his new firm ANTOP GEMS.
                </p>
                <p>
                  We are offering a full range of diamond beads, loose emeralds,
                  rubies, semi precious stones and sapphires as well as gold and
                  silver designer settings and custom designed pieces in the
                  best price. Please feel free to ask us for any requirement in
                  precious or semi precious stones and jewellery. Customers
                  trust is all we need. Our mission is to provide the finest
                  quality bespoke jewelry and single and matched-pair loose
                  stones at wholesale prices.{' '}
                </p>
                <p>
                  Located in the heart of Jaipur(India), ANTOP GEMS is the
                  online extension of our 25+ year old wholesale gemstones
                  business. All our gems are 100% natural - we do not carry
                  lab-created or synthetic gemstones - and most stones are
                  certified by distinguished, independent gemstone laboratories.
                  We specialize in rings, pendants, earrings, and bracelets
                  featuring sapphires, rubies, emeralds, alexandrites,
                  tsavorites, and fine diamonds.
                </p>
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
        <Row className="footer">
          <div>
            ** Terms and conditions - International Shipping - Orders are
            dispatched in 5 to 10 working days. International deliveries will be
            made by DHL or DPDS and a tracking code will be provided in the
            confirmation email once the order has been processed. The following
            will attract additional charges: Delivery to a remote location.
            Note: International shipments sometimes may attract additional
            duties and taxes that may be levied on an order once it has reached
            the destination state or country. In all cases, the customer is
            liable to clear any such additional charges with the courier company
            in order to release the goods. Unfortunately, we are unable to state
            the exact amount of such charges at the time an order is placed
            since charges vary widely between states and countries. For all
            other queries, please e-mail us at ANTOPGEMS@GMAIL.COM and we will
            be happy to help.
          </div>
        </Row>
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
