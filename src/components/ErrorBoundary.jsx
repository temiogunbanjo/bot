import React, { Component } from "react";
import { PiLinkBreakBold as BreakIcon } from "react-icons/pi";
import Header from "./Header";

// import noSearchAnimation from "../assets/lotties/animation_no_search.json";
import Stack from "./common/Stack";
import CustomButton from "./common/Button";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught Error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <Header />
          <Stack
            className="items-center justify-center"
            sx={{ width: "100%", height: "calc(98vh - 100px)" }}
          >
            <Stack direction={"row"} alignItems={"center"} className="mt-8">
              {/* <Lottie data={noSearchAnimation} width={100} height={100} /> */}
              <BreakIcon fontSize={"58px"} style={{ marginRight: "10px" }} />
              <h1
                className="font-bold my-0"
                style={{
                  fontSize: "50px",
                  margin: 0,
                  letterSpacing: "1px",
                  lineHeight: 1,
                }}
              >
                Snap!
              </h1>
            </Stack>

            <h2
              className="text-center mt-3"
              style={{
                fontSize: "1.2rem",
                maxWidth: "620px",
                paddingLeft: "1.5rem",
              }}
            >
              A serious error seems to have occured. Please try refreshing the
              page or{" "}
              <a
                className=""
                href="mailto: contact@tradebuza.com"
                style={{ color: "#009688", textDecoration: "underline" }}
              >
                contact support
              </a>{" "}
              if error persists.
            </h2>
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
    return this.props.children;
  }
}

export default ErrorBoundary;
