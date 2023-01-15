import React, { useState } from "react";


export const WithErrorApi = (View) => {
  const [errorApi, setErrorApi] = useState(null);

  return (props) => {
    return (
      <>
        {errorApi ? (
          <h2>Error</h2>
        ) : (
          <View setErrorApi={setErrorApi} {...props} />
        )}
      </>
    );
  };
};
