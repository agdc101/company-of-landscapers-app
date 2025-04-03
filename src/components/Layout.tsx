import React from "react";
import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import Nav from "./Nav.jsx";
import Footer from "./Footer.js";
import QuickLinks from "./QuickLinks.jsx";
import { useLoaderData } from "react-router-dom";
import Error from "../views/Error.jsx";
import Loading from "../views/Loading.jsx";
import { GlobalData } from "../utils/types.js";

interface GlobalLoaderData extends GlobalData {
    error: { hasError: boolean; message?: string };
  }

export default function RootLayout() {
    const navigation = useNavigation();
    const globalPageData = useLoaderData() as GlobalLoaderData;
    const { globalData, error } = globalPageData;

    if (error) return ( <Error/>);

    return (
        <div className="mx-auto flex flex-col min-h-svh overflow-hidden">
            <ScrollRestoration />
            <Nav />
            <main className="flex-1">
                {navigation.state === "loading" ? <Loading/> : <Outlet/>}
            </main>
            <QuickLinks globalData={globalData} />
            <Footer />
        </div>
    );
}