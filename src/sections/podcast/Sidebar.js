import React from "react";

import {
  CardSidebar,
  Block,
  TitleSidebar,
  TitlePost,
  Date,
  CatList,
  CatListItem,
} from "../../components/Sidebar";

import InputSearch from "../../components/InputSearch";
import CTAButton from "../../components/CTAButton";

const Sidebar = () => {
  return (
    <>
      <CardSidebar>
        <TitleSidebar>Save money by validating ideas</TitleSidebar>
        <Block>
          <TitlePost>
            Place a mock on your live website, collect analytics and feedback
            before building. No code needed!
          </TitlePost>
          <CTAButton />
        </Block>
      </CardSidebar>
    </>
  );
};
export default Sidebar;
