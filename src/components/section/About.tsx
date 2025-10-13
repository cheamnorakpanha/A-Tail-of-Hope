import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../translations/LanguageContext";

const About: React.FC = () => {
  const { t } = useLanguage(); // t stands for Translations

  return (
    <section id="about" className="w-full py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4"
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.6 }}
          >
            {t.about.title}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.25, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.6 }}
          >
            {t.about.title}
          </motion.p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-video w-full overflow-hidden rounded-xl">
              <motion.img
                src={require("../../img/team/atoh_crew.png")}
                width={600}
                height={400}
                alt="Students conducting research"
                className="h-full w-full object-cover"
                // Framer Motion initial state
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.6 }}
              />
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <motion.div
              className="space-y-2"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.6 }}
            >
              <h3 className="text-xl font-bold">{t.about.sections[1].title}</h3>
              <p className="text-gray-600">{t.about.sections[1].content}</p>
            </motion.div>

            <motion.div
              className="space-y-2"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.25, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.6 }}
            >
              <h3 className="text-xl font-bold">{t.about.sections[2].title}</h3>
              <p className="text-gray-600">{t.about.sections[2].content}</p>
            </motion.div>

            <motion.div
              className="space-y-2"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.6 }}
            >
              <h3 className="text-xl font-bold">{t.about.sections[3].title}</h3>
              <p className="text-gray-600">{t.about.sections[3].content}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
