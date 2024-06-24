import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
const Layout = ({ children, title, description, keywords, author }) => { //title diye jo ki show krega browser me  title tab per jo tab ki avi open hai.

  // React by default seo ko support nhi kata hia iske liye hme alag se hm 3rd party pr depend rehna padta hia.

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "70vh" }}>
        <Toaster />

        {children}
      </main>
      <Footer />
    </div>
  );
};


// sb page pr no need ki title description ho to for this hm default add kr denge i.e. defult title,...
// isse basically SEO(search engine optimaztion me help milta hai.)

Layout.defaultProps = {
  title: "Ecommerce app - shop now",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
  author: "Gaurav Pushpam",
};

export default Layout;
