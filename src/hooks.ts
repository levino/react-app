import { useQuery } from "@tanstack/react-query"
import { AxiosError, AxiosResponse } from "axios"
import { httpClient } from "./httpClient"

interface Profile {
  avatarUrl: string
  name: string
}
export const useProfileQuery = () =>
  useQuery<Profile, AxiosError>({
    queryKey: ["profile"],
    queryFn: fetchProfile,
  })

const fetchProfile = (): Promise<Profile> =>
  httpClient
    .get<void, AxiosResponse<Profile>>("/profile")
    .then((response) => response.data)
