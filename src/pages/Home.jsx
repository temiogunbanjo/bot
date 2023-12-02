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

function Home() {
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
    <>
      <section className="hero flex flex-col items-start justify-center">
        <h2 className="">
          Join the{" "}
          <span className="animate-bounce text-green-500">Vote Now</span>!
        </h2>
        <h4 className="mt-3 text-left">
          GH Schools Voting is a platform that allows our talented and skills
          students to showcase their crafts and also allow the other students
          and the general public to vote in various categories.
        </h4>
        {/* <Button text="Get Started" className="mt-10 rounded-md" /> */}
      </section>

      <section
        className="flex flex-col md:flex-row-reverse items-center justify-center"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          minHeight: "unset",
          height: "auto",
        }}
      >
        <Stack className="items-center sm:items-start">
          <h2 className="text-4xl capitalize font-bold text-center sm:text-left">
            Our <span className="animate-bounce text-yellow-600">ongoing</span>{" "}
            Campaigns
          </h2>
          <p className="my-4 text-base text-center sm:text-left">
            Kindly choose the campaign you want to support. All voting
            activities are currently done on WhatsApp
          </p>
        </Stack>

        <div
          className="flex flex-row flex-wrap justify-center w-full md:mr-10 overflow-hidden"
          style={{ maxWidth: "650px", maxHeight: "520px" }}
        >
          {campaigns && campaigns.length > 0 ? (
            campaigns.slice(0, 4).map((eachCampaign, index) => (
              <Campaign
                key={index}
                title={eachCampaign?.name}
                candidates={
                  eachCampaign?.categories?.reduce((a, b) => {
                    return a.concat(b?.candidates);
                  }, [])?.length
                }
                categories={eachCampaign?.categories?.length}
                sx={{
                  flexGrow: 1,
                  margin: "0.625rem",
                  width: "calc(50% - 1.25rem)",
                  minWidth: "180px",
                }}
                onClick={(ev) => {
                  navigate(
                    `/campaigns/${eachCampaign?.id}#${generateIdFromName(
                      eachCampaign?.name
                    )}`
                  );
                }}
              />
            ))
          ) : (
            <Placeholder message="There are no ongoing campaigns at the moment. Please check back some other time." />
          )}
        </div>
      </section>

      <section
        className="flex flex-col items-center"
        style={{
          // backgroundColor: "rgba(255, 255, 255, 0.1)",
          minHeight: "unset",
          height: "auto",
        }}
      >
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start w-full">
          <Stack className="w-full">
            <h2 className="text-4xl capitalize font-bold text-center sm:text-left">
              Previous{" "}
              <span className="animate-bounce text-green-600">
                Campaign Winners
              </span>
            </h2>

            <p className="mt-3 text-base text-gray-300 text-center sm:text-left">
              Kindly choose the campaign you want to support. All voting
              activities are currently done on WhatsApp
            </p>
          </Stack>

          <Button
            href={"/previous-winners"}
            text={"View All Winners"}
            className="rounded-full mt-4 sm:mt-0 sm:ml-3 bg-yellow-400 whitespace-nowrap text-sm"
          />
        </div>

        <div className="flex flex-row flex-none flex-wrap items-stretch justify-center mt-9 w-full">
          {recentWinners && recentWinners.length > 0 ? (
            recentWinners.slice(0, 4).map((wonCampaign, index) => (
              <VotingCandidate
                key={index}
                name={wonCampaign?.winner?.name}
                votes={`Won with ${wonCampaign.total}`}
                category={wonCampaign?.name}
                avatar2="true"
                color={1}
                sx={{
                  margin: "1.5rem 0.75rem 0",
                  width: "calc(33.33% - 1.5rem)",
                }}
                canVote={false}
                phone={wonCampaign?.winner?.phone}
                email={wonCampaign?.winner?.email}
                disabledActions={
                  !wonCampaign?.winner?.email && !wonCampaign?.winner?.phone
                }
              />
            ))
          ) : (
            <Placeholder
              message={
                "There are no previous winners at the moment. Vote for your favourite candidates in our ongoing campaigns."
              }
              action={
                <Button
                  href="/campaigns"
                  text="View Campaigns"
                  className="rounded-md"
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    margin: "35px auto 0",
                    width: "260px",
                  }}
                  // disableElevation
                />
              }
            />
          )}
        </div>
      </section>
    </>
  );
}

export default Home;
