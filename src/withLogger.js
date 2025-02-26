import React, { useEffect } from "react";

const withLogger = (WrappedComponent) => {
  return function WithLoggerComponent(props) {
    useEffect(() => {
      console.log(`${WrappedComponent.name} Rendered`);
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withLogger;
