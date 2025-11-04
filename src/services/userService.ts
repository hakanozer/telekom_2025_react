import { iUser } from "../models/iUser"
import { apiConfig } from "./apiConfig"

export const userLogin = (email: string, password: string) => {
    const sendObj = {
        email: email,
        password: password
    }
    return apiConfig.post<iUser>('auth/login', sendObj)
}