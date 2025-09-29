import axios from "axios";
import { loginUser } from "../dal/users";

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
