import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

import Stack from "../components/common/Stack";
import Button from "../components/common/Button";
import Campaign from "../components/cards/Campaign";
import Placeholder from "../components/Placeholder";
import TextInput from "../components/common/TextInput";
// import Lottie from "../components/common/Lottie";
// import noSearchAnimation from "../assets/lotties/animation_no_search.json";

import { getAllCampaigns } from "../redux/actions/campaign.action";
import { generateIdFromName } from "../utility";

function Campaigns() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const campaigns = useSelector((store) => store.Campaign.campaigns?.data);

  useEffect(() => {
    dispatch(getAllCampaigns({ isOngoing: true }));
  }, [dispatch]);

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
          {/* <span className="text-lg capitalize font-medium mb-6">
            {`Viewing:`}
          </span> */}

          <h2 className="text-4xl capitalize font-bold text-center">
            Ongoing Campaigns
          </h2>

          <p
            className="main-subtitle mt-4 font-medium text-sm text-center text-gray-200"
            style={{ maxWidth: "600px" }}
          >
            Kindly choose the campaign you want to support. All voting
            activities are currently done on WhatsApp
          </p>

          <TextInput
            className="mt-8"
            placeholder="Search for a campaign e.g. 2023 Campaign"
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

      <section
        className="flex flex-col items-center justify-center mb-6"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          minHeight: "unset",
          height: "auto",
        }}
      >
        {/* <div
            className="flex flex-row justify-between items-start w-full"
            sx={{ minWidth: "500px" }}
          >
            <Stack className="items-start w-full">
              <h2 className="text-3xl capitalize font-medium">
                {eachCampaign?.name}
              </h2>
              <p className="mt-2 text-sm">{eachCampaign?.description}</p>
            </Stack>

            <Button
              href={`/campaigns/${campaignInfo?.id}/category/${eachCampaign?.id}`}
              className="text-sm bg-yellow-400 flex-grow whitespace-nowrap rounded-md"
              text={"Poll Results"}
            />
          </div> */}

        <div className="flex flex-col sm:flex-row items-center sm:items-stretch flex-wrap w-full mt-3">
          {campaigns && campaigns.length > 0 ? (
            campaigns.map((eachCampaign, i) => (
              <Campaign
                key={i}
                title={eachCampaign?.name}
                candidates={
                  eachCampaign?.categories?.reduce((a, b) => {
                    return a.concat(b?.candidates);
                  }, [])?.length
                }
                categories={eachCampaign?.categories?.length}
                status={eachCampaign?.ongoing}
                sx={{
                  margin: "0.75rem 0.75rem",
                  width: "calc(33.3% - 1.5rem)",
                  minWidth: "240px",
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
            <Placeholder
              message="There are no ongoing campaigns at the moment. Please check back some other time."
              action={
                <Button
                  href="/"
                  text="Return Home"
                  className="rounded-md"
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    margin: "35px auto 0",
                    width: "260px",
                  }}
                />
              }
            />
          )}
        </div>
      </section>
    </>
  );
}

export default Campaigns;
