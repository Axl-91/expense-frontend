'use server'

import { loginUser } from "../dal/users";

type ResponseMessage = {
  error?: string,
  message?: string
}

export async function handleLogin(_prevState: ResponseMessage | undefined, formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  try {
    const response = await loginUser(email, password)

    if (response.error) {
      return { error: 'Invalid credentials' }
    }

    return { message: 'Login successful' }
  } catch (err) {
    console.error(err)
    return { error: 'Unknown error' }
  }
}
