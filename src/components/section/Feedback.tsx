import { motion } from "framer-motion";
import { useLanguage } from "../translations/LanguageContext";

function Feedback() {
  const { t } = useLanguage(); // t stands for Translations

  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4"
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.6 }}
          >
            {t.whatpeoplearesaying.title}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.25, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.6 }}
          >
            {t.whatpeoplearesaying.desc}
          </motion.p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 mb-8">
          {/* Feedback 1 */}
          <motion.div
            className="bg-white rounded-lg p-6 shadow-sm border"
            initial={{ y: -100, opacity: 0, scale: 0.8 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.6 }}
          >
            <div className="space-y-4">
              <div className="text-yellow-700">
                <svg
                  className="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>
              <blockquote className="text-gray-700 leading-relaxed">
                {t.whatpeoplearesaying.sections[1].feedback}
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-rose-300 rounded-full flex items-center justify-center">
                  <span className="text-zinc-50 font-semibold">DP</span>
                </div>
                <div>
                  <p className="font-semibold">
                    {t.whatpeoplearesaying.sections[1].user}
                  </p>
                  <p className="text-sm text-gray-500">
                    {t.whatpeoplearesaying.sections[1].role}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feedback 2 */}
          <motion.div
            className="bg-white rounded-lg p-6 shadow-sm border"
            initial={{ y: -100, opacity: 0, scale: 0.8 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.25, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.6 }}
          >
            <div className="space-y-4">
              <div className="text-yellow-700">
                <svg
                  className="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>
              <blockquote className="text-gray-700 leading-relaxed">
                {t.whatpeoplearesaying.sections[2].feedback}
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-lime-500 rounded-full flex items-center justify-center">
                  <span className="text-zinc-50 font-semibold">TS</span>
                </div>
                <div>
                  <p className="font-semibold">
                    {t.whatpeoplearesaying.sections[2].user}
                  </p>
                  <p className="text-sm text-gray-500">
                    {t.whatpeoplearesaying.sections[2].role}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feedback 3 */}
          <motion.div
            className="bg-white rounded-lg p-6 shadow-sm border"
            initial={{ y: -100, opacity: 0, scale: 0.8 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.6 }}
          >
            <div className="space-y-4">
              <div className="text-yellow-700">
                <svg
                  className="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>
              <blockquote className="text-gray-700 leading-relaxed">
                {t.whatpeoplearesaying.sections[3].feedback}
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-400 rounded-full flex items-center justify-center">
                  <span className="text-zinc-50 font-semibold">VI</span>
                </div>
                <div>
                  <p className="font-semibold">
                    {t.whatpeoplearesaying.sections[3].user}
                  </p>
                  <p className="text-sm text-gray-500">
                    {t.whatpeoplearesaying.sections[3].role}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Feedback;
