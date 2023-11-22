import { gql } from "@apollo/client";

export const login = gql`
  query login($password: String!, $email: String!) {
    login(password: $password, email: $email) {
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