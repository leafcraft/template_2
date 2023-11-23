import { gql } from "@apollo/client";

export const loginUser = gql`
  query login($LoginInput: LoginInput!) {
    login(LoginInput: $LoginInput) {
      AccessToken
      ExpiresIn
      TokenType
      RefreshToken
      IdToken
    }
  }
`;

export const confirmUser = gql`
  query confirmUser($ConfirmInput:ConfirmInput!) {
    confirmUser(ConfirmInput:$ConfirmInput)
  }
`;