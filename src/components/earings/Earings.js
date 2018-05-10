import React from 'react';
import { connect } from 'react-redux';

import CommonFooter from 'components/common/footer';
import { Layout, Button, Row, Col, Card } from 'antd';

import './Earings.css';

const { Content } = Layout;

class Earings extends React.Component {
  mouseEnter = key => {
    document.getElementById(key).classList += ' show-desc';
  };
  mouseLeave = key => {
    document.getElementById(key).classList.remove('show-desc');
  };
  render() {
    let Products = Array.apply(null, Array(29));
    Products.map((key, val) => {
      Products[val] = val + 1;
    });
    return (
      <Row>
        {Products && (
          <Row gutter={16} span={6}>
            {Products.map((key, val) => (
              <Col className="product_container gutter-row" md={6} xs={24}>
                <Card
                  hoverable
                  id={`product${key}`}
                  className="product"
                  onMouseEnter={() => this.mouseEnter(key)}
                  onMouseLeave={() => this.mouseLeave(key)}
                >
                  <div
                    onMouseEnter={() => this.mouseEnter(key)}
                    onMouseLeave={() => this.mouseLeave(key)}
                    id={key}
                    className="product_img"
                  >
                    <div className="product_contact">
                      <Button type="primary">Contact Us</Button>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Row>
    );
  }
}

export default connect(state => ({}), dispatch => ({ dispatch }))(Earings);
