import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";

const teamImages = [
  require("../../img/team/vyra.webp"),
  require("../../img/team/panharoth.webp"),
  require("../../img/team/thaiseang.webp"),
  require("../../img/team/panha.webp"),
  require("../../img/team/pich.webp"),
  require("../../img/team/michell.webp"),
  require("../../img/team/dalys.webp"),
];

const Team: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="team" className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4"
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.6 }}
          >
            {t.team.title}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.25, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.6 }}
          >
            {t.team.desc}
          </motion.p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
          {Object.values(t.team.members).map((member: any, index: number) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm border"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.25, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.6 }}
            >
              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto overflow-hidden rounded-full">
                  <img
                    src={teamImages[index]}
                    width={96}
                    height={96}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-yellow-700 font-medium">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
