import Carousel from "./Carousel";
import { motion } from "framer-motion";
import { useLanguage } from "../translations/LanguageContext";

function Mission() {
  const slides = [
    require("../../img/mission/1.jpg"),
    require("../../img/mission/2.jpg"),
    require("../../img/mission/3.jpg"),
  ];

  const { t } = useLanguage(); // t stands for Translations

  return (
    <section id="mission" className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <motion.h2
                className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.6 }}
              >
                {t.mission.title}
              </motion.h2>
              <motion.p
                className="text-lg text-gray-600"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.25, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.6 }}
              >
                {t.mission.desc}
              </motion.p>
            </div>

            <div className="space-y-6">
              <motion.div
                className="space-y-2"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.25, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.6 }}
              >
                <h3 className="text-xl font-bold">
                  {t.mission.sections[1].title}
                </h3>
                <p className="text-gray-600">{t.mission.sections[1].content}</p>
              </motion.div>

              <motion.div
                className="space-y-2"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.6 }}
              >
                <h3 className="text-xl font-bold">
                  {t.mission.sections[2].title}
                </h3>
                <p className="text-gray-600">{t.mission.sections[2].content}</p>
              </motion.div>
              <motion.div
                className="space-y-2"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.75, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.6 }}
              >
                <h3 className="text-xl font-bold">
                  {t.mission.sections[3].title}
                </h3>
                <p className="text-gray-600">{t.mission.sections[3].content}</p>
              </motion.div>
            </div>
          </div>

          <div className="order-first lg:order-last">
            <motion.div
              className="aspect-video w-full overflow-hidden rounded-xl flex items-center justify-center"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.6 }}
            >
              <Carousel autoSlide={true} autoSlideInterval={3000}>
                {slides.map((s) => (
                  <img
                    src={s}
                    alt="images with slides"
                    className="h-full w-full object-cover max-h-full max-w-full"
                    width={600}
                    height={400}
                  />
                ))}
              </Carousel>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
