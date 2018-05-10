import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Card, List, Button } from 'antd';
import Resimage from '../../../common/image';

import './BuilderCard.css';

const BuilderCard = ({ data }) => {
  let builderData = data.slice(0, 4);
  console.log(builderData);
  return (
    <div>
      <List
        grid={{
          gutter: 24,
          xs: 1,
          lg: 4
        }}
        dataSource={builderData}
        renderItem={item => (
          <List.Item>
            <Link to="/builder">
              <Card
                hoverable
                cover={
                  <Resimage
                    data={item.listingImageReference}
                    size="ms"
                    height="180"
                    overlay="false"
                  />
                }
              >
                <div className="builder-name">
                  <img
                    alt="example"
                    height="100"
                    width="160"
                    src={item.builderLogo}
                  />
                </div>
                {item.builderName}
                <p>{item.noOfActiveListings} live projects</p>
              </Card>
            </Link>
          </List.Item>
        )}
      />
    </div>
  );
};

export default BuilderCard;
