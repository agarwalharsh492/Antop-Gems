import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Card, List } from 'antd';
import Resimage from '../../../common/image';

import './CollectionCard.css';

const CollectionCard = ({ data }) => {
  let collectionData = data.slice(0, 4);
  return (
    <div>
      <List
        grid={{
          gutter: 24,
          xs: 1,
          lg: 4
        }}
        dataSource={collectionData}
        renderItem={item => (
          <List.Item>
            <Card
              hoverable
              cover={
                <Resimage
                  data={item.imageUrl}
                  size="ms"
                  height="180"
                  overlay="true"
                />
              }
            >
              <span className="collection-name">
                {item.name}
                <br />
                {item.total} PROJECTS
              </span>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default CollectionCard;
