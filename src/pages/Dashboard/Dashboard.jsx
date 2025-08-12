import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { user } = useSelector((state) => state.authR);
  return (
    <section
      className=" bg-accent min-h-screen flex justify-center items-center
    "
    >
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl">Hello, {user.name}</h1>
        <p>Welcome to the Dashboard</p>
      </div>
    </section>
  );
};

export default Dashboard;
