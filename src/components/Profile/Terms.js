import React from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="h-full bg-white-bg p-6 flex flex-col gap-4">
      <Link to="/profile">
        <FaChevronLeft />
      </Link>
      <h1 className="font-bold border-b-2 border-red-500">
        Terms and Conditions of Gym Application
      </h1>
      <p className="font-semibold">
        Please read the following terms and conditions carefully before using
        the Gym application. These terms and conditions govern and limit your
        use of the Gym application. By using the application, you agree to these
        terms and conditions.
      </p>
      <ul className="flex flex-col gap-4 text-gray-600">
        <li>
          Use of Services: The Gym application provides users with access to gym
          facilities, workout programs, and other fitness services. By using the
          application, you may only use our services for personal use.
        </li>
        <li>
          User Responsibility: When using the Gym application, users are
          responsible for ensuring the accuracy of their personal information
          and securing access to their accounts. Additionally, users are
          responsible for their actions while using the application and must
          comply with all applicable laws and regulations.
        </li>
        <li>
          Intellectual Property: All content and materials provided through the
          Gym application, including but not limited to text, graphics, logos,
          images, and software, are the property of Gym or its licensors and are
          protected by copyright and other intellectual property laws.
        </li>
        <li>
          Privacy Policy: By using the Gym application, you agree to the terms
          of our Privacy Policy, which outlines how we collect, use, and
          disclose your personal information.
        </li>
        <div>
          Continued use of the Gym application after any such changes shall
          constitute your consent to such changes. By using the Gym application,
          you acknowledge that you have read, understood, and agree to be bound
          by these terms and conditions. If you do not agree to these terms and
          conditions, please do not use the Gym application.
        </div>
      </ul>
    </div>
  );
};

export default Terms;
