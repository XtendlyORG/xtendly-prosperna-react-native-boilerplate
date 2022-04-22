export interface AuthState {
  loading: Loading
  loggedIn: boolean
  token: string
}

export interface Login {
  username: string
  password: string
}

export interface LoginResponse {
  title: string
  message: string
  token?: string
  status: number
}

export interface Logout {
  token: string
}

export interface LogoutResponse {
  title: string
  message: string
  status: number
}
