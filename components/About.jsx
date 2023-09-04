const About = () => {
  return (
    <section
      className="about-bg text-white text-s/[1.42] tablet:text-m/tight desktop:text-ms/[1.33] font-extralight"
      id="#about"
    >
      <div className="section-container flex flex-col gap-y-10 tablet:gap-y-16 desktop:gap-y-[72px] tablet:relative">
        <div className="flex mobile:flex-col mobile:gap-y-2 tablet:gap-x-[76px] desktop:gap-x-[38px]">
          <h2 className="text-l/[1.4] tablet:text-xl desktop:text-xxl font-thin tracking-[-1.6px] tablet:tracking-[-2.68px] desktop:tracking-[-3.92px] uppercase">
            WHO
            <span className="font-medium"> WE ARE</span>
          </h2>
          <div className="flex flex-col gap-y-5 tablet:gap-y-4 desktop:gap-y-6 mobile:max-w-[180px] tablet:max-w-[220px] desktop:max-w-[292px] tablet:mt-[10px] desktop:mt-4">
            <p>
              <span className="font-normal">a team of enthusiasts </span>
              who are fully committed to the mission of creating unforgettable
              and extraordinary trips to the most beautiful parts of the
              Carpathians. Our goal is not just to show you the natural wonders
              of the mountains, but to provide you with a deep immersion in
              their magical atmosphere.
            </p>
            <p>
              <span className="font-normal">We believe </span> that nature has
              the power to inspire, strengthen character and provide new
              perspectives. Therefore, each of our tours is aimed at unlocking
              your potential, enriching your spiritual world and creating
              unforgettable memories.
            </p>
          </div>
        </div>
        <div className="flex mobile:flex-col mobile:gap-y-10 tablet:ml-auto desktop:flex-row-reverse desktop:justify-between">
          <h3 className="tablet:absolute tablet:bottom-[188px] tablet:left-[32px] flex flex-col self-end mobile:max-w-[180px] tablet:max-w-[221px] desktop:max-w-[297px] font-normal uppercase text-right">
            <span className="self-start">From vacationers</span>
            <span>to active travelers</span>
            <span className="font-extralight tracking-[-0.14px] tablet:tracking-[0.32px] desktop:tracking-[2.16px] lowercase">
              we have a tour for everyone.
            </span>
          </h3>
          <p className="tablet:max-w-[463px] desktop:max-w-[605px]">
            <span className="font-normal">We use methods </span>
            that are time-tested and proven. Our expert guides with in-depth
            knowledge of the Carpathian landscapes lead you safely through the
            mysteries of these mountains.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
