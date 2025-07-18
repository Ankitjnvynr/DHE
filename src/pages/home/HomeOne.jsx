import React from "react";
import { Layout } from "../../layouts/Layout";
import { HeroOne } from "../../components/hero/HeroOne";
import { AboutOne } from "../../components/about/AboutOne";
import { FeatureOne } from "../../components/features/FeatureOne";
import { CampusOne } from "../../components/campus/CampusOne";
import { PartnerOne } from "../../components/partners/PartnerOne";
import { VideoOne } from "../../components/videos/VideoOne";
import { EventOne } from "../../components/events/EventOne";

import { CoursesOne } from "../../components/courses/CoursesOne";

export const HomeOne = () => {
  return (
    <Layout header={1} footer={1}>
      {/* hero */}
      <HeroOne />
      <CoursesOne />
      {/* about */}
      <AboutOne />

      {/* popular */}
      

      {/* feature */}
      <FeatureOne />

      {/* campus */}
      <CampusOne />

      {/* departments */}
      <PartnerOne />

      {/* video */}
      <VideoOne />

      {/* event schedule */}
      {/* <EventOne /> */}

      {/* testimonial */}
      {/* <TestimonialOne /> */}

      {/* blog */}
      {/* <BlogOne /> */}
    </Layout>
  );
};
