import React from "react";
import { BsPerson } from "react-icons/bs";
import { SlBadge as BadgeIcon } from "react-icons/sl";
import Stack from "../common/Stack";
import Button from "../common/Button";

const Avatar = ({ src, alt }) => {
  return !src ? (
    <div
      className={`flex items-center justify-center p-1 rounded-full bg-slate-500 shadow-lg`}
      style={{ width: "150px", height: "150px" }}
    >
      <BsPerson fontSize={38} />
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      className={`flex items-center justify-center p-1 rounded-full bg-slate-500 shadow-md`}
      style={{ width: "150px", height: "150px" }}
    />
  );
};

function VotingCandidate({
  category,
  name = "",
  votes = 0,
  color = 0,
  avatar1 = null,
  avatar2 = "",
  sx = {},
  canVote = false,
  voteUrl = "#",
  phone = null,
  email = null,
  disabledActions = false,
}) {
  const colorMap = {
    0: {
      bg: "bg-slate-500",
    },
    1: {
      bg: "bg-green-700",
    },
    2: {
      bg: "bg-yellow-600",
    },
  };

  return (
    <Stack
      className={`vote-candidate ${colorMap[color]?.bg} cursor-pointer overflow-hidden justify-between`}
      style={{ ...sx }}
    >
      <div
        className={`relative flex flex-grow items-center justify-center border border-b-0 border-slate-400 p-8 bg-slate-300`}
      >
        {<Avatar src={avatar1} alt={name} />}
        {avatar2 && (
          <div
            className="absolute bottom-6 right-6 flex items-center justify-center p-1 rounded-full bg-yellow-500 shadow-lg"
            style={{ width: "50px", height: "50px", zIndex: "+599" }}
          >
            {/* <BsPerson fontSize={20} /> */}
            <BadgeIcon fontSize={22} className="fill-black" />
          </div>
        )}
      </div>

      <Stack className={`relative px-6 py-5 flex-grow h-full`}>
        {category && (
          <span className="text-sm font-medium mb-1">{category}</span>
        )}
        <h3 className="font-bold mb-1.5 text-lg uppercase">{name}</h3>
        <span className="text-xs font-medium mt-auto">{`${votes} Votes`}</span>

        {!disabledActions && (
          <div
            className={`candidate-actions flex flex-row flex-wrap items-center justify-center absolute px-6 py-3 flex-grow w-full min-h-full ${colorMap[color]?.bg}`}
            style={{ zIndex: "+999" }}
          >
            {phone && (
              <Button
                href={"/previous-winners"}
                text={"Call"}
                className="rounded-md mx-1 my-1 text-xs"
                style={{ ...styles.actionButton }}
              />
            )}
            {email && (
              <Button
                href={"/previous-winners"}
                text={"Send Mail"}
                className="rounded-md mx-1 my-1 text-xs capitalize"
                style={{ ...styles.actionButton }}
              />
            )}
            {canVote && (
              <Button
                href={voteUrl}
                text={`vote 4 ${name}`}
                className="rounded-md mx-1 my-1 text-xs capitalize"
                style={{ ...styles.actionButton }}
              />
            )}
          </div>
        )}
      </Stack>
    </Stack>
  );
}

const styles = {
  actionButton: {
    padding: "10px 15px",
  },
};

export default VotingCandidate;
