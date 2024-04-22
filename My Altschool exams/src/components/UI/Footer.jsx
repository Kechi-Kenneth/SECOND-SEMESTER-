import { Link } from "react-router-dom";
import { useUserContext } from "../context/userContext";

function Footer() {
  const { data } = useUserContext();

  return (
    <footer className="flex flex-col gap-32 pb-12 ">
     

      <section className="copyright flex flex-col sm:flex-row items-start justify-between">
        <p className="text-primary font-bold">Kechi Kenneth - 2023</p>
        <ul className="flex gap-2 ms:gap-6 font-bold text-mainBlack text-sm sm:text-base">
        
          <li>
            <a
              href={`https://www.linkedin.com/in/kenneth-kechi-1863212b5/`}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;
