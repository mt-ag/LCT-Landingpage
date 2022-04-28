import PropTypes from 'prop-types';
import React from 'react';
import useRocm from 'react-readonly-codemirror6';

const Codemirror = ({ children, className }) => {
  const language = className.replace(/language-/, '');

  const codeRef = useRocm({
    code: children,
    lang: language,
    fontSize: 14,
  });

  return <div className="my-8" ref={codeRef} />;
};

Codemirror.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Codemirror;
