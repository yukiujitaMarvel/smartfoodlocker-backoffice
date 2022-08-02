/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMenus = /* GraphQL */ `
  mutation CreateMenus(
    $input: CreateMenusInput!
    $condition: ModelMenusConditionInput
  ) {
    createMenus(input: $input, condition: $condition) {
      id
      item_img
      item_name
      item_price
      item_stock
      release_day
      item_detail
      createdAt
      updatedAt
    }
  }
`;
export const updateMenus = /* GraphQL */ `
  mutation UpdateMenus(
    $input: UpdateMenusInput!
    $condition: ModelMenusConditionInput
  ) {
    updateMenus(input: $input, condition: $condition) {
      id
      item_img
      item_name
      item_price
      item_stock
      release_day
      item_detail
      createdAt
      updatedAt
    }
  }
`;
export const deleteMenus = /* GraphQL */ `
  mutation DeleteMenus(
    $input: DeleteMenusInput!
    $condition: ModelMenusConditionInput
  ) {
    deleteMenus(input: $input, condition: $condition) {
      id
      item_img
      item_name
      item_price
      item_stock
      release_day
      item_detail
      createdAt
      updatedAt
    }
  }
`;
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
      item_num
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
      item_num
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
      item_num
      createdAt
      updatedAt
    }
  }
