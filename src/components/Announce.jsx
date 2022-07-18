import { Close } from "@material-ui/icons";
import React, { useState } from "react";

const Announce = () => {
  const [announceStyle, setAnnounceStyle] = useState(
    "bg-[#834af3] font-bold text-white flex items-center justify-center"
  );
  return (
    <div className={announceStyle}>
      <h2>Hurry up its 40% off now</h2>
      <Close
        onClick={() => setAnnounceStyle(announceStyle + " hidden")} // ? In taiwind css we style are separated by spaces
        className="cursor-pointer"
      />
    </div>
  );
};

export default Announce;
