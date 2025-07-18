import React from "react";
import { Layout } from "../../layouts/Layout";
import { DHEPublicationsPage } from "../../components/blogs/Publications";

export const Blog = () => {
  return (
    <Layout breadcrumbTitle={"Blog"} breadcrumbSubtitle={"Blog"}>
      <DHEPublicationsPage />
    </Layout>
  );
};
