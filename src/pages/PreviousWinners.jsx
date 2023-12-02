import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FaCalendarTimes } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

import Button from "../components/common/Button";
import Stack from "../components/common/Stack";
// import Lottie from "../components/common/Lottie";

// import noSearchAnimation from "../assets/lotties/animation_no_search.json";
import VotingCandidate from "../components/cards/VotingCandidate";
import { generateIdFromName } from "../utility";

import { getRecentWinners } from "../redux/actions";
import TextInput from "../components/common/TextInput";
import Placeholder from "../components/Placeholder";
import { useDispatch, useSelector } from "react-redux";
import { getAllSchools } from "../redux/actions/general.action";

function PreviousWinners() {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [association, setAssociation] = useState("");

  const schools = useSelector((store) => store.General.schools?.data);

  useEffect(() => {
    dispatch(getAllSchools({ isOngoing: true }));
    (async () => {
      const res = await getRecentWinners(association);
      console.log(res);
      setCategories(res);
    })();
  }, [association, dispatch]);

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
          <h2 className="text-4xl capitalize font-bold text-center">
            Previous Winners
          </h2>

          <p
            className="main-subtitle font-medium mt-4 text-sm text-center text-gray-200"
            style={{ maxWidth: "600px" }}
          >
            Kindly choose the campaign you want to support. All voting
            activities are currently done on WhatsApp
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center mt-10 w-full">
            <div
              className="flex flex-row items-center rounded-full bg-slate-500 text-center outline-none px-2 mx-2 mb-3 sm:mb-0 w-full sm:w-auto"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                minWidth: "190px",
              }}
            >
              <MdSchool
                fontSize={20}
                style={{
                  padding: "0 10px",
                  border: "1px solid transparent",
                  width: "55px",
                  height: "55px",
                }}
              />
              <select
                className="bg-transparent border-none p-4 w-full text-center outline-none"
                placeholder="Search for a voting category..."
                value={association}
                onChange={(ev) => setAssociation(ev.target.value)}
              >
                <option value={""}>All Schools</option>
                {schools &&
                  schools.length > 0 &&
                  schools.map((eachSchool, index) => (
                    <option key={index} value={eachSchool?.id}>
                      {eachSchool?.name}
                    </option>
                  ))}
              </select>
            </div>

            <TextInput
              className="order-first sm:order-none mx-2 mb-3 sm:mb-0"
              placeholder="Search for a voting category..."
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
              inputProps={{
                style: { padding: "1rem" },
              }}
            />

            <div
              className="flex flex-row items-center rounded-full bg-slate-500 text-center text-sm outline-none px-2 mx-2 mb-3 sm:mb-0 w-full sm:w-auto"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                minWidth: "200px",
              }}
            >
              <FaCalendarTimes
                fontSize={18}
                style={{
                  padding: "0 10px",
                  border: "1px solid transparent",
                  width: "45px",
                  height: "45px",
                }}
              />
              <input
                type="date"
                className="bg-transparent border-none p-4 w-full text-center outline-none"
                value={"2023-09-23"}
              />
            </div>
          </div>
        </Stack>
      </section>

      {categories && categories.length > 0 ? (
        categories.map((eachCategory, index) => (
          <section
            key={index}
            id={generateIdFromName(eachCategory?.name)}
            className="flex flex-col sm:flex-row items-center justify-center mb-6"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              minHeight: "unset",
              height: "auto",
            }}
          >
            <div className="flex flex-row justify-center flex-wrap w-full mb-3">
              {eachCategory?.winner && eachCategory?.candidates.length > 0 ? (
                <VotingCandidate
                  color={1}
                  name={eachCategory?.winner?.name}
                  votes={eachCategory?.winner?.votes}
                  category={eachCategory?.name}
                  sx={{
                    margin: "1.5rem 0.75rem 0 0",
                    width: "calc(60% - 1.5rem)",
                    minWidth: "250px",
                  }}
                  avatar2="true"
                  canVote={false}
                  phone={eachCategory?.winner?.phone}
                  email={eachCategory?.winner?.email}
                  disabledActions={
                    !eachCategory?.winner?.email && !eachCategory?.winner?.phone
                  }
                />
              ) : (
                <Placeholder
                  message={
                    "There are no ongoing campaigns at the moment. Please check back some other time."
                  }
                  action={
                    <Button
                      href="/"
                      text="Return Home"
                      className="rounded-md bg-yellow-400"
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

            <div
              className="flex flex-col justify-between items-center sm:items-start w-full"
              // sx={{ minWidth: "300px" }}
            >
              <Stack className="items-center sm:items-start w-full mt-8 sm:mt-0">
                <h2 className="text-3xl capitalize font-medium">
                  {eachCategory?.name}
                </h2>
                <p className="mt-2 text-sm text-center sm:text-left">
                  {eachCategory?.description}
                </p>
              </Stack>

              <Button
                href={`/campaigns/${eachCategory?.campaign_id}/category/${eachCategory?.id}`}
                className="text-sm bg-yellow-400 flex-grow whitespace-nowrap mt-8 rounded-md"
                text={"Poll Results"}
              />
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
              "There are no previous winners at the moment. Please check back after a campaign has ended."
            }
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
                // disableElevation
              />
            }
          />
        </section>
      )}
    </>
  );
}

export default PreviousWinners;
