import React from "react"
import { useProfileQuery } from "../hooks"

export const Name: React.FC = () => {
  const { data, isLoading, isError } = useProfileQuery()
  if (isLoading || isError) {
    return null
  }
  return <p>{data.name}</p>
}
