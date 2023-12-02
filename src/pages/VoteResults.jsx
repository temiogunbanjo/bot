import React, { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

import PlainTable from "../components/PlainTable";
import Stack from "../components/common/Stack";
import TextInput from "../components/common/TextInput";
// import Button from "../components/common/Button";
import Chart from "../components/common/Chart";

import {
  generateIdFromName,
  generateRandomColor,
  mergeClassNames,
} from "../utility";
import { getSingleCategory } from "../redux/actions/campaign.action";

function VoteResults() {
  const params = useParams();
  const dispatch = useDispatch();
  const [categoryInfo, setCategoryInfo] = useState(null);

  const [pieWidth, pieHeight] = [440, 320];

  useEffect(() => {
    dispatch(getSingleCategory(params?.categoryId)).then((res) => {
      console.log(res);
      if (res?.payload) {
        setCategoryInfo(res?.payload);
      }
    });
  }, [dispatch, params?.categoryId]);

  const data = useMemo(
    () =>
      categoryInfo?.candidates.map((each, index) => ({
        sn: index + 1,
        ...each,
      })) || [],
    [categoryInfo?.candidates]
  );

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
          <span className="text-lg capitalize font-medium mb-5 text-center">
            {`Showing Vote Results For:`}
          </span>

          <h2 className="text-4xl capitalize font-bold text-center">
            {`${categoryInfo?.name || ""}`}
          </h2>

          <p
            className="main-subtitle my-2 text-sm font-medium text-center text-gray-200"
            style={{ maxWidth: "600px" }}
          >{`${categoryInfo?.description || ""}`}</p>

          {categoryInfo?.event?.name && (
            <a
              href={`/campaigns/${params?.campaignId}#${generateIdFromName(
                categoryInfo?.event?.name
              )}`}
              className={mergeClassNames(
                "inline-flex mt-1 px-3 py-1.5 text-xs rounded-full capitalize",
                "bg-yellow-800"
              )}
            >{`${categoryInfo?.event?.name}`}</a>
          )}
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
        <div className="flex rounded-full">
          {categoryInfo?.candidates.some((each) => {
            return each?.totalVoteCount > 0;
          }) && (
            <Chart
              useGoogle={true}
              is3D={true}
              width={pieWidth}
              height={pieHeight}
              data={categoryInfo?.candidates.map((each) => {
                return {
                  title: each?.fullname,
                  value: each?.totalVoteCount,
                  color: generateRandomColor(),
                };
              })}
            />
          )}
        </div>

        <div
          className="flex flex-col w-full mt-3"
          style={{ maxWidth: "1000px" }}
        >
          <div className="flex flex-row items-center justify-between mb-6 mt-10">
            <TextInput
              placeholder="Search for a candidate (name, code)"
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
              sx={{
                maxWidth: "400px",
              }}
              inputProps={{
                style: {
                  textAlign: "left",
                  padding: "1rem",
                },
              }}
            />

            {/* <Button
              href={`/campaigns/${params?.campaignId}?q=${generateIdFromName(
                categoryInfo?.name
              )?.replaceAll("-", " ")}`}
              text={"ADD VOTE"}
              className="rounded-full ml-3 bg-yellow-400"
            /> */}
          </div>

          <PlainTable
            columns={[
              { Header: "S/N", accessor: "sn" },
              { Header: "Candidate Name", accessor: "fullname" },
              { Header: "Candidate Code", accessor: "code" },
              { Header: "Number of votes", accessor: "totalVoteCount" },
            ]}
            data={data}
          />
        </div>

        <div className="flex flex-row flex-wrap w-full mt-3">
          {/* {categoryInfo?.candidates && categoryInfo?.candidates.length > 0 ? (
            categoryInfo?.candidates.map((eachCandidate) => (
              <VotingCandidate
                name={eachCandidate.name}
                votes={eachCandidate.votes}
                sx={{
                  margin: "1.5rem 1.5rem 0 0",
                  width: "calc(25% - 1.5rem)",
                }}
                color={2}
              />
            ))
          ) : (
            <EmptyPlaceholder />
          )} */}
        </div>
      </section>
    </>
  );
}

export default VoteResults;
