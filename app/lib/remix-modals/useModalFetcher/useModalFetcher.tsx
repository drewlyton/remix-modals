import { useFetcher, useLocation } from "@remix-run/react";

export function useModalFetcher(action: string) {
  const fetcher = useFetcher();
  const location = useLocation();
  return {
    ...fetcher,
    action: `${action || location.pathname}${location.search}`,
  };
}
