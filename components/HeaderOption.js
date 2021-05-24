import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import React from "react";
import Header_option from "./header_option";

function HeaderOption() {
  return (
    <div className="flex border-b text-sm lg:pl-52 lg:text-base lg:space-x-36 lg:justify-start w-full text-gray-700 justify-evenly ">
      <div className="flex space-x-6">
        <Header_option Icon={SearchIcon} title="all" selected />
        <Header_option Icon={PhotographIcon} title="images" />
        <Header_option Icon={PlayIcon} title="videos" />
        <Header_option Icon={NewspaperIcon} title="News" />
        <Header_option Icon={MapIcon} title="Maps" />
        <Header_option Icon={DotsVerticalIcon} title="more" />
      </div>
      <div className="flex space-x-4">
        <p className="link">settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
}

export default HeaderOption;
