import * as yup from 'yup';

export enum AuthProvider {
  Google = 'google',
  Github = 'github',
}

export const getTokenParamsSchema = yup.object().shape({
  provider: yup.string().oneOf(Object.values(AuthProvider)).required(),
});

export const getTokenBodySchema = yup.object().shape({
  code: yup.string().required(),
});

export const GetUserInfoBody = yup.object().shape({
  access_token: yup.string().required(),
});

export const refreshTokenSchema = yup.object({
  refresh_token: yup.string().required(),
});

/** Type Declarations */
export type GetTokenParams = yup.InferType<typeof getTokenParamsSchema>;
export type GetUserInfoBody = yup.InferType<typeof GetUserInfoBody>;
export type GetTokenBody = yup.InferType<typeof getTokenBodySchema>;
export type RefreshAccessTokenBody = yup.InferType<typeof refreshTokenSchema>;
