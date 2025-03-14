import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import QuickLinks from "./QuickLinks";
import { useLoaderData } from "react-router-dom";
import Error from "../views/Error";
import Loading from "../views/Loading.jsx";

export default function RootLayout() {
    const navigation = useNavigation();
    const { globalData, error } = useLoaderData();

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