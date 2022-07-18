import {
  EmailOutlined,
  Facebook,
  Instagram,
  LocalPhoneOutlined,
  LocationOnOutlined,
  Pinterest,
  Twitter,
} from "@material-ui/icons";
import React from "react";

const Footer = () => {
  const icon_style =
    "cursor-pointer p-2 m-3 text-white bg-blue-700 rounded-full";
  return (
    <div className="flex items-center justify-center p-2 mobile:flex-col mobile:items-start ">
      <div className="flex-1 flex flex-col flex-wrap p-2 ">
        {/* Store Information */}
        <h1 className="text-[25px]  ">Honey Keeps Code</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto et
          culpa, id facilis blanditiis commodi nostrum qui nihil corrupti sunt
          quibusdam in praesentium mollitia? Impedit, sapiente voluptas! Labore,
          ad iste!
        </p>
        <div className="flex items-center justify-center self-start mt-3 ">
          <div className={icon_style + " bg-blue-700"}>
            <Facebook />
          </div>
          <div className={icon_style + " bg-orange-500"}>
            <Instagram />
          </div>
          <div className={icon_style + " bg-red-600"}>
            <Pinterest />
          </div>
          <div className={icon_style + " bg-sky-400"}>
            <Twitter />
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col p-2  ">
        {/* Contact Information */}
        <div className="flex m-3">
          <LocationOnOutlined />
          <p className="pl-3">State of California </p>
        </div>

        <div className="flex m-3">
          <LocalPhoneOutlined />
          <p className="pl-3">+91 123456789</p>
        </div>
        <div className="flex m-3">
          <EmailOutlined />
          <p className="pl-3">HoneyKeepsCOde@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
