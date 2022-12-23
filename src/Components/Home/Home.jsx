

import { useAuth } from "../../authContext"

export function Home() {
    const {user} = useAuth()

    console.log(user)

  return (
    <div>Home</div>
  )
}


