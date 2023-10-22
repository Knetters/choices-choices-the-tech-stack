import * as React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/Layout";

import Header from "../components/Header";
import Over from "../components/Over";
import Expertise from "../components/Expertise";
import Klimaatadaptatie from "../components/Klimaatadaptatie";
import Waterkwaliteit from "../components/Waterkwaliteit";
import Brain from "../components/Brain";
import Projects from "../components/projects";

export default function Home() {
  return (
    <div>

      <Helmet>

        <title>SPATwater</title>
        <script src="/scripts/script.js" type="text/javascript" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.2/dist/leaflet.css" integrity="sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14=" crossorigin="" />
	      <script src="https://unpkg.com/leaflet@1.9.2/dist/leaflet.js" integrity="sha256-o9N1jGDZrf5tS+Ft4gbIK7mYMipq9lqpVJ91xHSyKhg=" crossorigin=""></script>

      </Helmet>

    <Layout>
      <div>
        <Header />
        <Over />
        <Expertise />
        <Klimaatadaptatie />
        <Waterkwaliteit />
        <Brain />
        <Projects />
      </div>
    </Layout>
    </div>
  )
}
