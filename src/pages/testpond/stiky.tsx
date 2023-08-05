import React from "react";
import StickyBox from "react-sticky-box";

export default function SetStiky() {
  return (
    <div style={{ display: "flex", alignItems: "flex-start" }}>
      <StickyBox >
        <img src="/img/messenger-Logo.png" className=" w-[100px] right-0" alt="" />
        </StickyBox>
      <div style={{ height: 1500, border: "3px solid blue" }}>Main Content
      <p></p></div>

    </div>
  );
}

// const Page = () => (
//   <div className="row">
//     <StickyBox offsetTop={20} offsetBottom={20}>
//       <div>Sidebar</div>
//       <img src="/img/messenger-Logo.png" className=" absolute w-16 right-0" alt="" />
//     </StickyBox>
//     <div>Content</div>
//   </div>
// );
