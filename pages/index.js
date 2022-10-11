import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Addhabit from "../components/addhabit";
import FullCalendar from "../components/fullCalendar";
import Habitcontainer from "../components/habitcontainer";
import Menubar from "../components/habitcontainer";
import Topbar from "../components/navbar";

export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:3000/api/habits");
  const data = await res.json();
  const array = [{ name: "Test", icon: "path to image" }];

  console.log(data);
  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen">
        <Topbar></Topbar>
        <div className="h-[calc(100%-3rem)] w-screen flex items-center">
          <Habitcontainer habits={data}></Habitcontainer>
          <FullCalendar habits={data}></FullCalendar>
        </div>
      </div>
    </div>
  );
}
