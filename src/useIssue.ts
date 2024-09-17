import { create } from 'zustand'

const HOST = 'https://api.github.com/repos/'
const INITIAL_ISSUE_URI = 'facebook/react/issues/7901'

export type IssueURLStore = {
  uri: string,
  url: string
  change: (newValue: string) => void
}

export const useIssue = create<IssueURLStore>()((set) => ({
  url: `${HOST}${INITIAL_ISSUE_URI}`,
  uri: INITIAL_ISSUE_URI,
  change: (newValue) => set(() => ({
    uri: newValue,
    url: `${HOST}${newValue}`
  })),
}))
