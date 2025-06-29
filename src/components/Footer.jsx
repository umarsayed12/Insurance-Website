import { useState } from "react";

export default function Footer() {
  const [privacy, setPrivacy] = useState(false);
  const [tnc, setTnc] = useState(false);
  return (
    <footer
      id="footer"
      className="bg-primary dark:bg-neutral-800 text-white py-6 px-4"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p>©2025 AERON@Company, All Rights Reserved.</p>
        <div className="space-x-4">
          <a>Policy Statements</a>
          <a>Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}
