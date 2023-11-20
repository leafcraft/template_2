import { gql } from "@apollo/client";

export const signUp = gql`
  mutation signUp($userInput: AdduserInput!) {
    signUp(userInput: $userInput){
      _id
      name
      image
      cognitoID
      email
      type
      bio
      dob
      creation_date
      organisation{
        _id
      }
      deleted
      rank
      contact{
      _id
      type
      number
      customer{
      _id
      }
      }
      address{
      _id
      name
      type
      address
      pincode
      customer{
      _id
      }
      }
      }
  }
`;
