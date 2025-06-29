import { motion } from "framer-motion";

const services = [
  { name: "Family Insurance", img: "https://picsum.photos/300/200?1" },
  { name: "Travel Insurance", img: "https://picsum.photos/300/200?2" },
  { name: "Home Insurance", img: "https://picsum.photos/300/200?3" },
  { name: "Health Insurance", img: "https://picsum.photos/300/200?4" },
  { name: "Life Insurance", img: "https://picsum.photos/300/200?5" },
  { name: "Car Insurance", img: "https://picsum.photos/300/200?6" },
  { name: "Business Insurance", img: "https://picsum.photos/300/200?7" },
  { name: "Pet Insurance", img: "https://picsum.photos/300/200?8" },
  { name: "Disability Insurance", img: "https://picsum.photos/300/200?9" },
  { name: "Fire Insurance", img: "https://picsum.photos/300/200?10" },
];

export default function Services() {
  return (
    <motion.section
      id="services"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="h-full py-20 px-2 flex flex-col justify-center items-center bg-blue-50 dark:bg-neutral-800"
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-primary dark:text-accent">
        We're Giving All the Services
      </h2>
      <div className="grid md:grid-cols-4 gap-8">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-white cursor-pointer hover:scale-105 transition-all duration-500 dark:bg-neutral-800 rounded shadow"
          >
            <img
              src={s.img}
              alt={s.name}
              className="w-full h-40 object-cover rounded-t"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{s.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Lorem Ipsum is simply dummy text...
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
