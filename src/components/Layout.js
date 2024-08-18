import Head from "next/head";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Baker Street Library 24/7</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      <div className="flex max-w-[100%] overflow-hidden flex-col">
        <Header />
        <div>
          <Sidebar fromLayout={true} />
          <main className="ms-0 lg:ms-[290px] mt-[70px]">{children}</main>
        </div>
      </div>
    </>
  );
}
