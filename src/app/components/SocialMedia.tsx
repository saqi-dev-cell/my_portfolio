import { FaGithub, FaLinkedinIn, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter, FaMedium, FaStackOverflow, FaGitlab, FaKaggle } from "react-icons/fa";

const socialMediaLinks = {
  github: "https://github.com/saqi-dev-cell",
  linkedin: "https://linkedin.com/in/saqlain-kharal",
  gmail: "saqlainkharal39@gmail.com",
  gitlab: "",
  facebook: "",
  instagram: "",
  twitter: "",
  medium: "",
  stackoverflow: "",
  kaggle: "",
  display: true,
};

const icons = [
  { key: "github", icon: <FaGithub size={22} /> },
  { key: "linkedin", icon: <FaLinkedinIn size={22} /> },
  { key: "gmail", icon: <FaEnvelope size={22} /> },
  { key: "gitlab", icon: <FaGitlab size={22} /> },
  { key: "facebook", icon: <FaFacebookF size={22} /> },
  { key: "instagram", icon: <FaInstagram size={22} /> },
  { key: "twitter", icon: <FaTwitter size={22} /> },
  { key: "medium", icon: <FaMedium size={22} /> },
  { key: "stackoverflow", icon: <FaStackOverflow size={22} /> },
  { key: "kaggle", icon: <FaKaggle size={22} /> },
];

export default function SocialMedia() {
  if (!socialMediaLinks.display) return null;
  return (
    <div className="flex flex-wrap gap-3 mt-4 justify-center">
      {icons.map(({ key, icon }) => {
        // Only get string values, never boolean
        const value = socialMediaLinks[key as keyof typeof socialMediaLinks];
        const link =
          key === "gmail"
            ? typeof value === "string" && value
              ? `mailto:${value}`
              : ""
            : typeof value === "string"
            ? value
            : "";

        if (link) {
          return (
            <a
              key={key}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-400 bg-neutral-900/60 p-2 rounded-full shadow transition-all duration-200"
            >
              {icon}
            </a>
          );
        } else {
          return (
            <span
              key={key}
              className="text-neutral-600 bg-neutral-900/40 p-2 rounded-full shadow opacity-50 cursor-not-allowed"
              title={key.charAt(0).toUpperCase() + key.slice(1)}
            >
              {icon}
            </span>
          );
        }
      })}
    </div>
  );
}