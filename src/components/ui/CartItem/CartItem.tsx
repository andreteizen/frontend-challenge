'use client'

import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from '@/redux/store/cartSlice'
import { useDispatch } from 'react-redux'
import Image from 'next/image'
import styles from './cartItem.module.scss'
import { motion } from 'framer-motion'

interface CartItemProps {
  id: string
  name: string
  description: string
  price: number
  quantity: number
  image: string
}

export default function CartItem({
  id,
  name,
  description,
  price,
  quantity,
  image,
}: CartItemProps) {
  const dispatch = useDispatch()

  const handleRemove = () => {
    dispatch(removeItem(id))
  }

  return (
    <motion.div
      key={id}
      className={styles.item}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: -50 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      layout
    >
      <Image
        className={styles.imageConfiguration}
        src={image}
        width={50}
        height={50}
        alt={name}
      />

      <div>
        <motion.h3 className={styles.titulo}>{name}</motion.h3>

        <motion.p className={styles.description}>{description}</motion.p>

        <motion.div className={styles.price}>
          <Image alt="Ethereum" src="/ethereum.png" width={29} height={29} />{' '}
          {price} ETH
        </motion.div>

        <div className={styles.buttons}>
          <motion.div
            className={styles.quantityControl}
            whileTap={{ scale: 0.95 }}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => dispatch(decrementQuantity(id))}
            >
              -
            </motion.button>
            <span>{quantity}</span>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => dispatch(incrementQuantity(id))}
            >
              +
            </motion.button>
          </motion.div>

          <motion.button
            className={styles.deleteButton}
            whileHover={{
              scale: 1.1,
              backgroundColor: '#ff4444',
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            onClick={handleRemove}
          >
            <Image alt="delete" src="/trash.svg" width={20} height={20} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
