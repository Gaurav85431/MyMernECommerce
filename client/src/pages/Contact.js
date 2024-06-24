import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            If you have any query or information related to product, free to call anytime we 24X7
            available
          </p>
          <p className="mt-3">
            <BiMailSend /> : pushpamgaurav3@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 9263560601 (24 X 7)
          </p>
          <p className="mt-3">
            <BiSupport /> : +9192-6356-0601 (10AM-5PM (Mon-Sat))
            {/* <BiSupport /> : 1800-0000-0000 (toll free) */}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
