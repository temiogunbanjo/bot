import React from "react";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row flex-wrap items-center justify-between py-5 px-8 border--b">
      <div className="flex flex-col items-center sm:items-start">
        <h1
          className="inline-block uppercase text-3xl font-bold"
          // style={{ letterSpacing: "0.5px" }}
        >
          <span className="text-green-500">Gh</span>{" "}
          <span className="text-red-500">Schools</span> <span className="text-yellow-300">Voting</span>
        </h1>
        <h6 className="inline-block text-sm italic capitalize mt-1 font-semibold">
          Where champions are selected...
        </h6>
      </div>

      <nav className="my-5">
        <ul className="flex flex-row space-x-8 font-medium">
          <li><a href="/">Home</a></li>
          <li><a href="/campaigns">Ongoing Campaigns</a></li>
          <li><a href="/previous-winners">Previous Winners</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
