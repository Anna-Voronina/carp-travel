import { socialMediaLinks } from "@data";
import SectionTitle from "./SectionTitle";
import ContactForm from "./ContactForm";

const Contacts = () => {
  return (
    <section className="contacts-bg text-white">
      <div className="section-container">
        <SectionTitle thinText="Contact" boldText="US" />
        <div className="flex flex-col desktop:flex-row mobile:gap-y-3 tablet:gap-y-16 mt-9 desktop:mt-[71px] desktop:justify-between">
          <div className="tablet:pl-[34px] flex flex-col tablet:flex-row mobile:gap-y-6 tablet:gap-x-[90px] text-s/[1.71] tablet:text-s/normal desktop:text-ms/[1.33] font-normal desktop:w-[350px] desktop:justify-between">
            <div className="flex flex-col gap-y-6 desktop:gap-y-16 tablet:w-[300px]">
              <div className="flex gap-x-5">
                <ul className="text-right w-[60%] tablet:w-[63%] desktop:w-[70%]">
                  <li>
                    <a href="tel:+380981234567">+38 (098) 12 34 567</a>
                  </li>
                  <li>
                    <a href="tel:+380731234567">+38 (073) 12 34 567</a>
                  </li>
                </ul>
                <h3 className="text-xs/[1.67] desktop:text-xs/loose font-extralight">
                  Phone number
                </h3>
              </div>

              <div className="flex gap-x-5">
                <a
                  href="mailto:support@carptravel.com"
                  className="text-right w-[60%] tablet:w-[63%] desktop:w-[70%]"
                >
                  support@carptravel.com
                </a>
                <h3 className="text-xs/[1.67] desktop:text-xs/loose font-extralight">
                  E-mail
                </h3>
              </div>
            </div>

            <div className="flex gap-x-5 desktop:flex-row-reverse desktop:justify-end">
              <h3 className="text-xs/[1.67] desktop:text-xs/loose font-extralight mobile:w-[60%] tablet:w-[60%] text-right">
                Follow us
              </h3>
              <ul className="desktop:w-[70%] desktop:text-right">
                {socialMediaLinks.map(({ id, title }) => (
                  <li key={id}>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
