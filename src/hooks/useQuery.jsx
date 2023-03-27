import { useMemo } from "react";
import { useLocation } from "react-router-dom";

export function useQuery() {
  const { search } = useLocation(); //Pega os parâmetros da URL

  return useMemo(() => new URLSearchParams(search), [search]);
}
