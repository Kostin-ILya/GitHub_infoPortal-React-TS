interface BaseUser {
  login: string
  name: string
  company: string
  blog: string
  location: string
  bio: string
  followers: number
  following: number
}

export interface User extends BaseUser {
  id: number
  avatar_url: string
  twitter_username: string
  public_repos: number
  created_at: string
}

export interface LocalUser extends BaseUser {
  avatar: string
  twitter: string
  repos: number
  created: string
}

export interface GithubError {
  message: string
  documentation_url: string
}

export type LoadingStatus = 'loading' | 'success' | 'error'
