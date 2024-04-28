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
import { useAppDispatch } from "../../app/hooks";
import { getProduct } from "app/mediaRunning/product";

gsap.registerPlugin(ScrollTrigger);

export default function Scene() {
  const component = useRef<HTMLDivElement | null>(null);
  const slider = useRef<HTMLDivElement | null>(null);

  const cube = useRef<SPEObject>();
  const cube2 = useRef<SPEObject>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  useLayoutEffect(() => {
    console.log(
      "aSD",
      `+=${slider.current ? slider.current.offsetWidth * 6 : 0}`
    );
    console.log("aSD", `+=${slider.current ? slider.current.offsetWidth : 0}`);
    console.log("aD", slider.current);
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: component.current,
          pin: true,
          //   start: "top top",
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => `+=${slider.current ? slider.current.offsetWidth : 0}`, // Add null check here
          markers: true,
        },
      });
    }, component);
    return () => ctx.revert();
  });

  function onLoad(spline: { findObjectById: (arg0: string) => any }) {
    const obj = spline.findObjectById("72acb3a2-2b53-4a5f-93de-de97b02fce10");
    const obj2 = spline.findObjectById("c4c40a51-7e3c-4276-9a2a-ca2a50bf8cf4");

    cube.current = obj;
    cube2.current = obj2;
  }

  function moveObj() {
    console.log("d", cube.current); // Spline Object => { name: 'Cube', id: '8E8C2DDD-18B6-4C54-861D-7ED2519DE20E', position: {}, ... }

    // move the object in 3D space
    // cube.current.position.x += 10;
    // cube.current.src = pic;
    if (cube.current && cube2.current) {
      cube.current.visible = false;
      cube2.current.visible = false;
    }

    if (cube.current) {
      cube.current.visible = false;
    }
  }

  return (
    <div className="Appa" ref={component}>
      <div className="firstContainer">
        <Spline
          scene="https://prod.spline.design/cESggJnYBXJ7Hwd7/scene.splinecode"
          onLoad={onLoad}
        />
      </div>
      <div ref={slider} className="containerr ">
        <div className="panel bg-slate-100">
          <div>
            SCROLL DOWN
            <button onClick={moveObj}>sdfsdf</button>
            <div className="scroll-down">
              <div className="arrow"></div>
            </div>
          </div>
        </div>
        <div className="panel p-10  bg-primary-50 primary-50">
          <SectionFleg
            heading="בחירת דגם"
            subHeading=""
            headingFontClassName="text-2xl font-semibold"
            headingClassName="mb-10 text-neutral-900 dark:text-neutral-50"
            className="bg-amber-300 "
          />
        </div>
        <div className="panel  bg-slate-50">TWO</div>
        <div className="panel purple">THREE</div>
        <div className="panel red">ONE</div>
        <div className="panel orange">TWO</div>
      </div>
      <div className="lastContainer">Last Container</div>
    </div>
  );
}
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}
