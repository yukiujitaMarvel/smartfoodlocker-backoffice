/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getItemList = /* GraphQL */ `
  query GetItemList($item_id: String!) {
    getItemList(item_id: $item_id) {
      item_id
      item_img
      category_id
      item_name
      item_price
      remaiks
      release
      create_at
      update_at
      delete_at
      create_user
      update_user
      delete_user
      logical_deletion_flg
    }
  }
`;
export const listItemLists = /* GraphQL */ `
  query ListItemLists($limit: Int, $nextToken: String) {
    listItemLists(limit: $limit, nextToken: $nextToken) {
      items {
        item_id
        item_img
        category_id
        item_name
        item_price
        remaiks
        release
        create_at
        update_at
        delete_at
        create_user
        update_user
        delete_user
        logical_deletion_flg
      }
      nextToken
    }
  }
`;
export const getItems = /* GraphQL */ `
  query GetItems($item_id: ID!) {
    getItems(item_id: $item_id) {
      item_id
      item_img
      category_id
      item_name
      item_price
      race_option
      soup_option
      release
      deleteAt
      create_user
      update_user
      delete_user
      logical_deletion_flg
      createdAt
      updatedAt
    }
  }
`;
export const listItems = /* GraphQL */ `
  query ListItems(
    $item_id: ID
    $filter: ModelItemsFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listItems(
      item_id: $item_id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        item_id
        item_img
        category_id
        item_name
        item_price
        race_option
        soup_option
        release
        deleteAt
        create_user
        update_user
        delete_user
        logical_deletion_flg
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUsers = /* GraphQL */ `
  query GetUsers($user_id: ID!) {
    getUsers(user_id: $user_id) {
      user_id
      user_name
      user_email
      user_number
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $user_id: ID
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      user_id: $user_id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        user_id
        user_name
        user_email
        user_number
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCarts = /* GraphQL */ `
  query GetCarts($item_id: ID!, $user_id: ID!) {
    getCarts(item_id: $item_id, user_id: $user_id) {
      item_id
      user_id
      createdAt
      updatedAt
    }
  }
`;
export const listCarts = /* GraphQL */ `
  query ListCarts(
    $item_id: ID
    $user_id: ModelIDKeyConditionInput
    $filter: ModelCartsFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCarts(
      item_id: $item_id
      user_id: $user_id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        item_id
        user_id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPayInfo = /* GraphQL */ `
  query GetPayInfo($user_id: ID!) {
    getPayInfo(user_id: $user_id) {
      user_id
      card_number
      expiry
      createdAt
      updatedAt
    }
  }
`;
export const listPayInfos = /* GraphQL */ `
  query ListPayInfos(
    $user_id: ID
    $filter: ModelPayInfoFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPayInfos(
      user_id: $user_id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        user_id
        card_number
        expiry
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
