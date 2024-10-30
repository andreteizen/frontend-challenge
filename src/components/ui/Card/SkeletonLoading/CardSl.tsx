import { motion, Variants } from 'framer-motion'
import styles from './CardSl.module.scss'

const skeletonVariants: Variants = {
  pulse: {
    opacity: [0.3, 1, 0.3],
    transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
  },
}

export default function SkeletonCard() {
  return (
    <motion.div
      className={styles.skeletonCard}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <motion.div
        className={styles.skeletonImage}
        variants={skeletonVariants}
        animate="pulse"
      />
      <div className={styles.skeletonCardContent}>
        <motion.div
          className={styles.skeletonTitle}
          variants={skeletonVariants}
          animate="pulse"
        />
        <motion.div
          className={styles.skeletonDescription}
          variants={skeletonVariants}
          animate="pulse"
        />
        <motion.div
          className={styles.skeletonPrice}
          variants={skeletonVariants}
          animate="pulse"
        />
        <motion.div
          className={styles.skeletonButton}
          variants={skeletonVariants}
          animate="pulse"
        />
      </div>
    </motion.div>
  )
}
