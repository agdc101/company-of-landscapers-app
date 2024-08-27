import { Outlet, ScrollRestoration } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import QuickLinks from "./QuickLinks";
import { useLoaderData } from "react-router-dom";
import Error from "../views/Error";

export default function RootLayout() {
    const { globalData, error, loading } = useLoaderData();

    if (loading) return <><Nav/><h3 className="text-center mt-32 text-2xl">Loading...</h3></>;
    if (error) return ( <Error/>);

    return (
        <div className="mx-auto flex flex-col min-h-svh overflow-hidden">
            <ScrollRestoration />
            <Nav />
            <main className="flex-1">
                <Outlet />
            </main>
            <QuickLinks globalData={globalData} />
            <Footer />
        </div>
    );
}