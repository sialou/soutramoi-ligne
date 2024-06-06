export interface Users {
  id:number
  name:string
  created_at:Date
  updated_at?:Date
  phone:string
  phone_verified: string
  email: string
  email_verified: string
  username:string
  password: string
  gender: string
  photo_url: string
  cover_url:string
  provider:string
  provider_id:string
  city_id: number
  town_id: number
  professional_id: number
}
