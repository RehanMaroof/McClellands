import React from "react";
import LoginCard from "../card/LoginCard";

const Login = () => {
  return (
    <div className="">
      <img
        src="/images/login/top-right.png"
        alt="right-img"
        className="absolute right-0 top-0"
      />
      <img
        src="/images/login/bottom-left.png"
        alt="left-img"
        className="absolute left-0 bottom-0"
      />
      <div className="absolute top-1/2 left-1/2 w-[80%] transform -translate-x-1/2 -translate-y-1/2">
        <LoginCard />
      </div>
    </div>
  );
};

export default Login;
