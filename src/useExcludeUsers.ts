import { create } from 'zustand'


export type ExcludeUsersStore = {
  excludes: string[],
  change: (login: string) => void
}

export const useExcludeUsers = create<ExcludeUsersStore>()((set) => ({
  excludes: [],
  change: (login) => set((state) => {
    const found = state.excludes.indexOf( login)

    return {
      excludes: found >= 0 ? state.excludes.filter( (exclude) => exclude.localeCompare(login)) : [ ...state.excludes, login]
    }
  }),
}))
