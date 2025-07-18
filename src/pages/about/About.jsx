import React from "react";
import { Layout } from "../../layouts/Layout";
import { AboutOne } from "../../components/about/AboutOne";
import { CampusOne } from "../../components/campus/CampusOne";
import {PartnerOne } from "../../components/partners/PartnerOne";
import { VideoOne } from "../../components/videos/VideoOne";
import { BlogOne } from "../../components/blogs/BlogOne";

export const About = () => {
  return (
    <Layout breadcrumbTitle={"About Us"} breadcrumbSubtitle={"About Us"}>
      {/* about */}
      <AboutOne />

      {/* campus */}
      <CampusOne />

      {/* departments */}
      <PartnerOne />

      {/* video */}
      <VideoOne />

      {/* blog */}
      <BlogOne />
    </Layout>
  );
};
