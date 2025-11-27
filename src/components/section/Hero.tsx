import { Link } from "react-scroll";
import { ChevronRight } from "lucide-react";
import Carousel from "./Carousel";
import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";

function Hero() {
  const slides = [
    require("../../img/hero/1.jpg"),
    require("../../img/hero/2.jpg"),
    require("../../img/hero/3.jpg"),
  ];

  const { t } = useLanguage(); // t stands for Translations

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 xl:py-24 bg-yellow-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <motion.h1
                className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.6 }}
              >
                {t.main.title}
              </motion.h1>
              <motion.p
                className="text-lg text-gray-600 sm:text-xl max-w-2xl"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.25, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.6 }}
              >
                {t.main.desc}
              </motion.p>
            </div>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.6 }}
            >
              <Link to="about" smooth={true} duration={500} offset={-65}>
                <button className="bg-yellow-700 text-white px-10 py-2 rounded-md font-medium hover:bg-yellow-800 transition-colors flex items-center justify-center">
                  {t.main.button1}
                  <ChevronRight className="ml-4 h-4 w-4" />
                </button>
              </Link>
              <Link to="get-involved" smooth={true} duration={500} offset={-65}>
                <button className="border border-yellow-700 text-yellow-700 bg-white hover:bg-yellow-50 px-6 py-2 rounded-md font-medium transition-colors">
                  {t.main.button2}
                </button>
              </Link>
            </motion.div>
          </div>

          <div className="order-first lg:order-last">
            <motion.div
              className="aspect-video w-full overflow-hidden rounded-xl flex items-center justify-center"
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.25, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.6 }}
            >
              <Carousel autoSlide={true} autoSlideInterval={3000}>
                {slides.map((s, index) => (
                  <img
                    key={index}
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

export default Hero;
