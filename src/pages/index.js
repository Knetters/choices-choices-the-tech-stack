import * as React from "react"
import Header from "../components/Header";
import Over from "../components/Over";
import Expertise from "../components/Expertise";

import Layout from "../components/Layout";
import Klimaatadaptatie from "../components/Klimaatadaptatie";

export default function Home() {
  return (
    <Layout>
      <div>
        <Header />
        <Over />
        <Expertise />
        <Klimaatadaptatie />
      </div>
    </Layout>
  )
}
