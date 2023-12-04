import { gql } from "@apollo/client";

export const signUp = gql`
  mutation signUp($userInput: AdduserInput!) {
    signUp(userInput: $userInput)
    {
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

export const ForgotPasswordOtp = gql`
  mutation forgotPasswordCode($ForgotPassowrdInput: ForgotPasswordCodeInput!) {
    forgotPasswordCode(ForgotPassowrdInput: $ForgotPassowrdInput)
  }
`;

export const changePassword = gql`
  mutation changePassword($ChangePasswordInput: ChangePasswordInput!) {
    changePassword(ChangePasswordInput: $ChangePasswordInput)
  }
`;

export const addOrders = `
mutation{
  addOrders(orderInput:OrderInput!){
  _id
  customer{
    _id
    name
  },
  amount  
  date
  subtotal
  discount
  creation_date
  payment_method
  address
  contact_number
  pincode
  delivery_fee
  organisation
  {
    _id
  },
  razorpayID
  }
  }
  `;
