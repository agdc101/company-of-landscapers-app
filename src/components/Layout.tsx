import React from "react";
import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import Nav from "./Nav.jsx";
import Footer from "./Footer.js";
import QuickLinks from "./QuickLinks.jsx";
import { useLoaderData } from "react-router-dom";
import Loading from "../views/Loading.jsx";
import { GlobalData } from "../utils/types.js";

const RootLayout = () => {
    const navigation = useNavigation();
    const globalPageData = useLoaderData() as GlobalData;
    const { globalData } = globalPageData;

    if (!globalData.globalSet || !globalData.entries) {
        throw new Error("Global data not found. Contact Developer");
    }

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

export default RootLayout;