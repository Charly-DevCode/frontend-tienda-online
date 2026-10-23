import { createContext, useState, type FC, type PropsWithChildren } from "react";
import type { IItemBase } from "@/shared/interfaces/item.base.dto";

interface CartContextProps {
  items: IItemBase[];
  counter: number;
  handleAddCart: (newItem: IItemBase) => void;
  handleRemoveItemCart: (index: number) => void;
  handleRemoveAllCart: () => void;
}

export const CartContext = createContext( {} as CartContextProps);

export const CartProvider: FC<PropsWithChildren> = ({ children }) => {
  const [ items, setItems ] = useState<IItemBase[]>(() => {
      try {
        const itemsStorage = localStorage.getItem('articles');
  
        return itemsStorage ? JSON.parse(itemsStorage) : [];
      } catch (error) {
        console.error("Error al leer el carrito", error);
        return [];
      }
    });  
  
    const handleAddCart = (newItem: IItemBase) => {
      const updatedCart = [...items, newItem];    
      // Actualizamos el estado de React
      setItems(updatedCart);    
      // Guardamos en localStorage
      localStorage.setItem('articles', JSON.stringify(updatedCart));
    }
  
    const handleRemoveItemCart = (index: number) => {
      // Filtramos el array excluyendo el índice que queremos borrar (inmutable)
      const updatedCart = items.filter((_, i) => i !== index);    
      // Actualizamos el estado de React
      setItems(updatedCart);    
      // Actualizamos localStorage
      localStorage.setItem('articles', JSON.stringify(updatedCart));
    }
  
    const handleRemoveAllCart = () => {
      setItems([]);
      localStorage.setItem('articles', JSON.stringify([]));
    }

    return (
    <CartContext.Provider value={{
      items,
      counter: items.length,
      handleAddCart,
      handleRemoveItemCart,
      handleRemoveAllCart
    }}>
      { children }
    </CartContext.Provider>
  );
}