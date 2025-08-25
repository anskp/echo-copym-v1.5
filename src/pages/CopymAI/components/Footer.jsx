import { socials } from "../constants";
import Section from "./Section";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-black lg:block">
          <span className="font-semibold font-serif text-xs text-black">&copy;</span>{" "}
          <span className="text-color-1 font-medium">COPYM</span>{" "}
          {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((social) => (
            <a
              href={social.url}
              key={social.id}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full transition-colors hover:bg-gray-300"
            >
              <img
                src={social.iconUrl}
                alt={social.title}
                width={16}
                height={16}
              />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
