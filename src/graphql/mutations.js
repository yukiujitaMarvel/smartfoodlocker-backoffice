/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createItems = /* GraphQL */ `
  mutation CreateItems(
    $input: CreateItemsInput!
    $condition: ModelItemsConditionInput
  ) {
    createItems(input: $input, condition: $condition) {
      id
      item_img
      category_id
      item_name
      item_price
      release
      deleteAt
      item_stock
      create_user
      update_user
      delete_user
      logical_deletion_flg
      createdAt
      updatedAt
    }
  }
`;
export const updateItems = /* GraphQL */ `
  mutation UpdateItems(
    $input: UpdateItemsInput!
    $condition: ModelItemsConditionInput
  ) {
    updateItems(input: $input, condition: $condition) {
      id
      item_img
      category_id
      item_name
      item_price
      release
      deleteAt
      item_stock
      create_user
      update_user
      delete_user
      logical_deletion_flg
      createdAt
      updatedAt
    }
  }
`;
export const deleteItems = /* GraphQL */ `
  mutation DeleteItems(
    $input: DeleteItemsInput!
    $condition: ModelItemsConditionInput
  ) {
    deleteItems(input: $input, condition: $condition) {
      id
      item_img
      category_id
      item_name
      item_price
      release
      deleteAt
      item_stock
      create_user
      update_user
      delete_user
      logical_deletion_flg
      createdAt
      updatedAt
    }
  }
`;
export const createUsers = /* GraphQL */ `
  mutation CreateUsers(
    $input: CreateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    createUsers(input: $input, condition: $condition) {
      user_id
      user_name
      user_email
      user_number
      createdAt
      updatedAt
    }
  }
`;
export const updateUsers = /* GraphQL */ `
  mutation UpdateUsers(
    $input: UpdateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    updateUsers(input: $input, condition: $condition) {
      user_id
      user_name
      user_email
      user_number
      createdAt
      updatedAt
    }
  }
`;
export const deleteUsers = /* GraphQL */ `
  mutation DeleteUsers(
    $input: DeleteUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    deleteUsers(input: $input, condition: $condition) {
      user_id
      user_name
      user_email
      user_number
      createdAt
      updatedAt
    }
  }
`;
export const createCarts = /* GraphQL */ `
  mutation CreateCarts(
    $input: CreateCartsInput!
    $condition: ModelCartsConditionInput
  ) {
    createCarts(input: $input, condition: $condition) {
      id
      item_id
      items {
        id
        item_img
        category_id
        item_name
        item_price
        release
        deleteAt
        item_stock
        create_user
        update_user
        delete_user
        logical_deletion_flg
        createdAt
        updatedAt
      }
      user_id
      rice_option
      soup_option
      createdAt
      updatedAt
    }
  }
`;
export const updateCarts = /* GraphQL */ `
  mutation UpdateCarts(
    $input: UpdateCartsInput!
    $condition: ModelCartsConditionInput
  ) {
    updateCarts(input: $input, condition: $condition) {
      id
      item_id
      items {
        id
        item_img
        category_id
        item_name
        item_price
        release
        deleteAt
        item_stock
        create_user
        update_user
        delete_user
        logical_deletion_flg
        createdAt
        updatedAt
      }
      user_id
      rice_option
      soup_option
      createdAt
      updatedAt
    }
  }
`;
export const deleteCarts = /* GraphQL */ `
  mutation DeleteCarts(
    $input: DeleteCartsInput!
    $condition: ModelCartsConditionInput
  ) {
    deleteCarts(input: $input, condition: $condition) {
      id
      item_id
      items {
        id
        item_img
        category_id
        item_name
        item_price
        release
        deleteAt
        item_stock
        create_user
        update_user
        delete_user
        logical_deletion_flg
        createdAt
        updatedAt
      }
      user_id
      rice_option
      soup_option
      createdAt
      updatedAt
    }
  }
`;
export const createPayInfo = /* GraphQL */ `
  mutation CreatePayInfo(
    $input: CreatePayInfoInput!
    $condition: ModelPayInfoConditionInput
  ) {
    createPayInfo(input: $input, condition: $condition) {
      user_id
      card_number
      expiry
      createdAt
      updatedAt
    }
  }
`;
export const updatePayInfo = /* GraphQL */ `
  mutation UpdatePayInfo(
    $input: UpdatePayInfoInput!
    $condition: ModelPayInfoConditionInput
  ) {
    updatePayInfo(input: $input, condition: $condition) {
      user_id
      card_number
      expiry
      createdAt
      updatedAt
    }
  }
`;
export const deletePayInfo = /* GraphQL */ `
  mutation DeletePayInfo(
    $input: DeletePayInfoInput!
    $condition: ModelPayInfoConditionInput
  ) {
    deletePayInfo(input: $input, condition: $condition) {
      user_id
      card_number
      expiry
      createdAt
      updatedAt
    }
  }
`;
