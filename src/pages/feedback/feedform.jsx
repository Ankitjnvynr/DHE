import React from "react";
import { Layout } from "../../layouts/Layout";
import {Feedback} from "../../components/feedback/Feedback"

export const Feedform = () =>{
    return(
        <Layout breadcrumbTitle={"Feedback"}>

            <Feedback />
        </Layout>
    );
};