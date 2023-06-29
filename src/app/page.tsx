import Link from "next/link";
import React from "react";

type Props = {};

export default function Home({}: Props) {
  return (
    <div className="text-slate-500 dark:text-slate-400 ">
      <div className="text-3xl text-pink-100">Learn AI with BlockCode</div>
      <hr />
      <div className="grid md:grid-cols-3 gap-4 place-items-stretch mt-6">
        <Link href="/DataScience">
          <div className="box-border h-32 w-auto p-5 rounded-lg bg-gradient-to-r from-blue-950 to-blue-800 border-solid hover:text-white">
            <h2 className="text-2xl lg:text-4xl sm:text-2xl">Data Science</h2>
            <h2 className="text-4xl"></h2>
            <p></p>
          </div>
        </Link>
        <Link href="/ImageProcessing">
          <div className="box-border h-32 w-auto p-5 rounded-lg bg-gradient-to-r from-blue-950 to-blue-800 border-solid hover:text-white">
            <h2 className="text-2xl lg:text-4xl sm:text-2xl">
              Image Processing
            </h2>
            <h2 className="text-4xl"></h2>
            <p></p>
          </div>
        </Link>
        <Link href="/SignalProcessing">
          <div className="box-border h-32 w-auto p-5 rounded-lg bg-gradient-to-r from-blue-950 to-blue-800 border-solid hover:text-white">
            <h2 className="text-2xl lg:text-4xl sm:text-2xl ">
              Signal Processing
            </h2>
            <h2 className="text-4xl"></h2>
            <p></p>
          </div>
        </Link>
        <Link href="/TimeSeries">
          <div className="box-border h-32 w-auto p-5 rounded-lg bg-gradient-to-r from-blue-950 to-blue-800 border-solid hover:text-white">
            <h2 className="text-2xl lg:text-4xl sm:text-2xl ">
             Time Series
            </h2>
            <h2 className="text-4xl"></h2>
            <p></p>
          </div>
        </Link>
      </div>
    </div>
  );
}
