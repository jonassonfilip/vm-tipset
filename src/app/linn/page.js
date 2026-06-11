import Image from 'next/image';
import coupon from './linn-1.png';
import styles from '../page.module.css';

export default function Page() {
  return (
    <div className={styles.coupon}>
      <h1>Linn Rampeltin</h1>
      <Image src={coupon} alt="The participants magnificent bet" />
    </div>
  );
}
