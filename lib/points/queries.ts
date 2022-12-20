import axios, { AxiosError } from "axios";
import useSWR from "swr";
import { fetcher } from "../utils";
import { Points } from "../points/types";

export function usePoints(
  IMEI?: string | string[] | undefined,
  days?: string | string[] | undefined
) {
  const { data, error } = useSWR<Points[], AxiosError>(
    IMEI && `/api/tracker/${IMEI}?days=${days}`,
    fetcher
  );

  return {
    data: data ?? ([] as Points[]),
    isLoading: !error && !data,
    isError: error,
  };
}
