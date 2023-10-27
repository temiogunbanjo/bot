import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { PiCloudSlash as BreakIcon } from "react-icons/pi";

import Button from "../components/common/Button";
import Stack from "../components/common/Stack";
// import Lottie from "../components/common/Lottie";

// import noSearchAnimation from "../assets/lotties/animation_no_search.json";
import VotingCandidate from "../components/cards/VotingCandidate";
import { generateIdFromName } from "../utility";

import { getSingleCampaign } from "../redux/actions";
import TextInput from "../components/common/TextInput";

const EmptyPlaceholder = () => {
  return (
    <Stack
      sx={{
        width: "100%",
        // height: "calc(98vh - 100px)",
        alignItems: "center",
      }}
    >
      {/* <Lottie data={noSearchAnimation} width={120} height={120} /> */}
      <BreakIcon fontSize={"88px"} />
      <p
        className="text-center pl-2 mt-6 mb-1 text-base text-slate-300"
        style={{
          // fontSize: "1.6rem",
          maxWidth: "450px",
        }}
      >
        There are no ongoing campaigns at the moment. Please check back some
        other time.
      </p>

      <Button
        href="/dashboard"
        text="Return To Dashboard"
        className="rounded-md"
        style={{
          fontSize: "14px",
          fontWeight: 600,
          margin: "35px auto 0",
          width: "260px",
        }}
      />
    </Stack>
  );
};

function ViewCampaign() {
  const [campaignInfo, setCampaignInfo] = useState(null);
  const [campaigns, setCampaigns] = useState([]);
  const params = useParams();

  useEffect(() => {
    (async () => {
      const res = await getSingleCampaign(params?.campaignId);
      setCampaigns(res?.categories);
      setCampaignInfo(res);
    })();
  }, [params?.campaignId]);

  return (
    <>
      <section
        className="flex flex-col items-center justify-center mb-6"
        style={{
          // backgroundColor: "rgba(255, 255, 255, 0.1)",
          minHeight: "unset",
          height: "auto",
        }}
      >
        <Stack className="items-center w-full">
          <span className="text-lg capitalize font-medium mb-6">
            {`Showing Campaign:`}
          </span>

          <h2 className="text-4xl capitalize font-bold text-center">
            {campaignInfo?.name || "-- --"}
          </h2>

          <p
            className="main-subtitle mt-4 font-medium text-sm text-center text-gray-200"
            style={{ maxWidth: "600px" }}
          >
            Kindly choose the candidate you want to support for each category.
            All voting activities are currently done on WhatsApp.
          </p>

          <TextInput
            className="mt-8"
            placeholder="Search for a category or candidate e.g. Best Media Student"
            inputProps={{
              style: { padding: "1rem" },
            }}
            startAdornment={
              <BsSearch
                fontSize={18}
                style={{
                  padding: "0 10px",
                  border: "1px solid transparent",
                  width: "45px",
                  height: "45px",
                }}
              />
            }
          />
        </Stack>
      </section>

      {campaigns?.map((eachCampaign, index) => (
        <section
          key={index}
          id={generateIdFromName(eachCampaign?.name)}
          className="flex flex-col items-center justify-center mb-6"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            minHeight: "unset",
            height: "auto",
          }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start w-full">
            <Stack className="justify-between items-center md:items-start w-full">
              <h2 className="text-3xl capitalize font-medium w-full text-center md:text-left">
                {eachCampaign?.name}
              </h2>

              <p
                className="mt-3 md:mt-1 text-sm text-center md:text-left text-gray-300 max-w-md md:max-w-none"
              >
                {eachCampaign?.description}
              </p>
            </Stack>

            <Button
              href={`/campaigns/${campaignInfo?.id}/category/${eachCampaign?.id}`}
              className="text-sm bg-yellow-400 flex-grow whitespace-nowrap rounded-md md:ml-8 mt-5 md:mt-0"
              text={"View Poll Results"}
            />
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-stretch flex-wrap w-full mt-3">
            {eachCampaign?.candidates && eachCampaign?.candidates.length > 0 ? (
              eachCampaign.candidates.map((eachCandidate, i) => (
                <VotingCandidate
                  key={i}
                  name={eachCandidate?.name}
                  votes={eachCandidate?.votes}
                  sx={{
                    margin: "1.5rem 1.5rem 0 0",
                    width: "calc(25% - 1.5rem)",
                    minWidth: "275px",
                  }}
                  color={2}
                  canVote={true}
                />
              ))
            ) : (
              <EmptyPlaceholder />
            )}
          </div>
        </section>
      ))}
    </>
  );
}

export default ViewCampaign;
