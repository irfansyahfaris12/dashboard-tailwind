import React from "react";
import Card from "../../Component/Card";

const Dashboard = () => {
  return (
    <div className="py-5 px-5">
      <div className="p-5 flex justify-between">
        <Card className="w-60 shadow-md py-4 px-6 bg-green-600 rounded" title="Transaction" result="20.00" detail="7% More than last month" />
        <Card className="w-60 shadow-md py-4 px-6 bg-red-600 rounded" title="Authorization" result="28.00"  detail="3% Going Down" />
        <Card className="w-60 shadow-md py-4 px-6 bg-blue-600 rounded" title="Aprovals" result="10.00" detail="7% Look prety good" />
      </div> 
    </div>
  );
};

export default Dashboard;
