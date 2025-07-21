import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ICartItem {
  id: number;
  image: string;
  title: string;
  price: number;
  quantity: number;
}

interface ICartStore {
  items: ICartItem[];
  addItem: (item: ICartItem) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  getTotalPrice: () => number;
  isInCart: (id: number) => boolean;
}

export const useCart = create<ICartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => {
        const currentItems = get().items || []; // defensive check

        const existing = currentItems.find((i) => i.id === item.id);
        if (existing) {
          set({
            items: currentItems.map((i) =>
              i.id === item.id
                ? { ...i, quantity: i.quantity + item.quantity }
                : i
            ),
          });
        } else {
          set({ items: [...currentItems, item] });
        }
      },
      removeItem: (id) =>
        set({ items: get().items.filter((item) => item.id !== id) }),
      clearCart: () => set({ items: [] }),
      increaseQuantity: (id) => {
        set({
          items: get().items.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        });
      },
      decreaseQuantity: (id) => {
        const updatedItems = get()
          .items.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter((item) => item.quantity > 0); // удаляем, если quantity стал 0

        set({ items: updatedItems });
      },
      getTotalPrice: () => {
        return get().items.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
      },
      isInCart: (id) => {
        return get().items.some((item) => item.id === id);
      },
    }),

    {
      name: "cart-storage", // ключ в localStorage
    }
  )
);
