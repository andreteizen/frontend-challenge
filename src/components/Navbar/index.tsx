'use client'

import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styles from './index.module.scss'
import CheckoutOverlay from '../CheckoutOverlay'
import BagIcon from '/public/bagIcon.png'
import Logo from '/public/logo.png'
import Image from 'next/image'
import { RootState } from '@/redux'
import { AnimatePresence, motion, Variants } from 'framer-motion'

export default function Navbar() {
  const [isOverlayOpen, setOverlayOpen] = useState(false)

  // Obter o número total de itens no carrinho
  const cartItemCount = useSelector((state: RootState) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0),
  )

  const toggleOverlay = () => {
    setOverlayOpen(!isOverlayOpen)
  }

  const cartIconVariants: Variants = {
    initial: { scale: 0.7 },
    animate: { scale: 1, transition: { duration: 0.3 } },
  }

  return (
    <nav className={styles.navbar}>
      <Image
        src={Logo}
        className={styles.logo}
        alt="Starsoft Logo"
        width={101}
        height={38}
      />
      <button className={styles.cartButton} onClick={toggleOverlay}>
        <motion.div
          key={cartItemCount} // Cambia la animación cada vez que cartItemCount cambia
          variants={cartIconVariants}
          initial="initial"
          animate="animate"
        >
          <Image src={BagIcon} alt="Cart Icon" width={33} height={33} />
        </motion.div>
        <span className={styles.cartCount}>{cartItemCount}</span>
      </button>

      {/* Envolviendo CheckoutOverlay en AnimatePresence */}
      <AnimatePresence>
        {isOverlayOpen && <CheckoutOverlay onClose={toggleOverlay} />}
      </AnimatePresence>
    </nav>
  )
}
