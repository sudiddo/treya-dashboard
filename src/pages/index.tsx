import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Img from "gatsby-image"
import "typeface-noto-sans"

const IndexPage = () => {
  return (
    // <Layout>
    //   <SEO title="Home" />
    //   <h1>Hi people</h1>
    //   <p>Welcome to your new Gatsby site.</p>
    //   <p>Now go build something great.</p>
    //   <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    //     <Image />
    //   </div>
    //   <Link to="/page-2/">Go to page 2</Link>
    // </Layout>
    <div
      style={{
        display: "flex",
        backgroundColor: "#65b6e5",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img
        src={require("../images/treya-white@3x.png")}
        style={{ width: 200, height: 70, objectFit: "contain" }}
      />

      <div
        style={{
          borderRadius: 5,
          backgroundColor: "#FFF",
          width: 500,
          height: 300,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          display: "flex",
        }}
      >
        <input
          placeholder="Username / email address"
          type="email-address"
          style={{
            fontFamily: "typeface-noto-sans",
            width: 350,
            height: 50,
            marginBottom: 20,
            borderRadius: 10,
            borderColor: "#65b6e5",
            paddingRight: 10,
            paddingLeft: 10,
          }}
        />
        <input
          placeholder="Password"
          type="password"
          style={{
            fontFamily: "typeface-noto-sans",
            width: 350,
            height: 50,
            marginBottom: 20,
            borderRadius: 10,
            borderColor: "#65b6e5",
            paddingRight: 10,
            paddingLeft: 10,
          }}
        />
        <button
          style={{
            width: 150,
            height: 50,
            fontFamily: "typeface-noto-sans",
            backgroundColor: "#2b80e2",
            borderRadius: 3,
            color: "#FFF",
          }}
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default IndexPage
