import React from 'react';
import { connect } from 'react-redux';

import CommonFooter from 'components/common/footer';
import { Layout, Button, Row, Col, Card } from 'antd';
import LazyLoad from 'react-lazy-load';


const { Content } = Layout;
const data = require('./data.json');
const zoom = require('../../images/zoom.svg');
const imgPath = 'https://s3.ap-south-1.amazonaws.com/antopgems.com/semiprecious/';

class Semiprecious extends React.Component {
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
          .getElementsByClassName('modal-img-tag')
          ['0'].src=`${imgPath}${Product.imgUrl}` ;
      }
    } else {
      this.setState({ currentProduct: '' });
      if (document.getElementsByClassName('modal-img')['0']) {
        document.getElementsByClassName('overlayProduct')['0'].classList +=
          ' hidden';
        document
          .getElementsByClassName('modal-img-tag')
          ['0'].removeAttribute('src', '');
      }
    }
  };
  triggerContact = (Product) => {
    window.location.href = `mailto:antopgems@gmail.com?subject=Purchase of ${Product.name} - Semiprecious (${Product.id})&body=message%20goes%20here`;
  }
  closeProductModal = () => {
    this.setState({ openFullProduct: false }, this.showModal());
  };
  openFullProduct = (e, Product) => {
    if (!e.target.classList.contains('contact')) {
      this.setState({ openFullProduct: true }, this.showModal(Product));
    }
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
                  onClick={(e) => this.openFullProduct(e, key)}
                  hoverable
                  id={`productGoldRing${key.id}`}
                  key={`val-${key.imgUrl}`} 
                  className="product"
                  onMouseEnter={() => this.mouseEnter(val)}
                  onMouseLeave={() => this.mouseLeave(val)}
                >
                <div className="product_content">
                <LazyLoad offsetTop={0}>
                  <img src={`${imgPath}${key.imgUrl}`} className="product_img" />
                </LazyLoad>
                </div>
                  <div
                    onMouseEnter={() => this.mouseEnter(val)}
                    onMouseLeave={() => this.mouseLeave(val)}
                    id={val}
                    className="product_hover"
                  >
                    <div className="product_contact">
                      <Button type="primary" onClick={() => this.triggerContact(key)} className="contact">Contact Us</Button>
                      <span onClick={(e) => this.openFullProduct(e, key)}>
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
          <div className="modal-img">
            <img className="modal-img-tag" />
          </div>
          <Card className="overlayProduct_spec">
            <div className="overlayProduct-info">
              <div>
                {this.state.currentProduct.name}
              </div>
                { this.state.currentProduct.description &&
                  <div>
                    {this.state.currentProduct.description}
                  </div>
                }
                { this.state.currentProduct.goldweight &&
                  <div>
                    Gold Weight - {this.state.currentProduct.goldweight} cts
                  </div>
                }
            </div>
            { this.state.currentProduct.stnInfo &&
              <div className="overlayProduct-info">
                {this.state.currentProduct.stnInfo['0'].stnName &&
                  <div><span>Stone -</span> {this.state.currentProduct.stnInfo['0'].stnName}</div> 
                }
                {this.state.currentProduct.stnInfo['0'].stnWeight &&
                  <div><span>Weight -</span> {this.state.currentProduct.stnInfo['0'].stnWeight} cts</div>
                }
                {this.state.currentProduct.stnInfo['0'].stnSize &&
                  <div><span>Size - </span>{this.state.currentProduct.stnInfo['0'].stnSize} </div>
                }
                {this.state.currentProduct.stnInfo['0'].stnShape &&
                  <div><span>Shape - </span>{this.state.currentProduct.stnInfo['0'].stnShape} </div>
                }
                {this.state.currentProduct.stnInfo['0'].diamondWeight &&
                  <div><span>Diamond Weight - </span>{this.state.currentProduct.stnInfo['0'].diamondWeight} cts </div>
                }
                {this.state.currentProduct.stnInfo['0'].totalWeight &&
                  <div><span>Total Weight - </span>{this.state.currentProduct.stnInfo['0'].totalWeight} cts </div>
                }
              </div>
            }
            <Button type="primary" onClick={() => this.triggerContact(this.state.currentProduct)} className="contact overlay_contact">Contact Us</Button>
          </Card>
        </div>
      </Row>
    );
  }
}

export default connect(state => ({}), dispatch => ({ dispatch }))(Semiprecious);
