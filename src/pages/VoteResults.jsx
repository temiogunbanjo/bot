import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

import Stack from "../components/common/Stack";
import { generateRandomColor, generateIdFromName } from "../utility";

import { getSingleCategory } from "../redux/actions";
import PlainTable from "../components/PlainTable";
import TextInput from "../components/common/TextInput";
import Button from "../components/common/Button";
import Chart from "../components/common/Chart";

function VoteResults() {
  const params = useParams();
  const [categoryInfo, setCategoryInfo] = useState(null);

  const [pieWidth, pieHeight] = [440, 320];

  useEffect(() => {
    (async () => {
      const res = await getSingleCategory(
        params?.campaignId,
        params?.categoryId
      );
      setCategoryInfo(res);
    })();
  }, [params?.campaignId, params?.categoryId]);

  const data = useMemo(
    () =>
      categoryInfo?.candidates.map((each, index) => ({
        ...each,
        sn: index + 1,
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
          <span className="text-lg capitalize font-medium mb-6 text-center">
            {`Showing Vote Results For:`}
          </span>

          <h2 className="text-4xl capitalize font-bold text-center">
            {`${categoryInfo?.name || ""}`}
          </h2>

          <p
            className="main-subtitle mt-3 text-sm font-medium text-center text-gray-200"
            style={{ maxWidth: "600px" }}
          >{`${categoryInfo?.description || ""}`}</p>
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
          <Chart
            useGoogle={true}
            is3D={true}
            width={pieWidth}
            height={pieHeight}
            data={categoryInfo?.candidates.map((each) => {
              return {
                title: each?.name,
                value: each?.votes,
                color: generateRandomColor(),
              };
            })}
          />
        </div>

        <div
          className="flex flex-col w-full mt-3"
          style={{ maxWidth: "950px" }}
        >
          <div className="flex flex-row items-center justify-between mb-6 mt-10">
            <TextInput
              placeholder="Search for a candidate"
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

            <Button
              href={`/campaigns/${params?.campaignId}?q=${generateIdFromName(
                categoryInfo?.name
              )?.replaceAll("-", " ")}`}
              text={"ADD VOTE"}
              className="rounded-full ml-3 bg-yellow-400"
            />
          </div>

          <PlainTable
            columns={[
              { Header: "S/N", accessor: "sn" },
              { Header: "Name", accessor: "name" },
              { Header: "Number of votes", accessor: "votes" },
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
