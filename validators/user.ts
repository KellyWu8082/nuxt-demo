import { z } from 'zod'

export const userLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
})

export type userLoginType = z.infer<typeof userLoginSchema>

export const userSignupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  confirmPwd: z.string().min(6)
}).refine((data) => data.confirmPwd === data.password, {
  message: "Password don't match",
  path: ['confirmPwd']
})

export type userSignupType = z.infer<typeof userSignupSchema>