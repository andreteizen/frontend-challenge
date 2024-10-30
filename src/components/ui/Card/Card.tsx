import { Product } from '@/components/Shop'
import { motion, Variants } from 'framer-motion'

import styles from './Card.module.scss'
import Image from 'next/image'
import { addItem } from '@/redux/store/cartSlice'

import { useDispatch } from 'react-redux'
import { useState } from 'react'
import SkeletonCard from './SkeletonLoading/CardSl'

interface CardProps {
  item?: Product
}

export default function Card({ item }: CardProps) {
  const buttonVariants: Variants = {
    clicked: { scale: [0.95, 0.9, 1], transition: { duration: 0.4 } },
  }

  const dispatch = useDispatch()
  const [addedToCart, setAddedToCart] = useState<{ [key: number]: boolean }>({})

  if (!item) return <SkeletonCard />

  const handleAddToCart = (item: Product) => {
    dispatch(
      addItem({
        id: item.name + item.id.toString(),
        name: item.name,
        description: item.description,
        price: item.price,
        quantity: 1,
        image: item.image,
      }),
    )

    setAddedToCart((prev) => ({ ...prev, [item.id]: true }))
  }

  return (
    <motion.div
      key={item.id}
      className={styles.card}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <Image
        src={item.image}
        alt={item.name}
        width={100}
        height={100}
        className={styles.productImage}
      />
      <div className={styles.cardContent}>
        <h3 className={styles.title}>{item.name}</h3>
        <p className={styles.description}>{item.description}</p>
        <div className={styles.price}>
          <Image alt="Ethereum" src="/ethereum.png" width={29} height={29} />{' '}
          {item.price} ETH
        </div>
        <motion.button
          className={styles.buyButton}
          onClick={() => handleAddToCart(item)}
          variants={buttonVariants}
          whileHover={!addedToCart[item.id] ? { scale: 0.95 } : undefined}
          animate={addedToCart[item.id] ? 'clicked' : 'initial'}
        >
          {addedToCart[item.id] ? 'ADICIONADO AO CARRINHO' : 'COMPRAR'}
        </motion.button>
      </div>
    </motion.div>
  )
}
