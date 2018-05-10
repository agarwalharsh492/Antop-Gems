import React from 'react';
import { Input, Select, InputNumber, Button, Row, Col } from 'antd';

import './AppDownloadBanner.css';

const InputGroup = Input.Group;
const Option = Select.Option;

const AppDownloadBanner = () => {
  return (
    <div className="download-banner">
      <Row type="flex" justify="space-between">
        <Col span={12}>
          <img src="https://assets0.roofandfloor.com/stat/mobile-67aaaaf66f81b0c6cef78fc59c93327e.png" />
        </Col>
        <Col span={12}>
          <p className="app-link-header">
            Do you constantly receive calls for properties that are not even
            relevant to you?
          </p>
          <p>Get personalized recommendations - on the go!</p>
          <p>Download our Android app now!</p>
          <InputGroup compact>
            <Select defaultValue="+91">
              <Option value="+91">+91</Option>
              <Option value="+1">+1</Option>
            </Select>
            <Input
              style={{ width: '50%' }}
              placeholder="Enter your mobile number"
            />
            <Button className="send-link-btn">Send me link</Button>
          </InputGroup>
        </Col>
      </Row>
    </div>
  );
};

export default AppDownloadBanner;
