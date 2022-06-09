export type SignUpPayloadType = {
  email: string;
  password: string;
};

export type SignInPayloadType = SignUpPayloadType & {
  rememberMe: boolean;
};

export type UpdatingProfilePayloadType = {
  name?: string
  avatar?: string
};

export type ResetPasswordPayloadType = {
  email: string;
  from: string;
  message: string;
};

export type NewPasswordPayloadType = {
  password: string
  resetPasswordToken: string
}

export type CardsPackPayloadType = {
  packName?: string;
  min?: number;
  max?: number;
  sortPacks?: string;
  page?: number;
  pageCount?: number;
  user_id?: string;
};

export type CardsPayloadType = {
  cardAnswer?: string
  cardQuestion?: string
  cardsPack_id: string
  min?: number
  max?: string
  sortCards?: string
  page?: number
  pageCount?: number
};
