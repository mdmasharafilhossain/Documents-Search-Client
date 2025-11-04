import type { ReactNode } from "react";

export interface IProps {
  children : ReactNode;
}

export interface Props {
  setLoading : (val: boolean) => void
  setError : (val: string) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setUserResponse : (val: any) => void
}

export interface FormData {
  SearchQuery: string
}