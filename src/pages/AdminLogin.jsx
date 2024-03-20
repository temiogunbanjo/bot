import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import Stack from "../components/common/Stack";
import Button from "../components/common/Button";
import Campaign from "../components/cards/Campaign";
import Placeholder from "../components/Placeholder";
import VotingCandidate from "../components/cards/VotingCandidate";
// import Lottie from "../components/common/Lottie";

// import noSearchAnimation from "../assets/lotties/animation_no_search.json";
import { generateIdFromName } from "../utility";
import { getAllCampaigns } from "../redux/actions/campaign.action";
import TextInput from "../components/common/TextInput";

function AdminHome() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCampaigns({ isOngoing: true }));
  }, [dispatch]);

  return (
    <div className="flex flex-col" sx={{ width: "100%" }}>
      {/* <HeaderAdmin /> */}
      <Stack sx={{ width: "100%" }}>
        {/* <Drawer isOpen={mobileOpen} toggler={handleDrawerToggle} /> */}
        <main id="main-page-content">
          <section className="flex flex-col items-center justify-center w-full">
            <h1
              className="inline-block uppercase text-3xl font-bold text-center"
              // style={{ letterSpacing: "0.5px" }}
            >
              <span className="text-green-500">Gh</span>{" "}
              <span className="text-red-500">Schools</span>{" "}
              <span className="text-yellow-300">Voting</span>{" "}
              <span className="text-white">Administration</span>
            </h1>
            <Formik
              initialValues={{}}
              onSubmit={async (values) => {
                navigate("/admin/dashboard");
              }}
            >
              {({ values, errors, handleSubmit }) => (
                <form
                  onSubmit={handleSubmit}
                  className="mt-8 border border-gray-400 rounded-md p-8 w-1/2 min-w-[400px]"
                >
                  <Stack>
                    <TextInput placeholder="Enter username" />
                  </Stack>

                  <Stack sx={{ marginTop: "12px" }}>
                    <TextInput placeholder="Enter password" type="password" />
                  </Stack>

                  <Stack
                    className="justify-between items-center flex-wrap px-1 text-sm"
                    sx={{
                      marginTop: "22px",
                      marginBottom: "22px",
                      flexDirection: "row",
                    }}
                  >
                    <Stack
                      sx={{ flexDirection: "row", alignItems: "center" }}
                      className="borhder"
                    >
                      <TextInput
                        placeholder="Enter password"
                        type="checkbox"
                        className="w-[28px] h-[28px]"
                        sx={{ padding: 0 }}
                        inputProps={{
                          style: { padding: 0 },
                        }}
                      />
                      <span className="ml-3 whitespace-nowrap">
                        Show password
                      </span>
                    </Stack>

                    <span>Contact support?</span>
                  </Stack>

                  <Button
                    text="LOGIN"
                    className="mt-1 mx-auto text-center w-full rounded-full"
                    style={{ display: "flex" }}
                  />
                </form>
              )}
            </Formik>
          </section>
        </main>
      </Stack>
    </div>
  );
}

export default AdminHome;
