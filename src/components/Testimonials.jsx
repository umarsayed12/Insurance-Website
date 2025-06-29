import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    text: "I purchased a health insurance policy last year, and when I was hospitalized recently, the cashless claim process was super smooth and hassle-free.",
    author: "Neha Bansal",
  },
  {
    text: "My home was damaged due to flooding, but the insurance team was responsive and settled my claim faster than I expected. Highly recommended!",
    author: "Karan Malhotra",
  },
  {
    text: "Their life insurance plans are flexible and easy to understand. I now feel confident that my family will be financially secure no matter what.",
    author: "Sonal Verma",
  },
  {
    text: "I use their mobile app to manage all my policies. It's user-friendly, and renewing my car insurance takes just a few clicks!",
    author: "Ramesh Pillai",
  },
  {
    text: "I was traveling abroad when I lost my baggage. Thanks to their travel insurance, I got immediate support and reimbursement. Great service!",
    author: "Anjali Desai",
  },
  {
    text: "What stood out to me was their transparency and honest advice. They never pushed unnecessary products and focused on what I actually needed.",
    author: "Vivek Rathi",
  },
  {
    text: "As a small business owner, their commercial insurance has given me peace of mind. The coverage is comprehensive and fairly priced.",
    author: "Priya Mehta",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="h-screen flex flex-col justify-center bg-white dark:bg-neutral-900 text-center"
      id="testimonials"
    >
      <h2 className="text-3xl font-bold mb-8 text-primary dark:text-accent">
        What Our Customers Are Saying?
      </h2>
      <div className="max-w-4xl mx-auto h-56 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{ duration: 0.6 }}
            className="w-full bg-gray-50 dark:bg-neutral-800 rounded-lg shadow-md p-6"
          >
            <p className="text-lg italic mb-4">“{testimonials[index].text}”</p>
            <p className="font-semibold text-primary dark:text-accent">
              ~ {testimonials[index].author}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
