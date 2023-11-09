import { gql } from "@apollo/client";

export const GET_LOGGED_IN_CUSTOMER = gql`
  query customer($id: String, $cognitoID: String) {
    customer(id: $id, cognitoID: $cognitoID) {
      _id
      name
      email
      cognitoID
      contacts {
        _id
        type
        number
      }
      addresses {
        _id
        name
        address
        pincode
        type
      }
    }
  }
`;

export const GET_ADDRESS = gql`
  query FindAddress($customerID: String!) {
    FindAddress(customerID: $customerID) {
      name
      address
      pincode
      customer {
        _id
        name
        primary_contact
        contacts
        cognitoID
        image
        email
      }
    }
  }
`;

export const CHECK_CUSTOMER = gql`
  query checkCustomerExistence($email: String!) {
    checkCustomerExistence(email: $email)
  }
`;
