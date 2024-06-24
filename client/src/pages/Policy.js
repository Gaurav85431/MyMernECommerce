import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/privacy.jpeg"
            alt="privacy"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p> We gather personal details like name, non-personal data such as device information. </p>
          <p>We may share your data with third parties for marketing, analytics.</p>
          <p>You can unsubscribe from promotional communications.</p>
          <p> Our service is not intended for children under 13.</p>
          <p>We may update this Privacy Policy from time to time.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
