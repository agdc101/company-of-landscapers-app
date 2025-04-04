import React from "react";
import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import Nav from "./Nav.tsx";
import Footer from "./Footer.tsx";
import QuickLinks from "./QuickLinks.tsx";
import { useLoaderData } from "react-router-dom";
import Loading from "../views/Loading.jsx";
import { GlobalLoaderData } from "../utils/types.ts";

const RootLayout = () => {
    const navigation = useNavigation();
    const globalPageData = useLoaderData() as GlobalLoaderData;
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