import Head from "next/head";
import Header from "./Header";
import Sidebar from "./Sidebar";
import LoadingScreen from "./LoadingScreen";
import { useLoggedInUserQuery } from "@/services/authService";
import React from "react";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  // call loggedin user RTK query
  const { data, error, isLoading } = useLoggedInUserQuery();
  const router = useRouter();

  const [showSidebar, setShowSidebar] = React.useState(false);

  React.useEffect(() => {
    if (error) {
      localStorage.removeItem("token");
      router.push("/");
    }
  }, [error]);

  if (isLoading) return <LoadingScreen />;

  return (
    <>
      <Head>
        <title>Baker Street Library 24/7</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      <div
        className={`flex max-w-[100%] overflow-hidden flex-col ${
          showSidebar ? "h-[100vh]" : "h-auto"
        }`}
      >
        <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <div>
          <div
            className={`z-[50] w-[100%] h-[100vh] bg-black opacity-[0.8] absolute top-0 left-0 ${
              !showSidebar ? "hidden" : "block"
            }`}
            onClick={() => setShowSidebar(false)}
          ></div>
          <Sidebar fromLayout={true} />
          <main className="ms-0 lg:ms-[290px] mt-[70px]">{children}</main>
        </div>
      </div>
    </>
  );
}
