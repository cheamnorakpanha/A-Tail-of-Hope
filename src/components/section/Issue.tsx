import { HeartPulse, Frown, Scale } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../translations/LanguageContext";

function Issue() {
  const { t } = useLanguage(); // t stands for Translations

  return (
    <section id="issue" className="w-full py-12 md:py-16 lg:py-20 bg-yellow-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4"
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.6 }}
          >
            {t.issue.title}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.25, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.6 }}
          >
            {t.issue.desc}
          </motion.p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          <motion.div
            className="bg-white rounded-lg p-6 shadow-sm border text-center"
            initial={{ y: 100, opacity: 0, scale: 0.8 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.6 }}
          >
            <div className="w-12 h-12 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
              <HeartPulse className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">
              {t.issue.sections[1].title}
            </h3>
            <p className="text-gray-600">{t.issue.sections[1].content}</p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg p-6 shadow-sm border text-center"
            initial={{ y: 100, opacity: 0, scale: 0.8 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.25, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.6 }}
          >
            <div className="w-12 h-12 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
              <Frown className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">
              {t.issue.sections[2].title}
            </h3>
            <p className="text-gray-600">{t.issue.sections[2].content}</p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg p-6 shadow-sm border text-center sm:col-span-2 lg:col-span-1"
            initial={{ y: 100, opacity: 0, scale: 0.8 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.6 }}
          >
            <div className="w-12 h-12 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
              <Scale className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">
              {t.issue.sections[3].title}
            </h3>
            <p className="text-gray-600">{t.issue.sections[3].content}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Issue;
