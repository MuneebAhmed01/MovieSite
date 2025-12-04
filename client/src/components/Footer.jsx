import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-36 mt-40 w-full text-gray-300">

      <p className="pt-4 text-center text-sm pb-5">
        Copyright {new Date().getFullYear()} © ElyséeDev. All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
