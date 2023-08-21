"use client"

import { useEffect } from "react";

const Error = ({ error, reset }) => {
    useEffect(() => {
        console.log(error)
    }, [error])
    return (
        <div className="text-center">
            <h1 className="text-2xl font-bold text-red-500">{error.message || "Something is Wrong"}</h1>
            <button
                onClick={() => reset()}
                className="btn btn-primary bg-blue-500"
            >Reset</button>
        </div>
    );
};

export default Error;