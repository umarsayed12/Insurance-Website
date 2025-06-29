import { motion } from "framer-motion";

const features = [
  { title: "24x7 Support", desc: "Lorem Ipsum is simply dummy text..." },
  { title: "Easy Claim System", desc: "Lorem Ipsum is simply dummy text..." },
  { title: "Easy Installments", desc: "Lorem Ipsum is simply dummy text..." },
];

export default function Features() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="grid md:grid-cols-3 gap-6 p-10 bg-white dark:bg-neutral-900"
    >
      {features.map((f, i) => (
        <div
          key={i}
          className="p-6 shadow rounded bg-gray-50 dark:bg-neutral-800"
        >
          <h3 className="text-lg font-bold mb-2 text-primary dark:text-accent">
            {f.title}
          </h3>
          <p>{f.desc}</p>
        </div>
      ))}
    </motion.section>
  );
}
