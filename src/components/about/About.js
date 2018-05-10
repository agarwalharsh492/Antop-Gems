import React from 'react';
import { connect } from 'react-redux';

import CommonFooter from 'components/common/footer';
import { Layout, Button, Row } from 'antd';

const { Content } = Layout;

class About extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Content className="container">About</Content>
          <CommonFooter />
        </Layout>
      </div>
    );
  }
}

export default connect(state => ({}), dispatch => ({ dispatch }))(About);
