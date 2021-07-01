export interface IUser{
  name: string
  player_id?: number
}

export interface IUserRegistration{
  name: string;
  password: string;
}

export interface IUserAuthoriztion{
  name: string;
  password: string;
}