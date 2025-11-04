/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ReactNode } from "react";

export interface IProps {
  children : ReactNode;
}

export interface SearchProps {
  setLoading : (val: boolean) => void
  setError : (val: string) => void
  setUserResponse : (val: any) => void
}

export interface FormData {
  SearchQuery: string
}

interface LegalDoc {
 
   id: number;
  title : string;
  content: string;

}
interface ApiResponse {
   query : string ;
  summary:string;
  results:  LegalDoc[];
}
export interface ResultProps {
   SummaryResult : ApiResponse | null
}