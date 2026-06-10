import Image from 'next/image';
import coupon from './berit-1.png';
import styles from '../page.module.css';

export default function Page() {
  return (
    <div className={styles.coupon}>
      <h1>Berit Román</h1>
      <Image src={coupon} alt="The participants magnificent bet" />
    </div>
  );
}
