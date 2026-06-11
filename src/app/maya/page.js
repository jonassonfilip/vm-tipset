import Image from 'next/image';
import coupon from './maya-1.png';
import styles from '../page.module.css';

export default function Page() {
  return (
    <div className={styles.coupon}>
      <h1>Maya Gunn</h1>
      <Image src={coupon} alt="The participants magnificent bet" />
    </div>
  );
}
