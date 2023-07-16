import React from "react"
import { useProfileQuery } from "../hooks"

export const Avatar: React.FC = () => {
  const { isLoading, isError, data, error } = useProfileQuery()
  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return <img src={data.avatarUrl} className="w-32 rounded-full" />
}
