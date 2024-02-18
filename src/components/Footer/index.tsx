import { Link } from 'components/Link';
import styles from './styles.module.scss';

const Footer = () => (
  <div className={styles.footer_container}>
    <div className="sm:w-full w-1/2">
      <Link href="/" className={styles.footer_link} needArrow={false}>
        <p className="sm:text-base text-xs">
          ©
          {' '}
          {new Date().getFullYear()}
          {' '}
          Dione Protocol LLC
        </p>
      </Link>
      <span className="sm:text-base text-xs">• All Rights Reserved •</span>
      <Link href="/services" className={styles.footer_link} needArrow={false}>
        <p className="sm:text-base text-xs">
          Term of Services
        </p>
      </Link>
      <span className="sm:text-base text-xs">•</span>
      <Link href="/contact" className={styles.footer_link} needArrow={false}>
        <p className="sm:text-base text-xs">
          Contact
        </p>
      </Link>
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