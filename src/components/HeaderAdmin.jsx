import React from "react";

function HeaderAdmin() {
  return (
    <header className="flex flex-col sm:flex-row flex-wrap items-center justify-start py-5 px-8 mb-4 border--b">
      <div className="flex flex-col items-center sm:items-start">
        <h1
          className="inline-block uppercase text-3xl font-bold"
          // style={{ letterSpacing: "0.5px" }}
        >
          <span className="text-green-500">Gh</span>
          <span className="text-red-500">S</span>{" "}
          <span className="text-yellow-300">Voting</span>{" "}
          <span className="text-white">Admin Dashboard</span>
        </h1>
      </div>

      {/* <nav className="my-5">
        <ul className="flex flex-row space-x-8 font-medium">
          <li><a href="/">Home</a></li>
          <li><a href="/campaigns">Ongoing Campaigns</a></li>
          <li><a href="/previous-winners">Previous Winners</a></li>
        </ul>
      </nav> */}
    </header>
  );
}

export default HeaderAdmin;
