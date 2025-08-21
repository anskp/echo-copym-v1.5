import { motion } from "framer-motion";



const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1.5,
      }}
      viewport={{
        once: true,
      }}
      id={id}
      className={`relative ${
        customPaddings ||
        `py-10 lg:py-16 xl:py-20 ${crosses && "lg:py-32 xl:py-40"}`
      } ${className || ""}`}
    >
      {children}




    </motion.section>
  );
};

export default Section;
