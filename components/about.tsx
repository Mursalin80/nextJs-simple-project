import React, { FC } from "react";
import Member from "./member";

const About: FC = () => {
  return (
    <section className="flex flex-col bg-white py-20 text-3xl md:text-4xl">
      <div className="container mx-auto px-11">
        <p className="leading-tight max-w-5xl mx-auto text-4xl lg:text-4xl tracking-tight">
          <strong>we will hel you ship better apps, faster</strong>our team of
          export engineer has created the best user experience in some of the
          most popular apps woldwide.
        </p>
      </div>
      <div className="container mx-auto px-11 text-center mt-28">
        <h2>Our team</h2>
        <div> the &ldquo;spec-ops&rdquo;</div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20">
          <Member
            id="mm1"
            name="MM1"
            socialId="@mrousavy"
            link="https://github.com/mrousavy"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
