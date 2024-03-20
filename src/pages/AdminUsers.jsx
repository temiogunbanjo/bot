import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Stack from "../components/common/Stack";
import Button from "../components/common/Button";
import Campaign from "../components/cards/Campaign";
import Placeholder from "../components/Placeholder";
import VotingCandidate from "../components/cards/VotingCandidate";
// import Lottie from "../components/common/Lottie";

// import noSearchAnimation from "../assets/lotties/animation_no_search.json";
import { generateIdFromName } from "../utility";
import { getRecentWinners } from "../redux/actions";
import { getAllCampaigns } from "../redux/actions/campaign.action";
import Menu, { MenuItem } from "../components/common/Menu";
import { BsAirplaneFill } from "react-icons/bs";
import { MdEvent, MdSettings } from "react-icons/md";
import { FaUser } from "react-icons/fa";

function AdminUsers() {
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
    <Stack className="w-full items-center sm:items-start bg-black shadow-lg rounded-lg p-8">
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
  );
}

export default AdminUsers;
