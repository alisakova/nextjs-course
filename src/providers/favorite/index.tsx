'use client'

import {createContext, PropsWithChildren, useCallback, useState} from 'react'
import {Racket} from "../../types/racket";

interface FavoriteContextProps {
  favorites: Record<Racket['id'], boolean>
  setIsFavorite: (params: SetFavoriteParams) => void
}

interface SetFavoriteParams {
  id: Racket['id']
  isFavorite: boolean
}

export const FavoriteContext = createContext<FavoriteContextProps>({ favorites: {}, setIsFavorite: () => {} })

type FavoriteProviderProps = PropsWithChildren

export const FavoriteProvider = ({ children }: FavoriteProviderProps) => {
  const [favorites, setFavorites] = useState<FavoriteContextProps['favorites']>({})

  const setIsFavorite = useCallback(({ isFavorite, id }: SetFavoriteParams) => {
    setFavorites(prev => {
      if (prev[id] === isFavorite) {
        return prev
      }

      return {
        ...prev,
        [id]: isFavorite
      }
    })
  }, [])
  
  return <FavoriteContext value={{ favorites, setIsFavorite }}>{children}</FavoriteContext>
}
