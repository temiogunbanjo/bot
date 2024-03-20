import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Stack from "../components/common/Stack";
import Button from "../components/common/Button";
// import Lottie from "../components/common/Lottie";

// import noSearchAnimation from "../assets/lotties/animation_no_search.json";
import {  mergeClassNames } from "../utility";
import { getRecentWinners } from "../redux/actions";
import { getAllCampaigns } from "../redux/actions/campaign.action";
import { MdCampaign } from "react-icons/md";
import { FaDollarSign, FaUserFriends } from "react-icons/fa";

const Card = ({ title, value, icon, className = "" }) => {
  return (
    <Stack
      className={mergeClassNames(
        "w-full justify-between items-center sm:items-start bg-black shadow-lg rounded-lg p-6",
        className
      )}
      sx={{
        minWidth: "180px",
      }}
    >
      <div className="rounded-full p-3 bg-gray-800">{icon}</div>
      <div className="flex flex-col">
        <h2 className="text-xl capitalize font-bold text-center sm:text-left mt-2">
          {title}
        </h2>
        <p className="my-2 text-lg font-bold text-center sm:text-left">
          {value}
        </p>
      </div>
    </Stack>
  );
};

function AdminDashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [recentWinners, setRecentWinners] = useState([]);

  const campaigns = useSelector((store) => store.Campaign.campaigns?.data);

  useEffect(() => {
    dispatch(getAllCampaigns({ isOngoing: true }));
    (async () => {
      const res2 = await getRecentWinners();
      setRecentWinners(res2);
    })();
  }, [dispatch]);

  return (
    <Stack className="w-full items-center sm:items-start">
      <Stack sx={{ flexDirection: "row" }} className="w-full items-stretch flex-wrap">
        <Card
          title={<span className="text-yellow-500">{"Total Students"}</span>}
          value={5}
          icon={
            <FaUserFriends
              className="text-md"
              style={{ fontSize: "26px", color: "red" }}
            />
          }
        />

        <Card
          title={<span className="text-yellow-500">{"Total Campaigns"}</span>}
          value={5}
          className="ml-5"
          icon={<MdCampaign className="text-md" style={{ fontSize: "26px" }} />}
        />

        <Card
          title={<span className="text-yellow-500">ongoing Campaigns</span>}
          value={5}
          className="ml-5"
          icon={
            <FaUserFriends className="text-md" style={{ fontSize: "26px" }} />
          }
        />

        <Card
          title={<span className="text-yellow-500">Total Revenue</span>}
          value={`$ 5,000,000.00`}
          className="ml-5"
          icon={
            <FaDollarSign className="text-md" style={{ fontSize: "26px" }} />
          }
        />

        <Card
          title={<span className="text-yellow-500">Total Revenue</span>}
          value={`$ 5,000,000.00`}
          className="ml-5"
          icon={
            <FaDollarSign className="text-md" style={{ fontSize: "26px" }} />
          }
        />
      </Stack>

      <Stack className="w-full items-center sm:items-start bg-black shadow-lg rounded-lg p-8 mt-5">
        <h2 className="text-4xl capitalize font-bold text-center sm:text-left">
          Our <span className="animate-bounce text-yellow-600">ongoing</span>{" "}
          Campaigns
        </h2>
        <p className="my-4 text-base text-center sm:text-left">
          Kindly choose the campaign you want to support. All voting activities
          are currently done on WhatsApp
        </p>
        <Button
          href={"/previous-winners"}
          text={"View All Winners"}
          className="rounded-full mt-8 sm:mt-0 bg-yellow-400 whitespace-nowrap text-sm"
        />
      </Stack>
    </Stack>
  );
}

export default AdminDashboard;
