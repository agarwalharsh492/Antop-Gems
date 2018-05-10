import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Divider, Breadcrumb } from 'antd';

import './CommonFooter.css';

const CommonFooter = () => {
  return (
    <div className="common-footer-container">
      //{' '}
      <Breadcrumb separator="|" className="footer-breadcrumb">
        //{' '}
        <Breadcrumb.Item>
          // <Link to="/about">About Us</Link>
          //{' '}
        </Breadcrumb.Item>
        //{' '}
        <Breadcrumb.Item>
          // <Link to="/about">Contact Us</Link>
          //{' '}
        </Breadcrumb.Item>
        //{' '}
        <Breadcrumb.Item>
          // <Link to="/about">Careers</Link>
          //{' '}
        </Breadcrumb.Item>
        //{' '}
        <Breadcrumb.Item>
          // <Link to="/about">Terms of Use</Link>
          //{' '}
        </Breadcrumb.Item>
        //{' '}
        <Breadcrumb.Item>
          // <Link to="/about">Privacy Policy</Link>
          //{' '}
        </Breadcrumb.Item>
        //{' '}
        <Breadcrumb.Item href="https://vantage.roofandfloor.com/">
          // Vantage Partner //{' '}
        </Breadcrumb.Item>
        //{' '}
        <Breadcrumb.Item>
          // <Link to="/about">Download App</Link>
          //{' '}
        </Breadcrumb.Item>
        //{' '}
        <Breadcrumb.Item>
          // <Link to="/about">Sitemap</Link>
          //{' '}
        </Breadcrumb.Item>
        //{' '}
      </Breadcrumb>
      // <br />
      //{' '}
      <Breadcrumb separator="|" className="footer-breadcrumb">
        //{' '}
        <Breadcrumb.Item>
          // <Link to="/about">The Hindu</Link>
          //{' '}
        </Breadcrumb.Item>
        //{' '}
        <Breadcrumb.Item>
          // <Link to="/about">தி இந்து</Link>
          //{' '}
        </Breadcrumb.Item>
        //{' '}
        <Breadcrumb.Item>
          // <Link to="/about">Business Line</Link>
          //{' '}
        </Breadcrumb.Item>
        //{' '}
        <Breadcrumb.Item>
          // <Link to="/about">BL on Campus</Link>
          //{' '}
        </Breadcrumb.Item>
        //{' '}
        <Breadcrumb.Item>
          // <Link to="/about">SportstarLive</Link>
          //{' '}
        </Breadcrumb.Item>
        //{' '}
        <Breadcrumb.Item>
          // <Link to="/about">Frontline</Link>
          //{' '}
        </Breadcrumb.Item>
        //{' '}
        <Breadcrumb.Item>
          // <Link to="/about">The Hindu Centre</Link>
          //{' '}
        </Breadcrumb.Item>
        //{' '}
        <Breadcrumb.Item>
          // <Link to="/about">Publications</Link>
          //{' '}
        </Breadcrumb.Item>
        //{' '}
        <Breadcrumb.Item>
          // <Link to="/about">eBooks</Link>
          //{' '}
        </Breadcrumb.Item>
        //{' '}
        <Breadcrumb.Item>
          // <Link to="/about">Images</Link>
          //{' '}
        </Breadcrumb.Item>
        //{' '}
        <Breadcrumb.Item>
          // <Link to="/about">Classifieds</Link>
          //{' '}
        </Breadcrumb.Item>
        //{' '}
      </Breadcrumb>
      // <br />
      // <br />
      //{' '}
      <p className="disclaimer">
        // ** Disclaimer: This project related information on RoofandFloor has
        been // provided directly by the builder or have been collected from
        publicly // available sources, and has not been verified by RoofandFloor
        // independently. The information sources which we use include marketing
        // collateral of the project sent by the builder and other secondary //
        information sources available on the internet. At RoofandFloor, we //
        aggregate information points of different projects available for sale,
        // from different publicly available sources, such that the home buyer
        can // search and explore the available projects in one place and decide
        on the // next steps. This is a free service we extend to our home
        buyers. This // project’s information points have not been verified by
        us against // authentic documents and are only indicative of the actual
        situation of // this property, project or land holding, and their
        ownership. // RoofandFloor.com shall neither be responsible nor liable
        for any // inaccuracy in the information provided here and therefore the
        customers // are requested to independently validate the information
        from the // respective developers before making their decisions related
        to // properties displayed here. RoofandFloor.com, its directors,
        employees, // agents and other representatives shall not be liable for
        any action // taken, cost / expenses / losses incurred, by you, based on
        the // information given on the portal. //{' '}
      </p>
      //{' '}
      <p className="disclaimer">
        // The display of information on roofandfloor.com with respect to any a
        // developer or Project does not guarantee that the developer / Project
        has // registered under the The Real Estate (Regulation And Development)
        Act, // 2016 or is compliant with the same and there is a possibility
        that the // authorities may deny the registration or revoke the
        registration if the // same has been granted or take any other action
        for non-compliance. //{' '}
      </p>
    </div>
  );
};

export default CommonFooter;
