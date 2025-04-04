import React from "react";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.js";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="mx-auto flex flex-col min-h-svh">
            <Nav hasError={true} />
            <main className="flex-1 flex flex-col items-center justify-center" >
                <h1 className="text-4xl xl:text-5xl mb-6">404</h1>
                <p className="text-3xl">Oops! Seems like this page does not exist</p>
                <Link to="/" className="text-white mt-14 border p-2 rounded bg-emerald-700">Back to Home</Link>
            </main>
            <Footer />
        </div>
    );
}

export default NotFound;