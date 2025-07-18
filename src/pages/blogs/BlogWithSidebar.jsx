import React from "react";
import { Layout } from "../../layouts/Layout";
import MembershipSection from "../../components/blogs/Membership";

export const Membership = () => {
  return (
    <Layout
      breadcrumbTitle={"JOIN DHE"}
      
    >
      <MembershipSection />
    </Layout>
  );
};
