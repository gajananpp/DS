import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';

const Page = ({ title, link, meta, style, noscript, children }) => {
  return (
    <div>
      <Helmet title={title} link={link} meta={meta} style={style} noscript={noscript} />
      { children }
    </div>
  );
};

Page.propTypes = {
  title: PropTypes.string,
  link: PropTypes.array,
  meta: PropTypes.array
};

export default Page;
