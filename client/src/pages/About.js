import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommerce app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">

            This website is developed by Gaurav Pushpam.Customers can shop from anywhere, anytime.
            Businesses can reach a global audience. Lower overhead costs compared to physical stores. Ensuring safe transactions and protecting customer data.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
