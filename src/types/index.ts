export type IUser = {
    handle: string
    name: string
    email: string
}

export type RegisterForm = Pick<IUser, 'handle' | 'name' | 'email'> & {
    password: string,
    password_confirmation: string
}
