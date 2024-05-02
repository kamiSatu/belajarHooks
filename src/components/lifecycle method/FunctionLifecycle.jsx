import React, { useState, useEffect } from "react";

const FunctionLifecycle = () => {
  const [followers, setFollowers] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      setFollowers((prevfollowers) => prevfollowers + 100);
      console.log("updating followers");
    }, 5000);
    return () => {
      clearTimeout(interval);
      console.log("clean up");
    };
  }, [followers]);

  return (
    <>
      <div className="profile-container">
        <div className="profile-icon"></div>
        <h1>abdee</h1>
        <p>{followers} Followers</p>
      </div>
    </>
  );
};

export default FunctionLifecycle;
