/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getItems = /* GraphQL */ `
  query GetItems($id: ID!) {
    getItems(id: $id) {
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
export const listItems = /* GraphQL */ `
  query ListItems(
    $id: ID
    $filter: ModelItemsFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listItems(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
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
  query GetCarts($id: ID!) {
    getCarts(id: $id) {
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
      users {
        user_id
        user_name
        user_email
        user_number
        createdAt
        updatedAt
      }
      rice_option
      soup_option
      createdAt
      updatedAt
    }
  }
`;
export const listCarts = /* GraphQL */ `
  query ListCarts(
    $id: ID
    $filter: ModelCartsFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCarts(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        item_id
        user_id
        rice_option
        soup_option
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOrders = /* GraphQL */ `
  query GetOrders($id: ID!) {
    getOrders(id: $id) {
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
      users {
        user_id
        user_name
        user_email
        user_number
        createdAt
        updatedAt
      }
      statas
      lock_flg
      item_num
      create_user
      update_user
      createdAt
      updatedAt
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $id: ID
    $filter: ModelOrdersFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listOrders(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        item_id
        user_id
        statas
        lock_flg
        item_num
        create_user
        update_user
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
export const getTickets = /* GraphQL */ `
  query GetTickets($id: ID!) {
    getTickets(id: $id) {
      id
      ticket_img
      ticket_title
      ticket_content
      start_use
      expiry
      create_user
      update_user
      createdAt
      updatedAt
    }
  }
`;
export const listTickets = /* GraphQL */ `
  query ListTickets(
    $id: ID
    $filter: ModelTicketsFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTickets(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        ticket_img
        ticket_title
        ticket_content
        start_use
        expiry
        create_user
        update_user
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