`;
export const createOrders = /* GraphQL */ `
  mutation CreateOrders(
    $input: CreateOrdersInput!
    $condition: ModelOrdersConditionInput
  ) {
    createOrders(input: $input, condition: $condition) {
      id
      order_detail {
        items {
          id
          cart_id
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
          rice_option
          soup_option
          item_num
          createdAt
          updatedAt
        }
        nextToken
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
      total_price
      pickup_place
      pickup_time
      status
      lock_flg
      createdAt
      updatedAt
    }
  }
`;
export const updateOrders = /* GraphQL */ `
  mutation UpdateOrders(
    $input: UpdateOrdersInput!
    $condition: ModelOrdersConditionInput
  ) {
    updateOrders(input: $input, condition: $condition) {
      id
      order_detail {
        items {
          id
          cart_id
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
          rice_option
          soup_option
          item_num
          createdAt
          updatedAt
        }
        nextToken
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
      total_price
      pickup_place
      pickup_time
      status
      lock_flg
      createdAt
      updatedAt
    }
  }
`;
export const deleteOrders = /* GraphQL */ `
  mutation DeleteOrders(
    $input: DeleteOrdersInput!
    $condition: ModelOrdersConditionInput
  ) {
    deleteOrders(input: $input, condition: $condition) {
      id
      order_detail {
        items {
          id
          cart_id
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
          rice_option
          soup_option
          item_num
          createdAt
          updatedAt
        }
        nextToken
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
      total_price
      pickup_place
      pickup_time
      status
      lock_flg
      createdAt
      updatedAt
    }
  }
`;
export const createOrderDetail = /* GraphQL */ `
  mutation CreateOrderDetail(
    $input: CreateOrderDetailInput!
    $condition: ModelOrderDetailConditionInput
  ) {
    createOrderDetail(input: $input, condition: $condition) {
      id
      cart_id
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
      rice_option
      soup_option
      item_num
      createdAt
      updatedAt
    }
  }
`;
export const updateOrderDetail = /* GraphQL */ `
  mutation UpdateOrderDetail(
    $input: UpdateOrderDetailInput!
    $condition: ModelOrderDetailConditionInput
  ) {
    updateOrderDetail(input: $input, condition: $condition) {
      id
      cart_id
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
      rice_option
      soup_option
      item_num
      createdAt
      updatedAt
    }
  }
`;
export const deleteOrderDetail = /* GraphQL */ `
  mutation DeleteOrderDetail(
    $input: DeleteOrderDetailInput!
    $condition: ModelOrderDetailConditionInput
  ) {
    deleteOrderDetail(input: $input, condition: $condition) {
      id
      cart_id
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
      rice_option
      soup_option
      item_num
      createdAt
      updatedAt
    }
  }
`;
export const createMenuOrders = /* GraphQL */ `
  mutation CreateMenuOrders(
    $input: CreateMenuOrdersInput!
    $condition: ModelMenuOrdersConditionInput
  ) {
    createMenuOrders(input: $input, condition: $condition) {
      id
      user_id
      users {
        user_id
        user_name
        user_email
        user_number
        createdAt
        updatedAt
      }
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
      total_price
      pickup_place
      pickup_time
      status
      lock_flg
      createdAt
      updatedAt
    }
  }
`;
export const updateMenuOrders = /* GraphQL */ `
  mutation UpdateMenuOrders(
    $input: UpdateMenuOrdersInput!
    $condition: ModelMenuOrdersConditionInput
  ) {
    updateMenuOrders(input: $input, condition: $condition) {
      id
      user_id
      users {
        user_id
        user_name
        user_email
        user_number
        createdAt
        updatedAt
      }
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
      total_price
      pickup_place
      pickup_time
      status
      lock_flg
      createdAt
      updatedAt
    }
  }
`;
export const deleteMenuOrders = /* GraphQL */ `
  mutation DeleteMenuOrders(
    $input: DeleteMenuOrdersInput!
    $condition: ModelMenuOrdersConditionInput
  ) {
    deleteMenuOrders(input: $input, condition: $condition) {
      id
      user_id
      users {
        user_id
        user_name
        user_email
        user_number
        createdAt
        updatedAt
      }
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
      total_price
      pickup_place
      pickup_time
      status
      lock_flg
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
export const createTickets = /* GraphQL */ `
  mutation CreateTickets(
    $input: CreateTicketsInput!
    $condition: ModelTicketsConditionInput
  ) {
    createTickets(input: $input, condition: $condition) {
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
export const updateTickets = /* GraphQL */ `
  mutation UpdateTickets(
    $input: UpdateTicketsInput!
    $condition: ModelTicketsConditionInput
  ) {
    updateTickets(input: $input, condition: $condition) {
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
export const deleteTickets = /* GraphQL */ `
  mutation DeleteTickets(
    $input: DeleteTicketsInput!
    $condition: ModelTicketsConditionInput
  ) {
    deleteTickets(input: $input, condition: $condition) {
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
export const createSchedules = /* GraphQL */ `
  mutation CreateSchedules(
    $input: CreateSchedulesInput!
    $condition: ModelSchedulesConditionInput
  ) {
    createSchedules(input: $input, condition: $condition) {
      id
      date
      holiday_flg
      individual_flg
      start_time
      finish_time
      createdAt
      updatedAt
    }
  }
`;
export const updateSchedules = /* GraphQL */ `
  mutation UpdateSchedules(
    $input: UpdateSchedulesInput!
    $condition: ModelSchedulesConditionInput
  ) {
    updateSchedules(input: $input, condition: $condition) {
      id
      date
      holiday_flg
      individual_flg
      start_time
      finish_time
      createdAt
      updatedAt
    }
  }
`;
export const deleteSchedules = /* GraphQL */ `
  mutation DeleteSchedules(
    $input: DeleteSchedulesInput!
    $condition: ModelSchedulesConditionInput
  ) {
    deleteSchedules(input: $input, condition: $condition) {
      id
      date
      holiday_flg
      individual_flg
      start_time
      finish_time
      createdAt
      updatedAt
    }
  }
`;
export const createWeeks = /* GraphQL */ `
  mutation CreateWeeks(
    $input: CreateWeeksInput!
    $condition: ModelWeeksConditionInput
  ) {
    createWeeks(input: $input, condition: $condition) {
      id
      day_of_week
      holiday_flg
      start_time
      finish_time
      createdAt
      updatedAt
    }
  }
`;
export const updateWeeks = /* GraphQL */ `
  mutation UpdateWeeks(
    $input: UpdateWeeksInput!
    $condition: ModelWeeksConditionInput
  ) {
    updateWeeks(input: $input, condition: $condition) {
      id
      day_of_week
      holiday_flg
      start_time
      finish_time
      createdAt
      updatedAt
    }
  }
`;
export const deleteWeeks = /* GraphQL */ `
  mutation DeleteWeeks(
    $input: DeleteWeeksInput!
    $condition: ModelWeeksConditionInput
  ) {
    deleteWeeks(input: $input, condition: $condition) {
      id
      day_of_week
      holiday_flg
      start_time
      finish_time
      createdAt
      updatedAt
    }
  }
`;
