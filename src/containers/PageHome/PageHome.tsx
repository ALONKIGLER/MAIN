import React from "react";
import SectionHowItWork from "components/SectionHowItWork/SectionHowItWork";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionPromo1 from "components/SectionPromo1";
import SectionHero2 from "components/SectionHero/SectionHero2";
import SectionSliderLargeProduct from "components/SectionSliderLargeProduct";
import SectionSliderProductCard from "components/SectionSliderProductCard";
import DiscoverMoreSlider from "components/DiscoverMoreSlider";
import SectionGridMoreExplore from "components/SectionGridMoreExplore/SectionGridMoreExplore";
import SectionPromo2 from "components/SectionPromo2";
import SectionSliderCategories from "components/SectionSliderCategories/SectionSliderCategories";
import SectionGridFeatureItems from "./SectionGridFeatureItems";
import SectionPromo3 from "components/SectionPromo3";
import SectionClientSay from "components/SectionClientSay/SectionClientSay";
import SectionMagazine5 from "containers/BlogPage/SectionMagazine5";
import Heading from "components/Heading/Heading";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import { PRODUCTS, SPORT_PRODUCTS } from "data/data";

import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

function PageHome() {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .from("#welcome", {
          opacity: 0,
          duration: 0.5,
        });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <div className="relative" ref={comp}>
        <div
          id="intro-slider"
          className="h-screen p-10 bg-gray-50 absolute top-0 left-0 font-spaceGrotesk z-10 w-full flex flex-col gap-10 tracking-tight"
        >
          <h1 className="text-9xl" id="title-1">
            Software Engineer
          </h1>
          <h1 className="text-9xl" id="title-2">
            Designer
          </h1>
          <h1 className="text-9xl" id="title-3">
            Freelancer
          </h1>
        </div>
        <div className="h-screen flex bg-gray-950 justify-center place-items-center">
          <h1
            id="welcome"
            className="text-9xl font-bold text-gray-100 font-spaceGrotesk"
          >
            Welcome.
          </h1>
        </div>

        {/* <section className="panel red h-screen p-10 bg-black absolute top-0 left-0 font-spaceGrotesk z-10 w-full ">
          ONE
        </section>
        <section className="panel orange h-screen p-10 bg-gray-50 absolute top-0 left-0 font-spaceGrotesk z-10 w-full ">
          TWO
        </section>
        <section className="panel purple h-screen p-10 bg-gray-50 absolute top-0 left-0 font-spaceGrotesk z-10 w-full ">
          THREE
        </section>
        <section className="panel green h-screen p-10 bg-gray-50 absolute top-0 left-0 font-spaceGrotesk z-10 w-full ">
          FOUR
        </section>
        <section className="panel gray h-screen p-10 bg-gray-50 absolute top-0 left-0 font-spaceGrotesk z-10 w-full ">
          FIVE
        </section> */}
      </div>
    </div>
  );
}

export default PageHome;
