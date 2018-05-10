import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Card, List, Row, Col, Button, Carousel } from 'antd';
import Resimage from '../../../common/image';

import './ListingCard.css';

const ListingCard = ({ data }) => {
  let listingData = data.slice(0, 4);
  return (
    <div>
      <List
        grid={{
          gutter: 24,
          xs: 1,
          lg: 4
        }}
        dataSource={listingData}
        renderItem={item => (
          <List.Item>
            <Card
              hoverable
              cover={
                <Resimage
                  data={item.propertyImageReference}
                  size="ms"
                  height="230"
                  overlay="true"
                />
              }
            >
              <span className="listing-name">
                <span className="listing-header">{item.listingName}</span>
                <br />
                {item.locality}
              </span>
              <Row type="flex" justify="space-between">
                <Col span={10}>
                  <div>
                    {parseInt(item.minBHK)} - {parseInt(item.maxBHK)} BHK
                  </div>
                  <div>&#8377; {item.minFinalPrice} +</div>
                </Col>
                <Col span={14}>
                  <Button className="contact-builder-btn">
                    Contact Builder Now
                  </Button>
                </Col>
              </Row>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default ListingCard;
