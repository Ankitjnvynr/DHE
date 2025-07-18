import React from "react";
import { Layout } from "../../layouts/Layout";
import { CoursesAllGrid } from "../../components/courses/CoursesAllGrid";


export const DirectorMessage = () => {
  return (
    <Layout
      header={1} 
      footer={1}
      breadcrumbTitle={"Know More About DHE"}
      
    >
      
        <CoursesAllGrid />
    </Layout>
  );
};
