// import { useRef } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
// import "../styles.css";
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
  const cube3 = useRef<SPEObject>();
  const cube4 = useRef<SPEObject>();
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
          // markers: true,
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

  const [splineApp, setSplineApp] = useState<Application | null>(null);

  function onLoad(spline: Application) {
    setSplineApp(spline);
    const obj = spline.findObjectById("6d82cec8-9cd1-4d98-b2bc-7e49560b297a");
    cube.current = obj;

    const obj2 = spline.findObjectById("975a9a6e-6085-4985-890f-4b4e7d2ed6f4");
    cube2.current = obj2;

    const obj3 = spline.findObjectById("bc794e79-b245-44ba-9fcd-624c0dcfce71");
    cube3.current = obj3;

    const obj4 = spline.findObjectById("b475fc5a-302d-42bb-9a06-01acb8bdf4cb");
    cube4.current = obj4;
  }

  useEffect(() => {
    selectedData2.forEach((product) => {
      if (cube.current && cube.current.uuid !== product.fleg) {
        cube.current.visible = false;
        console.log("1");
      } else if (cube.current && cube.current.uuid === product.fleg) {
        cube.current.visible = true;
      }

      if (cube2.current && cube2.current.uuid !== product.fleg) {
        cube2.current.visible = false;
        console.log("1");
      } else if (cube2.current && cube2.current.uuid === product.fleg) {
        cube2.current.visible = true;
      }

      if (cube3.current && cube3.current.uuid !== product.fleg) {
        cube3.current.visible = false;
        console.log("1");
      } else if (cube3.current && cube3.current.uuid === product.fleg) {
        cube3.current.visible = true;
      }

      if (cube4.current && cube4.current.uuid !== product.fleg) {
        cube4.current.visible = false;
        console.log("1");
      } else if (cube4.current && cube4.current.uuid === product.fleg) {
        cube4.current.visible = true;
      }

      console.log("122s", product.fleg);
      if (splineApp) {
        splineApp.emitEvent("mouseDown", `${product.fleg}`);
      }
    });
  }, [selectedData2]);

  function moveObj() {
    console.log(cube.current); // Spline Object => { name: 'Cube', id: '8E8C2DDD-18B6-4C54-861D-7ED2519DE20E', position: {}, ... }
    console.log(cube2.current); // Spline Object => { name: 'Cube', id: '8E8C2DDD-18B6-4C54-861D-7ED2519DE20E', position: {}, ... }

    if (cube.current && cube2.current) {
      cube.current.visible = true;
      cube2.current.visible = false;
      console.log("1");
    }
  }

  const triggerOne = () => {
    console.log("dw");
    // if (splineApp) {
    //   console.log("dw1");
    //   console.log(splineApp);
    //   splineApp.emitEvent("mouseDown", "6d82cec8-9cd1-4d98-b2bc-7e49560b297a");
    // }

    if (splineApp) {
      console.log("dw1");
      console.log(splineApp);
      splineApp.emitEvent("mouseDown", "975a9a6e-6085-4985-890f-4b4e7d2ed6f4");
    }
  };

  return (
    <div ref={component}>
      <div className="fix flex flex-col justify-center items-center h-96 md:h-96 sm:h-72 w-screen  z-50 bg-primary-50">
        <Spline
          scene="https://prod.spline.design/TvefK7GHeVgaprGq/scene.splinecode"
          onLoad={onLoad}
          className="bg-primary-50"
        />
      </div>

      {/* <div className="pl-5 pr-5 pt-3 bg-primary-50">
        <button type="button" onClick={triggerOne}>
          Trigger Spline Animation
        </button>
      </div> */}

      <div className="pl-5 pr-5 pt-3 bg-primary-50">
        <SectionFleg
          heading="בחירת דגם"
          subHeading=""
          headingFontClassName="text-2xl font-semibold"
          headingClassName="mb-3 text-neutral-900 dark:text-neutral-50 hidden sm:block"
          // className="sm:hidden"
        />
      </div>

      <div className="last flax h-screen bg-primary-50 "></div>
    </div>
  );
}
