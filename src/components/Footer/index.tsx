import { Link } from 'components/Link';
import Image from 'next/image';
import {
  // Avatar, 
  DioneProtocolIcon,
} from 'assets';
import styles from './styles.module.scss';

const Footer = () => (
  <div className={styles.footer_container}>
    <div className="max-w-full gap-5 lg:gap-0 py-2 md:py-0 px-4 px-0 w-full">
      <div className="flex justify-between gap-6 lg:gap-12 xl:gap-20 flex-col lg:flex-row items-center w-full">
        <div className="flex items-center text-sm gap-4 min-w-[135px] lg:h-9 flex-col lg:flex-row pb-6 lg:pb-0 font-medium md:font-normal border-b border-[#ffffff1a] lg:border-b-0 w-full">
          <Image src={DioneProtocolIcon} alt="logo" width={48} height={48} />
          <p>Powered by Dione Protocol</p>
        </div>
        <div className="flex sm:flex-row items-center flex-col text-nowrap">
          <Link href="/" className={styles.footer_link} needArrow={false}>
            <p className="text-xs">
              ©
              {' '}
              {new Date().getFullYear()}
              {' '}
              Dione Protocol LLC
            </p>
          </Link>
          <div className="flex sm:flex-row flex-col justify-start">
            <p className="text-xs">• All Rights Reserved</p>
            <Link href="/services" className={styles.footer_link} needArrow={false}>
              <p className="text-xs">
                • Term of Services
              </p>
            </Link>
            <Link href="/contact" className={styles.footer_link} needArrow={false}>
              <p className="text-xs">
                • Contact
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export { Footer };
