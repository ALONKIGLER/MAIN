// import { useRef } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "../styles.css";
import Spline from "@splinetool/react-spline";
import AccountOrder from "containers/AccountPage/AccountOrder";
import SectionSliderLargeProduct from "components/SectionSliderLargeProduct";
import SectionFleg from "../../components/Costome/SectionFleg";
// import AccountOrder from
import type { Application, SPEObject } from "@splinetool/runtime";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getProduct } from "app/mediaRunning/product";

gsap.registerPlugin(ScrollTrigger);

export default function Scene() {
  const component = useRef<HTMLDivElement | null>(null);
  const slider = useRef<HTMLDivElement | null>(null);

  const cube = useRef<SPEObject>();
  const cube2 = useRef<SPEObject>();
  const dispatch = useAppDispatch();
  const selectedData2 = useAppSelector((state) => state.products);

  const showObj = () => {
    console.log("7878", selectedData2);
  };

  useLayoutEffect(() => {
    console.log(
      "aSD",
      `+=${slider.current ? slider.current.offsetWidth * 6 : 0}`
    );
    console.log("aSD", `+=${slider.current ? slider.current.offsetWidth : 0}`);
    console.log("aD", slider.current);
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".fix");
      gsap.to(panels, {
        // xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          // pinnedContainer: ".App",
          trigger: ".fix",
          scrub: 1,
          anticipatePin: 1,
          pinType: "fixed",
          pin: true,
          pinSpacing: false,
          start: ".containerr",
          markers: true,
          end: "+=1500",
          // animation: tl,
          toggleActions: "play none none reverse",
        },
      });
    }, component);
    return () => ctx.revert();
  });

  // onLoad={(spline: Application) => {
  //   cube.current = spline.findObjectByName('Cube');
  // }}

  function onLoad(spline: Application) {
    const obj = spline.findObjectById("084c7a9b-a46a-4656-a406-94df98091545");
    cube.current = obj;

    const obj2 = spline.findObjectById("c2fcdcf7-3acc-4a9c-8f15-0583c48159fd");
    cube2.current = obj2;

    console.log("e2r", cube.current);
    console.log("e2r", cube2.current);
  }

  useEffect(() => {
    selectedData2.forEach((product) => {
      if (product.fleg === "ero" && cube.current && cube2.current) {
        cube.current.visible = false;
        cube2.current.visible = true;
      }

      // if (product.fleg === "ero" && cube.current) {
      //   cube.current.visible = false;
      // }

      // if (product.fleg === "ero" && cube2.current) {
      //   cube2.current.visible = false;
      // }
    });
  }, [selectedData2]);

  function moveObj() {
    console.log(cube.current); // Spline Object => { name: 'Cube', id: '8E8C2DDD-18B6-4C54-861D-7ED2519DE20E', position: {}, ... }
    console.log(cube2.current); // Spline Object => { name: 'Cube', id: '8E8C2DDD-18B6-4C54-861D-7ED2519DE20E', position: {}, ... }

    // move the object in 3D space
    // cube.current.position.x += 10;
    // cube.current.src = pic;

    // cube.current ? (cube.current.visible = false) : null;
    // cube2.current ? (cube2.current.visible = false) : null;

    if (cube.current && cube2.current) {
      cube.current.visible = true;
      cube2.current.visible = false;
      console.log("1");
    }

    // if (cube.current) {
    //   cube.current.visible = false;
    //   console.log("1")
    // }

    // if (cube2.current) {
    //   console.log("1");
    //   cube2.current.visible = false;
    // }
  }
  return (
    <div ref={component}>
      <div className=" w-screen h-screen  bg-secondary-100">cool</div>
      {/* <div className="w-screen h-1/2"> */}
      <div className="fix flex flex-col justify-center items-center h-96  md:h-96 sm:h-72  w-screen bg-secondary-100 z-50">
        {/* <div className="  fix h-96 bg-secondary-100"> */}
        <Spline
          scene="https://prod.spline.design/cESggJnYBXJ7Hwd7/scene.splinecode"
          onLoad={onLoad}
        />
        {/* </div> */}
        {/* </div> */}
      </div>

      <div className=" pl-5 pt-3 bg-secondary-100">
        <SectionFleg
          heading="בחירת דגם"
          subHeading=""
          headingFontClassName="text-2xl font-semibold"
          headingClassName="mb-3  text-neutral-900 dark:text-neutral-50"
        />
      </div>

      <div className="last flax h-screen bg-primary-50 ">=</div>
    </div>
  );
}
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}
