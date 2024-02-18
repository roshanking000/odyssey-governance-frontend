import { Link } from 'components/Link';
import Image from 'next/image';
import {
  // Avatar, 
  DioneProtocolIcon,
} from 'assets';
import styles from './styles.module.scss';

const Footer = () => (
  <div className={styles.footer_container}>
    <div className="flex sm:flex-row gap-8 justify-between items-center flex-col sm:w-full mx-auto">
      <div className="flex sm:flex-row flex-col gap-2 items-center">
        <Image src={DioneProtocolIcon} alt="logo" width={36} height={36} />
        <p>Powered by Dione Protocol</p>
      </div>
      <div className="flex sm:flex-row items-center flex-col">
        <Link href="/" className={styles.footer_link} needArrow={false}>
          <p className="sm:text-base text-xs">
            ©
            {' '}
            {new Date().getFullYear()}
            {' '}
            Dione Protocol LLC
          </p>
        </Link>
        <div className="flex sm:flex-row flex-col justify-start">
          <p className="sm:text-base text-xs">• All Rights Reserved</p>
          <Link href="/services" className={styles.footer_link} needArrow={false}>
            <p className="sm:text-base text-xs">
              • Term of Services
            </p>
          </Link>
          <Link href="/contact" className={styles.footer_link} needArrow={false}>
            <p className="sm:text-base text-xs">
              • Contact
            </p>
          </Link>
        </div>
      </div>
    </div>
    {/* <Typography 
      className={ 
        cx(
          styles.footer_container_el,
          styles.footer_container_right,
        )
      } 
      type="p"  
    >
      <Image src={DioneProtocolIcon} alt="button icon" width={48} height={48} />
      <div> 
        Powered by Dione Protocol 
      </div>
    </Typography>
    <Typography 
      className={ 
        cx(
          styles.footer_container_el,
          styles.footer_container_middle,
        )
      }
      type="p"
    >
      Dione Protocol © 
      {' '}
      {new Date().getFullYear()} 
    </Typography>
    <Typography 
      className={ 
        cx(
          styles.footer_container_el,
          styles.footer_container_left,
        )
      }
      type="p"
    >
      <div>
        <Link href="/services" className={styles.footer_link} needArrow={false}>
          Term of Services
        </Link>
      </div>
      <div>
        <Link href="/contact" className={styles.footer_link} needArrow={false}> Contact</Link>
      </div>
    </Typography> */}
  </div>
);

export { Footer };
