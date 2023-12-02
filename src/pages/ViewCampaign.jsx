import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";

import Stack from "../components/common/Stack";
import Button from "../components/common/Button";
import Placeholder from "../components/Placeholder";
import TextInput from "../components/common/TextInput";
import VotingCandidate from "../components/cards/VotingCandidate";
// import Lottie from "../components/common/Lottie";

// import noSearchAnimation from "../assets/lotties/animation_no_search.json";
import { getSingleCampaign } from "../redux/actions/campaign.action";
import { generateIdFromName } from "../utility";

function ViewCampaign() {
  const dispatch = useDispatch();

  const [campaignInfo, setCampaignInfo] = useState(null);
  const [categories, setCategories] = useState([]);
  const params = useParams();

  useEffect(() => {
    dispatch(getSingleCampaign(params?.campaignId)).then((res) => {
      console.log(res);
      if (res?.payload) {
        setCategories(res?.payload?.categories);
        setCampaignInfo(res?.payload);
      }
    });
  }, [dispatch, params?.campaignId]);

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
            Kindly choose a candidate you want to support for each category.
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

      {categories && categories.length > 0 ? (
        categories.map((eachCategory, index) => (
          <section
            key={index}
            id={generateIdFromName(eachCategory?.name)}
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
                  {eachCategory?.name}
                </h2>

                <p className="mt-3 md:mt-1 text-sm text-center md:text-left text-gray-300 max-w-md md:max-w-none">
                  {eachCategory?.description}
                </p>
              </Stack>

              <Button
                href={`/campaigns/${campaignInfo?.id}/category/${eachCategory?.id}`}
                className="text-sm bg-yellow-400 flex-grow whitespace-nowrap rounded-md md:ml-8 mt-5 md:mt-0"
                text={"View Poll Results"}
              />
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-stretch flex-wrap w-full mt-3">
              {eachCategory?.candidates &&
              eachCategory?.candidates.length > 0 ? (
                eachCategory.candidates.map((eachCandidate, i) => (
                  <VotingCandidate
                    key={i}
                    name={`${eachCandidate?.fullname} ${
                      eachCandidate?.code ? `[${eachCandidate?.code}]` : ""
                    }`}
                    votes={eachCandidate?.totalVoteCount}
                    avatar1={eachCandidate?.imageUrl}
                    sx={{
                      margin: "1.5rem 1.5rem 0 0",
                      width: "calc(25% - 1.5rem)",
                      minWidth: "295px",
                    }}
                    color={2}
                    canVote={true}
                    voteUrl={"https://wa.me/+233544622250"}
                  />
                ))
              ) : (
                <Placeholder
                  message="There are no candidates for this category at the moment. Please check back some other time."
                  action={
                    <Button
                      href="/campaigns"
                      text="Go To Campaigns"
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
        ))
      ) : (
        <section
          className="flex flex-col sm:flex-row items-center justify-center mb-6"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            minHeight: "unset",
            height: "auto",
          }}
        >
          <Placeholder
            message={
              "There are no categories here at the moment. Please check back some other time."
            }
            action={
              <Button
                href="/campaigns"
                text="Check other campaigns"
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
        </section>
      )}
    </>
  );
}

export default ViewCampaign;
