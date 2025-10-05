import axios from "axios";
import { loginUser, logoutUser, signupUser } from "../api/users.client";

export async function handleSignup(formData: FormData) {
  const username = formData.get('username') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  try {
    await signupUser(username, email, password)
  } catch (err) {
    if (axios.isAxiosError(err)) {
      if (err.response) {
        return `${err.response.data.message}`
      }
      return 'Unknown error'
    }
  }
}

export async function handleLogin(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  try {
    const response = await loginUser(email, password)

    if (response.error) {
      return 'Invalid credentials'
    }
  } catch (err) {
    if (axios.isAxiosError(err)) {
      if (err.response) {
        return `${err.response.data.message}`
      }
      return 'Unknown error'
    }
  }
}

export async function handleLogout() {
  try {
    await logoutUser()
  } catch (err) {
    if (axios.isAxiosError(err)) {
      if (err.response) {
        return `${err.response.data.message}`
      }
      return 'Unknown error'
    }
  }
}
