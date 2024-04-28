import React from "react";
import MyRouter from "routers/index";
import { Helmet, HelmetProvider } from "react-helmet-async";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, useGSAP);

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Ciseco || Shop - eCommerce React template</title>
        <meta
          name="description"
          content="Ciseco || Shop - eCommerce React template"
        />
      </Helmet>

      {/* MAIN APP */}
      <div className="bg-white text-base dark:bg-slate-900 text-slate-900 dark:text-slate-200">
        <MyRouter />
      </div>
    </HelmetProvider>
  );
}

export default App;

// import React from "react";
// import MyRouter from "routers/index";
// import { Helmet, HelmetProvider } from "react-helmet-async";

// import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// import { useGSAP } from "@gsap/react";

// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import { useLayoutEffect, useRef } from "react";
// // import "../styles.css";
// import Spline from "@splinetool/react-spline";

// // gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, useGSAP);

// gsap.registerPlugin(ScrollTrigger);

// function App() {
//   const component = useRef<HTMLDivElement | null>(null);
//   const slider = useRef<HTMLDivElement | null>(null);

//   useLayoutEffect(() => {
//     let ctx = gsap.context(() => {
//       let panels = gsap.utils.toArray(".panel");
//       gsap.to(panels, {
//         xPercent: -100 * (panels.length - 1),
//         ease: "none",
//         scrollTrigger: {
//           trigger: slider.current,
//           pin: true,
//           //   start: "top top",
//           scrub: 1,
//           snap: 1 / (panels.length - 1),
//           end: () => `+=${slider.current ? slider.current.offsetWidth : 100}`, // Add null check here
//           markers: true,
//         },
//       });
//     }, component);
//     return () => ctx.revert();
//   });

//   return (
//     <HelmetProvider>
//       <Helmet>
//         <title>Ciseco || Shop - eCommerce React template</title>
//         <meta
//           name="description"
//           content="Ciseco || Shop - eCommerce React template"
//         />
//       </Helmet>

//       <div className="App" ref={component}>
//         <div className="firstContainer flex flex-col justify-center items-center h-screen bg-yellow-400">
//           {/* Spline component remains unchanged */}
//           <Spline scene="https://prod.spline.design/cESggJnYBXJ7Hwd7/scene.splinecode" />
//         </div>
//         <div ref={slider} className="container flex flex-wrap w-full h-screen">
//           <div className="description panel blue flex w-full h-screen bg-blue-500">
//             <div>
//               SCROLL DOWN
//               <div className="scroll-down">
//                 <div className="arrow"></div>
//               </div>
//             </div>
//           </div>
//           {/* Repeat for each color panel */}
//           <div className="panel w-full h-screen bg-red-500">ONE</div>
//           <div className="panel w-full h-screen bg-orange-500">TWO</div>
//           <div className="panel w-full h-screen bg-purple-500">THREE</div>
//           <div className="panel w-full h-screen bg-red-500">ONE</div>
//           <div className="panel w-full h-screen bg-orange-500">TWO</div>
//           <div className="panel w-full h-screen bg-purple-500">THREE</div>
//           <div className="panel w-full h-screen bg-red-500">ONE</div>
//           <div className="panel w-full h-screen bg-orange-500">TWO</div>
//           <div className="panel w-full h-screen bg-purple-500">THREE</div>
//           {/* ... other panels ... */}
//         </div>
//         {/* Repeat for each last container */}
//         <div className="lastContainer h-screen bg-red-500">Last Container</div>
//         <div className="lastContainer h-screen bg-purple-500">
//           Last Container
//         </div>
//         <div className="lastContainer h-screen bg-orange-500">
//           Last Container
//         </div>
//       </div>

//       {/* MAIN APP */}
//       <div className="bg-white text-base dark:bg-slate-900 text-slate-900 dark:text-slate-200">
//         <MyRouter />
//       </div>
//     </HelmetProvider>
//   );
// }

// export default App;
