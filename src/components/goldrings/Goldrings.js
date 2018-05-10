import React from 'react';
import { connect } from 'react-redux';

import CommonFooter from 'components/common/footer';
import { Layout, Button, Row, Col, Card } from 'antd';

import './Goldrings.css';

const { Content } = Layout;
const data = require('./data.json');
const zoom = require('../../images/zoom.svg');

class Goldrings extends React.Component {
  state = {
    openFullProduct: false,
    currentProduct: {}
  };
  mouseEnter = key => {
    document.getElementById(key).classList += ' show-desc';
  };
  mouseLeave = key => {
    document.getElementById(key).classList.remove('show-desc');
  };
  showModal = Product => {
    if (Product) {
      this.setState({ currentProduct: Product });
      if (document.getElementsByClassName('modal-img')['0']) {
        document
          .getElementsByClassName('overlayProduct')
          ['0'].classList.remove('hidden');
        document
          .getElementsByClassName('modal-img')
          ['0'].setAttribute('id', `productGoldRing${Product.id}`);
      }
    } else {
      this.setState({ currentProduct: '' });
      if (document.getElementsByClassName('modal-img')['0']) {
        document.getElementsByClassName('overlayProduct')['0'].classList +=
          ' hidden';
        document
          .getElementsByClassName('modal-img')
          ['0'].removeAttribute('id', '');
      }
    }
  };
  closeProductModal = () => {
    this.setState({ openFullProduct: false }, this.showModal());
  };
  openFullProduct = Product => {
    this.setState({ openFullProduct: true }, this.showModal(Product));
  };
  render() {
    let Products = data['products'];
    return (
      <Row>
        {Products && (
          <Row gutter={10}>
            {Products.map((key, val) => (
              <Col className="product_container gutter-row" md={6} xs={24}>
                <Card
                  onClick={() => this.openFullProduct(key)}
                  hoverable
                  id={`productGoldRing${key.id}`}
                  className="product"
                  onMouseEnter={() => this.mouseEnter(val)}
                  onMouseLeave={() => this.mouseLeave(val)}
                >
                  <div
                    onMouseEnter={() => this.mouseEnter(val)}
                    onMouseLeave={() => this.mouseLeave(val)}
                    id={val}
                    className="product_img"
                  >
                    <div className="product_contact">
                      <Button type="primary">Contact Us</Button>
                      <span onClick={() => this.openFullProduct(key)}>
                        <img src={zoom} className="zoomer" />Click me
                      </span>
                    </div>
                  </div>
                </Card>
                <div className="product_description">
                  <div>{key.name}</div>
                </div>
              </Col>
            ))}
          </Row>
        )}
        <div
          className="overlayProduct hidden"
          onClick={() => this.closeProductModal()}
        >
          <div className="modal-img" />
          <Card>{this.state.currentProduct.name}</Card>
        </div>
      </Row>
    );
  }
}

export default connect(state => ({}), dispatch => ({ dispatch }))(Goldrings);
