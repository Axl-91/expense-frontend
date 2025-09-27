import axios from "axios"

export async function loginUser(email: string, password: string) {
  try {
    const body = { email, password }
    const response = await axios.post('http://localhost:4000/login', body)

    return response.data
  } catch (err) {
    console.error(err)
    throw new Error('Invalid credentials')
  }
}
