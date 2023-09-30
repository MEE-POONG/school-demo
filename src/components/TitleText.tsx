

import React, { useEffect, useState } from "react";
import Head from "next/head";

type TitleTextProps = {
    titleText: string;
    titleTextTo?: string; // The '?' makes this prop optional
};

const TitleText: React.FC<TitleTextProps> = ({ titleText, titleTextTo }) => {

    return (
        <div className="container mx-auto  md:pt-10 pt-2 text-center mt-5">
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl mx-5 mt-6">
                <span className=" text-blue-800 ">{titleText}</span>
                <span className=" text-yellow-700">{titleTextTo}</span>
                <div className="md:w-full h-1 mt-4 bg-gradient-to-r from-blue-900 via-yellow-700 to-blue-900" />
            </span>
        </div>
    );
}
export default TitleText;