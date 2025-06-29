import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="h-screen px-2 flex items-center bg-white dark:bg-neutral-900"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://plus.unsplash.com/premium_photo-1661776260388-f5d1b14ce8a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdXJhbmNlfGVufDB8fDB8fHwwe"
          alt="About Us"
          className="rounded shadow-md object-cover w-full h-72 md:h-full"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4 text-primary dark:text-accent">
            About AERON
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed space-y-2">
            At <strong>AERON</strong>, we’re redefining the way India
            experiences insurance. Founded with a vision to simplify and
            personalize coverage, AERON has become a trusted choice for over{" "}
            <strong>9 million customers</strong> across the country.
            <br />
            <br />
            Our platform brings together <strong>
              50+ leading insurers
            </strong>{" "}
            under one roof, allowing you to compare, customize, and purchase
            policies with complete transparency— whether it’s{" "}
            <strong>health, life, vehicle, travel, or home insurance</strong>.
            <br />
            <br />
            What sets us apart is our{" "}
            <strong>tech-first, people-centric</strong> approach. From{" "}
            <strong>instant quotes</strong> and <strong>easy renewals</strong>{" "}
            to
            <strong>24/7 claim support</strong>, we’re committed to making
            insurance stress-free and dependable.
            <br />
            <br />
            At AERON, we don’t just sell policies—we build{" "}
            <strong>peace of mind</strong>, ensuring you and your loved ones are
            protected when it matters most.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
