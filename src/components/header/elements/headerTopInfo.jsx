import Link from "next/link";
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const HeaderTopInfo = function () {
  return (
    <>
      <div className="ltn__top-bar-menu">
        <ul>
          <li>
            <Link href="mailto:info@dhabahawalpur.com" style={{color: "#fff"}}>
              <FaEnvelope color="#fff" />
              <i></i>
                info@dhabahawalpur.com

            </Link>
          </li>
          <li>
            <Link href="/locations" style={{color: "#fff"}}>
              <FaMapMarkerAlt color="#fff" />
                Head Office, Jinnah Avenue (MB-2), APE Canal Road Bahawalpur. Pakistan
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderTopInfo;
