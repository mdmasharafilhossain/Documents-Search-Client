import type { ReactNode } from "react";

export interface IProps {
  children : ReactNode;
}

export interface Props {
  setLoading : (val: boolean) => void
  setError : (val: boolean) => void
  setUserResponse : (val: boolean) => void
}

export interface FormData {
  SearchQuery: string
}