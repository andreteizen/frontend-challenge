// components/CheckoutOverlay.tsx
'use client'

import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux'
import styles from './index.module.scss'
import Image from 'next/image'
import CartItem from '../ui/CartItem/CartItem'
import { AnimatePresence, motion } from 'framer-motion'

type CheckoutOverlayProps = {
  onClose: () => void
}

export default function CheckoutOverlay({ onClose }: CheckoutOverlayProps) {
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount)

  const [buttonText, setButtonText] = useState('FINALIZAR COMPRA')
  const [isCompleted, setIsCompleted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleClickOutside = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).classList.contains(styles.overlay)) {
      onClose()
    }
  }

  const handleCheckout = () => {
    setIsLoading(true) // Ativa o loading e o spinner
    setButtonText('') // Esvazia o texto temporariamente

    setTimeout(() => {
      setIsLoading(false) // Desativa o loading após 2 segundos
      setButtonText('COMPRA FINALIZADA!') // Exibe o texto final
      setIsCompleted(true)
    }, 2000)
  }

  return (
    <div className={styles.overlay} onClick={handleClickOutside}>
      <motion.div
        className={styles.overlayContent}
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', stiffness: 400, damping: 50 }}
      >
        <div className={styles.header}>
          <button onClick={onClose}>
            <Image src="/leftArrow.png" width={30} height={30} alt="Fechar" />
          </button>
          <h2>Mochila de Compras</h2>
        </div>
        <div className={styles.cartItems}>
          {cartItems.length === 0 ? (
            <p>Carrinho está vazio</p>
          ) : (
            <AnimatePresence initial={false}>
              {cartItems.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </AnimatePresence>
          )}
        </div>
        <div className={styles.total}>
          <h3>TOTAL</h3>
          <div className={styles.price}>
            <Image alt="Ethereum" src="/ethereum.png" width={29} height={29} />{' '}
            {totalAmount} ETH
          </div>
        </div>
        <motion.button
          className={styles.checkoutButton}
          onClick={handleCheckout}
          animate={isCompleted ? { scale: [1, 1.05, 1] } : { scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {isLoading ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 0.5 }}
              className={styles.spinner}
            >
              {/* Ícone do spinner ou símbolo de carregamento */}
              <Image
                src="/spinning.gif"
                unoptimized
                width={20}
                height={20}
                alt="Carregando..."
              />
            </motion.div>
          ) : (
            buttonText
          )}
        </motion.button>
      </motion.div>
    </div>
  )
}
