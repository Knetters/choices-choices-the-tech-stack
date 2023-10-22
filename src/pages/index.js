import * as React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/Layout";

import Header from "../components/Header";
import Over from "../components/Over";
import Expertise from "../components/Expertise";
import Klimaatadaptatie from "../components/Klimaatadaptatie";
import Waterkwaliteit from "../components/Waterkwaliteit";
import Brain from "../components/Brain";

export default function Home() {
  return (
    <div>

      <Helmet>

      <title>SPATwater</title>
      <script src="/scripts/script.js" type="text/javascript" />

      </Helmet>

    <Layout>
      <div>
        <Header />
        <Over />
        <Expertise />
        <Klimaatadaptatie />
        <Waterkwaliteit />
        <Brain />
      </div>
    </Layout>
    </div>
  )
}
