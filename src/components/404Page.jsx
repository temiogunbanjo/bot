// import { Stack } from "@mui/material";
import Stack from "./common/Stack";
import CustomButton from "./common/Button";
import Lottie from "./common/Lottie";
import Header from "./Header";

import noSearchAnimation from "../assets/lotties/animation_no_search.json";

export default function NotFoundPage() {
  return (
    <>
      <Header />
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ width: "100%", height: "calc(98vh - 100px)" }}
      >
        <Lottie data={noSearchAnimation} width={150} height={150} />
        <Stack direction={"row"} alignItems={"flex-start"} className="mt-8">
          <h1
            className="font-bold my-0"
            style={{ fontSize: "80px", margin: 0, letterSpacing: "1px", lineHeight: 1 }}
          >
            404
          </h1>
          <h2
            className="text-left border-l-4 ml-5 pl-2"
            style={{ fontSize: "1.6rem", maxWidth: "400px", paddingLeft: "1.5rem", }}
          >
            Unfortunaltely, we couldn't find the page you are looking for.
          </h2>
        </Stack>

        <CustomButton
          href="/dashboard"
          value="Return To Dashboard"
          sx={{
            fontSize: "14px",
            fontWeight: 700,
            padding: "8px 16px",
            margin: "35px auto 0",
            boxShadow: "none",
            borderRadius: "8px",
            color: "white",
            width: "220px",
          }}
          disableElevation
        />
      </Stack>
    </>
  );
}
