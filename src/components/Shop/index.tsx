'use client'

import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { motion } from 'framer-motion'
import styles from './index.module.scss'
import Card from '../ui/Card/Card'

export interface Product {
  id: number
  name: string
  description: string
  image: string
  price: number
  createdAt: string
}

interface ApiResponse {
  data: Product[]
  metadata: {
    hasNextPage: boolean
    count: number
    hasPreviousPage: boolean
    limit: number
    page: number
    pageCount: number
  }
}

const fetchProducts = async (page: number): Promise<ApiResponse> => {
  const res = await fetch(
    `https://starsoft-challenge-7dfd4a56a575.herokuapp.com/v1/products?limit=8&page=${page}`,
  )
  return res.json()
}

export default function Shop() {
  const [page, setPage] = useState(1)
  const [products, setProducts] = useState<Product[]>([])

  const { data, isFetching, isError } = useQuery<ApiResponse>({
    queryKey: ['products', page],
    queryFn: () => fetchProducts(page),
  })

  useEffect(() => {
    if (data) {
      setProducts((prevProducts) => [...prevProducts, ...data.data])
    }
  }, [data])

  const loadMore = () => {
    if (data?.metadata.hasNextPage) {
      setPage((prevPage) => prevPage + 1)
    }
  }

  return (
    <div className={styles.container}>
      <section className={styles.productGrid}>
        {products.length === 0 ? (
          <>
            <Card />
            <Card />
            <Card />
            <Card />
          </>
        ) : (
          products.map((item: Product) => <Card key={item.id} item={item} />)
        )}
      </section>
      <div className={styles.loadMoreContainer}>
        <motion.div
          className={styles.progressBar}
          style={
            {
              '--progress-width': `${(products.length / (data?.metadata.count ?? products.length)) * 100}%`,
            } as React.CSSProperties
          }
          transition={{ duration: 1 }}
        />
        <button
          className={styles.loadMore}
          onClick={loadMore}
          disabled={isFetching || products.length === data?.metadata.count}
        >
          {products.length !== data?.metadata.count
            ? 'Carregar Mais'
            : 'Você já viu tudo'}
        </button>
      </div>
      {isError && <p>Erro ao carregar produtos.</p>}
    </div>
  )
}
