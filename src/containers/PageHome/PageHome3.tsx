import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import "../styles.css";
import Spline from "@splinetool/react-spline";
import AccountOrder from "containers/AccountPage/AccountOrder";
import SectionSliderLargeProduct from "components/SectionSliderLargeProduct";
// import AccountOrder from

gsap.registerPlugin(ScrollTrigger);

export default function Scene() {
  const component = useRef<HTMLDivElement | null>(null);
  const slider = useRef<HTMLDivElement | null>(null);

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

  return (
    <div className="Appa" ref={component}>
      <div className="firstContainer">
        <Spline scene="https://prod.spline.design/cESggJnYBXJ7Hwd7/scene.splinecode" />
      </div>
      <div ref={slider} className="containerr ">
        <div className="panel bg-slate-100">
          <div>
            SCROLL DOWN
            <div className="scroll-down">
              <div className="arrow"></div>
            </div>
          </div>
        </div>
        <div className="panel p-10  bg-primary-50 primary-50">
          <SectionSliderLargeProduct />
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
