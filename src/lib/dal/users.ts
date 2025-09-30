import axios from "axios"

export async function loginUser(email: string, password: string) {
  const body = { email, password }
  const response =
    await axios.post(
      'http://localhost:4000/user/login',
      body,
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  return response.data
}

export async function getUser() {
  const response =
    await axios.get(
      'http://localhost:4000/user',
      { withCredentials: true }
    )
  return response.data
}

export async function logoutUser() {
  const response =
    await axios.post(
      'http://localhost:4000/user/logout',
      {},
      { withCredentials: true }
    )

  return response.data
}

