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

export const userCreateSchema = z.object({
  username: z.string().min(3),
  nickName: z.string().optional(),
  picture: z.string().url().optional(),
  type: z.enum(["email", "phone", "oauth"]),
  email: z.string().email().optional(),
  phone: z
    .string()
    .refine((val) => /^1[3-9]\d{9}$/.test(val), "手机号格式错误")
    // .regex(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}$/)
    .optional(),
  oauthId: z.string().optional(),
  provider: z.enum(["github", "gitee"]).optional(),
  password: z.string().min(6).optional(),
  passwordConfirmation: z.string().min(6).optional(),
  role: z.enum(["admin", "user"]).optional(),
  disabled: z.boolean().optional(),
})

export type userSignupType = z.infer<typeof userSignupSchema>