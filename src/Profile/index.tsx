import React from "react"
import { Avatar } from "./Avatar"
import { Name } from "./Name"

export const Profile: React.FC = () => (
  <div className="flex items-center gap-2">
    <Name />
    <Avatar />
  </div>
)
