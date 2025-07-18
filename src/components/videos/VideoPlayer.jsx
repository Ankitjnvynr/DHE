import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Iframe from "react-iframe";

export const VideoPlayer = ({ trigger, src }) => {
  return (
    <>
      <Popup
        trigger={trigger}
        position=""
        modal={true}
        contentStyle={{ width: "80%", maxWidth: 1920 }}
        lockScroll
      >
        {/* <Iframe
          url={src ?? "https://www.youtube.com/embed/rRid6GCJtgc"}
          width="100%"
          height="400px"
          id=""
          className=""
          display="block"
          position="relative"
        /> */}
        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
          <iframe
            src="https://www.youtube.com/embed/7cp3klmAEik?si=Kt9o_qGhfI0FSMq-"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          />
        </div>

     </Popup>
    </>
  );
};
