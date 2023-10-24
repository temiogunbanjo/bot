import React from "react";
import { PiCloudSlash as BreakIcon } from "react-icons/pi";
import Button from "../components/common/Button";
import Campaign from "../components/cards/Campaign";
import Stack from "../components/common/Stack";
import Lottie from "../components/common/Lottie";

import noSearchAnimation from "../assets/lotties/animation_no_search.json";

function Home() {
  const campaigns = [
    { name: "Best Catering Student", numberOfCandidates: 10 },
    { name: "Best Catering Student", numberOfCandidates: 200 },
    { name: "Best Catering Student", numberOfCandidates: 10 },
    { name: "Best Catering Student", numberOfCandidates: 10 },
    { name: "Best Catering Student", numberOfCandidates: 10 },
  ];

  return (
    <>
      <section className="hero flex flex-col items-start justify-center">
        <h2 className="">
          Join the{" "}
          <span className="animate-bounce text-green-500">Vote Now!</span>
        </h2>
        <h4 className="mt-3 text-left">
          GH Schools voting is a platform that allows our talented and skills
          students to showcase their crafts and also allow the other students
          and the general public to vote in various categories.
        </h4>
        <Button text="Get Started" className="mt-10" />
      </section>

      <section
        className="flex flex-col items-center"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          minHeight: "unset",
          height: "auto",
        }}
      >
        <h2 className="text-2xl capitalize font-bold">
          Our <span className="animate-bounce text-yellow-300">ongoing</span>{" "}
          Campaigns
        </h2>

        <div className="flex flex-row flex-none basis-2 flex-wrap space-x-5 items-center justify-center mt-12 w-full">
          {campaigns && campaigns.length > 0 ? (
            campaigns.map((eachCampaign) => (
              <Campaign
                title={eachCampaign.name}
                candidates={eachCampaign.numberOfCandidates}
                sx={{ marginTop: "1.25rem" }}
              />
            ))
          ) : (
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="center"
              sx={{
                width: "100%",
                // height: "calc(98vh - 100px)",
                alignItems: "center",
              }}
            >
              {/* <Lottie data={noSearchAnimation} width={120} height={120} /> */}
              <BreakIcon fontSize={"88px"} />
              <p
                className="text-center pl-2 mt-6 mb-1 text-lg"
                style={{
                  // fontSize: "1.6rem",
                  maxWidth: "650px",
                }}
              >
                There are no ongoing campaigns at the moment. Please check back
                some other time.
              </p>

              <Button
                href="/dashboard"
                text="Return To Dashboard"
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  margin: "35px auto 0",
                  boxShadow: "none",
                  borderRadius: "8px",
                  // color: "white",
                  width: "260px",
                }}
                disableElevation
              />
            </Stack>
          )}
        </div>
      </section>
    </>
  );
}

export default Home;
