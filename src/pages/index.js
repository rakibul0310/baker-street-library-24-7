import Head from "next/head";
import Login from "./login";
import { useHealthCheckQuery } from "@/services/authService";

export default function Home() {
  const { data, error, isLoading } = useHealthCheckQuery();
  return (
    <>
      <Head>
        <title>Baker Street Library 24/7</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <main className="flex justify-center items-center max-w[100%] h-[100vh] overflow-hidden">
        <Login />
      </main>
    </>
  );
}
