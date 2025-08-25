import { check2, grid, loading1 } from "../assets";
import { roadmap } from "../constants";
import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { Gradient } from "./design/Roadmap";

const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10">
      <Heading tag="Our Journey" title="Development Roadmap" />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item) => {
          const status = item.status === "done" ? "Done" : "In progress";

          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-gray-200"
              }`}
              key={item.id}
            >
              <div className="relative p-8 bg-gray-50 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    className="w-full pointer-events-none select-none"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                    <Tagline>{item.date}</Tagline>

                    <div className="flex items-center px-4 py-1 bg-black rounded text-white">
                      <img
                        className={`mr-2.5 ${
                          item.status !== "done" && "animate-spin"
                        } pointer-events-none select-none`}
                        src={item.status === "done" ? check2 : loading1}
                        width={16}
                        height={16}
                        alt={status}
                      />
                      <div className="tagline text-white">{status}</div>
                      {item.status === "done" && (
                        <div className="ml-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      )}
                    </div>
                  </div>

                  <div className="mb-10 -my-10 -mx-15">
                    <img
                      className={`w-full ${
                        item.status !== "done" && "animate-pulse"
                      } pointer-events-none select-none`}
                      src={item.imageUrl}
                      width={628}
                      height={426}
                      alt={item.title}
                    />
                  </div>
                  <h4 className="h4 mb-4 text-black">{item.title}</h4>
                  <p className="body-2 text-black">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}

        {/* <Gradient /> */}
      </div>

      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button href="#">Our roadmap</Button>
      </div>
    </div>
  </Section>
);

export default Roadmap;
