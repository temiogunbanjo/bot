import React from "react";
import { PiLightbulbBold as BreakIcon } from "react-icons/pi";

import Stack from "./common/Stack";

function Placeholder({ message = "", action = null }) {
  return (
    <Stack
      className="my-5"
      sx={{
        width: "100%",
        alignItems: "center",
      }}
    >
      {/* <Lottie data={noSearchAnimation} width={120} height={120} /> */}
      <BreakIcon fontSize={"85px"} className="fill-yellow-400"/>
      <p
        className="text-center pl-2 mt-6 mb-1 text-base text-slate-300"
        style={{
          // fontSize: "1.6rem",
          maxWidth: "390px",
        }}
      >
        {message}
      </p>

      {action}
    </Stack>
  );
}

export default Placeholder;
