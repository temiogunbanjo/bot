import React from "react";
import Stack from "./common/Stack";

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center py-10 px-6">
      <div className="flex flex-row flex-wrap lg:flex-nowrap w-full items-stretch justify-between p-2 space-x-10 space-y-8">
        <img
          className="flex flex-none"
          src={require(`../assets/images/GH Schools.png`)}
          alt="GH Schools"
          width={186}
          height={213}
          style={{
            objectFit: "contain",
            width: "230px",
            height: "auto",
          }}
        />

        <Stack className="w-1/2 lg:w-auto">
          <h3>Info</h3>
          <span className="font-medium mt-1.5 capitalize">
            <a href="https://admissions.ghschools.online/" target="blank">
              admissions
            </a>
          </span>
          <span className="font-medium mt-1.5 capitalize">
            <a
              href="https://admissions.ghschools.online/departments"
              target="blank"
            >
              Our Courses
            </a>
          </span>
          <span className="font-medium mt-1.5 capitalize">
            <a href="https://admissions.ghschools.online/FAQ" target="blank">
              Visit Our FAQs
            </a>
          </span>
          <span className="font-medium mt-1.5 capitalize">
            <a href="https://ghschools.online/" target="blank">
              Visit Website
            </a>
          </span>
        </Stack>

        <Stack className="max-w-xl">
          <h3>Contact Us</h3>
          <span className="font-medium mt-1.5">
            Achimota Accra near Achimota New Transport Terminal and Adjacent the
            Achimota ICGC
          </span>
          <span className="font-medium mt-1.5">
            Phone: <a href="tel:+233302424909">+233 30 242 4909</a> (landline)
          </span>
          <span className="font-medium mt-1.5">
            Alt. 1: <a href="tel:+233204622250">+233 20 462 2250</a>
          </span>
          <span className="font-medium mt-1.5">
            Alt. 2: <a href="tel:+233277622250">+233 27 762 2250</a>
          </span>
          <span className="font-medium mt-1.5">
            Alt. 3: <a href="tel:+233544622250">+233 54 462 2250</a>
          </span>
          <span className="font-medium mt-1.5">
            Email:{" "}
            <a href="mailto:admissions@ghschools.online">
              admissions@ghschools.online
            </a>
          </span>
        </Stack>
      </div>

      <Stack className="items-center justify-center w-full p-2 mt-4">
        <span className="font-medium">{`GH Schools ${new Date().getFullYear()}, All Rights Reserved`}</span>
        <span className="font-medium mt-1">
          Powered by{" "}
          <a href="https://learnira.org" className="" target="blank">
            Learnira
          </a>
        </span>
      </Stack>
    </footer>
  );
}

export default Footer;
