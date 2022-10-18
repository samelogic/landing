import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/common/Hero";
import Feature from "../sections/pricing/Feature";
import PricingTable1 from "../sections/pricing/PricingTable1";
import FAQ from "../sections/pricing/FAQ";
import PricingTable2 from "../sections/pricing/PricingTable2";

const Pricing1 = () => {
  return (
    <>
      <PageWrapper footerDark>
        <Hero title="Pricing">
          We don't win if you don't win! Our model is setup so you pay when your
          test wins!
        </Hero>
        <PricingTable1 />
        {/* <PricingTable2/> */}
        <Feature />
        {/* <FAQ /> */}
      </PageWrapper>
    </>
  );
};
export default Pricing1;
