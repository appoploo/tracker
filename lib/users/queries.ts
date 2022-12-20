import axios, { AxiosError } from "axios";
import useSWR from "swr";
import { fetcher } from "../utils";
import { User } from "./types";

export function useUsers() {
  const { data, error } = useSWR<User[], AxiosError>(`/api/auth`, fetcher);

  return {
    data: data ?? ([] as User[]),
    isLoading: !error && !data,
    isError: error,
  };
}

export async function login(username: string, password: string) {
  const data = await axios.post("/api/auth?type=login", { username, password });
  return { data: data };
}

export async function register(
  username: string,
  password: string,
  passwordConfirmation: string
) {
  const data = await axios.post("/api/auth?type=register", {
    username,
    password,
    passwordConfirmation,
  });
  return { data: data };
}
