import React from "react"

import { Avatar as FlowbiteAvatar } from "flowbite-react"
import { useProfileQuery } from "../hooks"

export const Avatar: React.FC = () => {
  const { isLoading, isError, data, error } = useProfileQuery()
  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <div className="max-h-24">
      <FlowbiteAvatar img={data.avatarUrl} />
    </div>
  )
}
