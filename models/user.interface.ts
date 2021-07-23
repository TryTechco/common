import { Social } from './social.interface'
import { Order } from './order.interface'
import { Asset } from './asset.interface'

export type Role = 'admin' | 'gallery' | 'artist' | 'user'

export interface Auth0User {
  sub: string
  name: string
  birthday?: string
  email?: string
  last_ip?: string
  picture?: string
  phone_number?: string
}

export interface User extends Auth0User {
  role: Role
  social?: Social
  wallet_address?: string
  orders?: Order[]
  address?: string
}

export interface Gallery extends User {
  role: 'gallery'
  products?: Asset[]
  artists?: Artist[]
}

export interface Artist extends User {
  role: 'artist'
  collection?: Asset[]
  boss?: Gallery
}
