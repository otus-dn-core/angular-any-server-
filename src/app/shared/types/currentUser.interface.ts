export interface CurrentUserInterface {
  id: number
  email: string
  createdAt: string
  updatedAt: string
  username: string
  image: string | null
  token: string
  inactive: boolean
  role: string
  pseudonym: string | null
}

