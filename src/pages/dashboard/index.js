import Layout from "@/components/Layout";
import LoadingScreen from "@/components/LoadingScreen";
import InfoCard from "@/components/widgets/InfoCard";
import {
  useTotalAuthorsQuery,
  useTotalBooksQuery,
  useTotalMembersQuery,
} from "@/services/widgetService";
import React from "react";

const Dashboard = () => {
  const { data: totalBooks, isLoading: totalBooksIsLoading } =
    useTotalBooksQuery();
  const { data: totalAuthors, isLoading: totalAuthorsIsLoading } =
    useTotalAuthorsQuery();
  const { data: totalMembers, isLoading: totalMembersIsLoading } =
    useTotalMembersQuery();

  React.useEffect(() => {
    console.log(totalBooks, totalAuthors, totalMembers);
  }, [totalBooks, totalAuthors, totalMembers]);

  return (
    <Layout>
      {totalBooksIsLoading || totalAuthorsIsLoading || totalMembersIsLoading ? (
        <div className="m-5 ps-5 flex justify-center items-center h-[74vh] relative">
          <LoadingScreen />
        </div>
      ) : (
        <div className="m-5 ps-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <InfoCard
            title={"Total Users"}
            icon={<i class="ri-group-3-fill"></i>}
            data={totalMembers?.data}
            bgColor={"#5f93ff"}
          />
          <InfoCard
            title={"Total Books"}
            icon={<i class="ri-book-3-fill"></i>}
            data={totalBooks?.data}
          />
          <InfoCard
            title={"Total Authors"}
            icon={<i class="ri-group-fill"></i>}
            data={totalAuthors?.data}
          />
        </div>
      )}
    </Layout>
  );
};

export default Dashboard;
