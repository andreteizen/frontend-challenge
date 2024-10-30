// store/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartItem = {
  id: string
  name: string
  description: string
  price: number
  quantity: number
  image: string
}

type CartState = {
  items: CartItem[]
  totalAmount: number
}

const initialState: CartState = {
  items: [],
  totalAmount: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      )
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
      state.totalAmount += action.payload.price
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const itemId = action.payload
      const itemIndex = state.items.findIndex((item) => item.id === itemId)
      if (itemIndex >= 0) {
        const item = state.items[itemIndex]
        state.totalAmount -= item.price * item.quantity
        state.items.splice(itemIndex, 1)
      }
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload)
      if (item) {
        item.quantity += 1
        state.totalAmount += item.price
      }
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload)
      if (item && item.quantity > 1) {
        item.quantity -= 1
        state.totalAmount -= item.price
      }
    },
  },
})

export const { addItem, removeItem, incrementQuantity, decrementQuantity } =
  cartSlice.actions
export default cartSlice.reducer
