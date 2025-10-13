import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../translations/LanguageContext";

interface GalleryImage {
  src: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: require("../../img/gallery/1.jpg"),
    alt: "Gallery image 1",
  },
  {
    src: require("../../img/gallery/2.jpg"),
    alt: "Gallery image 2",
  },
  {
    src: require("../../img/gallery/3.jpg"),
    alt: "Gallery image 3",
  },
  {
    src: require("../../img/gallery/4.jpg"),
    alt: "Gallery image 4",
  },
  {
    src: require("../../img/gallery/5.jpg"),
    alt: "Gallery image 5",
  },
  {
    src: require("../../img/gallery/6.jpg"),
    alt: "Gallery image 6",
  },
  {
    src: require("../../img/gallery/7.jpg"),
    alt: "Gallery image 7",
  },
  {
    src: require("../../img/gallery/8.jpg"),
    alt: "Gallery image 8",
  },
  {
    src: require("../../img/gallery/9.jpg"),
    alt: "Gallery image 9",
  },
  {
    src: require("../../img/gallery/10.jpg"),
    alt: "Gallery image 10",
  },
  {
    src: require("../../img/gallery/11.jpg"),
    alt: "Gallery image 11",
  },
  {
    src: require("../../img/gallery/12.jpg"),
    alt: "Gallery image 12",
  },
  {
    src: require("../../img/gallery/13.jpg"),
    alt: "Gallery image 13",
  },
  {
    src: require("../../img/gallery/14.jpg"),
    alt: "Gallery image 14",
  },
  {
    src: require("../../img/gallery/15.jpg"),
    alt: "Gallery image 15",
  },
  {
    src: require("../../img/gallery/16.jpg"),
    alt: "Gallery image 16",
  },
  {
    src: require("../../img/gallery/17.jpg"),
    alt: "Gallery image 17",
  },
  {
    src: require("../../img/gallery/18.jpg"),
    alt: "Gallery image 18",
  },
  {
    src: require("../../img/gallery/19.jpg"),
    alt: "Gallery image 19",
  },
  {
    src: require("../../img/gallery/20.jpg"),
    alt: "Gallery image 20",
  },
  {
    src: require("../../img/gallery/21.jpg"),
    alt: "Gallery image 21",
  },
  {
    src: require("../../img/gallery/22.jpg"),
    alt: "Gallery image 22",
  },
  {
    src: require("../../img/gallery/23.jpg"),
    alt: "Gallery image 23",
  },
  {
    src: require("../../img/gallery/24.jpg"),
    alt: "Gallery image 24",
  },
  {
    src: require("../../img/gallery/25.jpg"),
    alt: "Gallery image 25",
  },
  {
    src: require("../../img/gallery/26.jpg"),
    alt: "Gallery image 26",
  },
  {
    src: require("../../img/gallery/27.jpg"),
    alt: "Gallery image 27",
  },
];

const Gallery: React.FC = () => {
  const { t } = useLanguage(); // t stands for Translations

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4"
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.6 }}
          >
            {t.activity.title}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.25, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.6 }}
          >
            {t.activity.desc}
          </motion.p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg bg-gray-200"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.6 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                width={300}
                height={300}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
