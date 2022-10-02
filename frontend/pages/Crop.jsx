import React from "react";
import CropForm from "../components/CropForm";
import Layout from "../components/Layout";

const Crop = () => {
    return (
        <Layout>
            <h2 className="text-2xl font-semibold text-center mt-1">Find a Suitable Crop</h2>
            <CropForm />
        </Layout>
    );
};

export default Crop;
