import React from "react";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.js";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError() as { message: string };
    console.error(error);
    const hasError = error ? true : false;

    return (
        <div className="mx-auto flex flex-col min-h-svh">
            <Nav hasError={hasError} />
            <main className="flex-1 flex flex-col items-center justify-center" >
                <h1 className="text-4xl xl:text-5xl mb-6">500</h1>
                <p className="text-3xl mb-4">Sorry there has been an Error. Please try again later.</p>
                { error.message && <p className="text-2xl italic">{error.message}</p> }
                <Link to="/" className="text-white mt-14 border p-2 rounded bg-emerald-700">Back to Home</Link>
            </main>
            <Footer />
        </div>
    );
}

export default Error;