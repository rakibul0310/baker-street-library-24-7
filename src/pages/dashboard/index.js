import Layout from "@/components/Layout";
import InfoCard from "@/components/widgets/InfoCard";
import React from "react";

const Dashboard = () => {
  return (
    <Layout>
      <div className="m-5 ps-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <InfoCard
          title={"Total Users"}
          icon={<i class="ri-group-3-fill"></i>}
          data={12}
          bgColor={"#5f93ff"}
        />
        <InfoCard
          title={"Total Books"}
          icon={<i class="ri-book-3-fill"></i>}
          data={12}
        />
        <InfoCard
          title={"Total Authors"}
          icon={<i class="ri-group-fill"></i>}
          data={12}
        />
      </div>
    </Layout>
  );
};

export default Dashboard;
