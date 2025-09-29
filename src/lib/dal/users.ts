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
