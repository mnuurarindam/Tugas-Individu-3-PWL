import React from "react";
import RafikiCurious from "../assets/curiosity search-rafiki.png";
import layoutofberanda from "../assets/Layout of beranda.png";
import layoutoftentangandkontak from "../assets/Layout of tentang and kontak.png";

export const Curious = ({ width }) => {
  return (
    <>
      <a
        href="https://storyset.com/illustration/curiosity-search/rafiki#222831FF&hide=&hide=simple"
        target="_blank"
        rel="noreferrer"
      >
        <img
          width={width == null ? 300 : width}
          height={width == null ? 300 : width}
          src={RafikiCurious}
          alt="curiosity search-rafiki.png"
        />
      </a>
    </>
  );
};
export const LayoutOFBeranda = () => {
  return (
    <>
      <img
        className="full-width"
        src={layoutofberanda}
        alt="Layout of beranda.png"
      />
    </>
  );
};
export const LayoutOFTK = () => {
  return (
    <>
      <img
        className="full-width"
        src={layoutoftentangandkontak}
        alt="Layout of tentang and kontak.png"
      />
    </>
  );
};

export const PPGithubHendri = () => {
  return (
    <>
      <img
        src="https://avatars.githubusercontent.com/u/97578440?v=4"
        alt="henhen02.png"
        style={{
          width: "200px",
          borderRadius: "100%",
        }}
      />
    </>
  );
};
