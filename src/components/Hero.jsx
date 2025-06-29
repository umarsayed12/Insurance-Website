import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="h-screen flex flex-col justify-center items-center px-4 bg-blue-50 dark:bg-neutral-800 text-center"
    >
      <h2 className="text-5xl font-bold mb-4 text-primary dark:text-accent">
        Protect What Matters Most with AERON
      </h2>
      <p className="mb-2 text-lg">
        Trusted by over 9 million families and businesses nationwide
      </p>
      <p className="mb-2 text-lg">
        50+ leading insurance providers, all in one place
      </p>
      <p className="mb-2 text-lg">
        Affordable plans. Transparent policies. Instant support.
      </p>
      <p className="text-lg">
        Experience insurance the AERON way — simple, secure, and smart.
      </p>
    </motion.section>
  );
}
