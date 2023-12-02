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

export const logout = gql`
query logout {
  logout
}
`;

export const confirmUser = gql`
  query confirmUser($ConfirmInput:ConfirmInput!) {
    confirmUser(ConfirmInput:$ConfirmInput)
  }
`;

export const reconfirmUser = gql`
  query resendConfirmCode($resendConfirmationCodeInput:resendConfirmationCodeInput!) {
    resendConfirmCode(resendConfirmationCodeInput:$resendConfirmationCodeInput)
  }
`;

export const forgotPasswordLogin = gql`
  query forgot_password($ForgotInput:resendConfirmationCodeInput!) {
    forgot_password(ForgotInput:$ForgotInput)
  }
`;

export const UserDetails = gql`
query{
  userDetails{
  _id
  name
  image
  cognitoID
  email
  type
  bio
  dob
  contacts{
    _id
    type
    number
    }
    addresses{
    _id
    name
    type
    }
  total_order
  total_order_amount
  creation_date
  isOk
  organisation{
  _id
  }
  deleted
  }
  }
`;

export const ProductsData = gql`
query products($organisationID:String!,$isAllowed:Boolean!,$isAdmin:Boolean!){
  products(organisationID:$organisationID,isAllowed:$isAllowed,isAdmin:$isAdmin){
    items{
      _id
      name
      slug
      unit
      dishType
      orderType
      quantity
      price
      salePrice
      discountInPercent
      description
      type
      image
      weightInGrams
      gallery{
      url
      }
      organisation{
      _id
      }
      published
      creation_date
      per_unit
      views
      sales
      linkedProducts{
      _id
      }
      isallowed
      product_params{
      size
      }
      size
      }
      total
      hasMore
  }
}
`;

export const ProductDataID = gql`
  query product($slug:String!,$productID:String!,$organisationID:String!) {
    product(slug:$slug,productID:$productID,organisationID:$organisationID){
      _id
name
slug
unit
dishType
orderType
quantity
price
salePrice
discountInPercent
description
type
image
weightInGrams
gallery{
  url
  
}
vendor{
_id
}
organisation{
_id
  name
}	
customer{
_id
  name
}
published
creation_date

per_unit
views
sales

isallowed
size
    }
  }
`;

export const getRazorpayOrder = gql`
  query getRazorpayOrder($organisationID:String!,$amount:Float!) {
    getRazorpayOrder(organisationID:$organisationID,amount:$amounts)
  }
`;


export const  deliveryChargeArrays= gql`
  query deliveryChargeArrays($productID:String!,$Quantity:Float!) {
    deliveryChargeArrays(productID:$productID,Quantity:$Quantity)
  }
`;

