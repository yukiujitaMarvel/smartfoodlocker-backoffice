/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateItems = /* GraphQL */ `
  subscription OnCreateItems {
    onCreateItems {
      id
      category_id
      merchant_id
      item_img
      item_name
      item_price
      item_stock
      item_detail
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateItems = /* GraphQL */ `
  subscription OnUpdateItems {
    onUpdateItems {
      id
      category_id
      merchant_id
      item_img
      item_name
      item_price
      item_stock
      item_detail
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteItems = /* GraphQL */ `
  subscription OnDeleteItems {
    onDeleteItems {
      id
      category_id
      merchant_id
      item_img
      item_name
      item_price
      item_stock
      item_detail
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMenus = /* GraphQL */ `
  subscription OnCreateMenus {
    onCreateMenus {
      id
      release_day
      merchant_id
      items {
        id
        category_id
        merchant_id
        item_img
        item_name
        item_price
        item_stock
        item_detail
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMenus = /* GraphQL */ `
  subscription OnUpdateMenus {
    onUpdateMenus {
      id
      release_day
      merchant_id
      items {
        id
        category_id
        merchant_id
        item_img
        item_name
        item_price
        item_stock
        item_detail
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMenus = /* GraphQL */ `
  subscription OnDeleteMenus {
    onDeleteMenus {
      id
      release_day
      merchant_id
      items {
        id
        category_id
        merchant_id
        item_img
        item_name
        item_price
        item_stock
        item_detail
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOldMenus = /* GraphQL */ `
  subscription OnCreateOldMenus {
    onCreateOldMenus {
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
export const onUpdateOldMenus = /* GraphQL */ `
  subscription OnUpdateOldMenus {
    onUpdateOldMenus {
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
export const onDeleteOldMenus = /* GraphQL */ `
  subscription OnDeleteOldMenus {
    onDeleteOldMenus {
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
export const onCreateOldItems = /* GraphQL */ `
  subscription OnCreateOldItems {
    onCreateOldItems {
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
export const onUpdateOldItems = /* GraphQL */ `
  subscription OnUpdateOldItems {
    onUpdateOldItems {
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
export const onDeleteOldItems = /* GraphQL */ `
  subscription OnDeleteOldItems {
    onDeleteOldItems {
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
export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers {
    onCreateUsers {
      user_id
      user_name
      user_email
      user_number
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUsers = /* GraphQL */ `
  subscription OnUpdateUsers {
    onUpdateUsers {
      user_id
      user_name
      user_email
      user_number
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUsers = /* GraphQL */ `
  subscription OnDeleteUsers {
    onDeleteUsers {
      user_id
      user_name
      user_email
      user_number
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCarts = /* GraphQL */ `
  subscription OnCreateCarts {
    onCreateCarts {
      id
      item_id
      items {
        id
        category_id
        merchant_id
        item_img
        item_name
        item_price
        item_stock
        item_detail
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
export const onUpdateCarts = /* GraphQL */ `
  subscription OnUpdateCarts {
    onUpdateCarts {
      id
      item_id
      items {
        id
        category_id
        merchant_id
        item_img
        item_name
        item_price
        item_stock
        item_detail
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
export const onDeleteCarts = /* GraphQL */ `
  subscription OnDeleteCarts {
    onDeleteCarts {
      id
      item_id
      items {
        id
        category_id
        merchant_id
        item_img
        item_name
        item_price
        item_stock
        item_detail
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
export const onCreateOldCarts = /* GraphQL */ `
  subscription OnCreateOldCarts {
    onCreateOldCarts {
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
export const onUpdateOldCarts = /* GraphQL */ `
  subscription OnUpdateOldCarts {
    onUpdateOldCarts {
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
export const onDeleteOldCarts = /* GraphQL */ `
  subscription OnDeleteOldCarts {
    onDeleteOldCarts {
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
export const onCreateOrders = /* GraphQL */ `
  subscription OnCreateOrders {
    onCreateOrders {
      id
      merchant_id
      user_id
      item_id
      items {
        id
        category_id
        merchant_id
        item_img
        item_name
        item_price
        item_stock
        item_detail
        createdAt
        updatedAt
      }
      order_category
      rice_option
      soup_option
      item_num
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
export const onUpdateOrders = /* GraphQL */ `
  subscription OnUpdateOrders {
    onUpdateOrders {
      id
      merchant_id
      user_id
      item_id
      items {
        id
        category_id
        merchant_id
        item_img
        item_name
        item_price
        item_stock
        item_detail
        createdAt
        updatedAt
      }
      order_category
      rice_option
      soup_option
      item_num
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
export const onDeleteOrders = /* GraphQL */ `
  subscription OnDeleteOrders {
    onDeleteOrders {
      id
      merchant_id
      user_id
      item_id
      items {
        id
        category_id
        merchant_id
        item_img
        item_name
        item_price
        item_stock
        item_detail
        createdAt
        updatedAt
      }
      order_category
      rice_option
      soup_option
      item_num
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
export const onCreateOldOrders = /* GraphQL */ `
  subscription OnCreateOldOrders {
    onCreateOldOrders {
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
        item_name
        item_price
        item_stock
        release_day
        item_detail
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
export const onUpdateOldOrders = /* GraphQL */ `
  subscription OnUpdateOldOrders {
    onUpdateOldOrders {
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
        item_name
        item_price
        item_stock
        release_day
        item_detail
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
export const onDeleteOldOrders = /* GraphQL */ `
  subscription OnDeleteOldOrders {
    onDeleteOldOrders {
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
        item_name
        item_price
        item_stock
        release_day
        item_detail
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
export const onCreateOrderDetail = /* GraphQL */ `
  subscription OnCreateOrderDetail {
    onCreateOrderDetail {
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
export const onUpdateOrderDetail = /* GraphQL */ `
  subscription OnUpdateOrderDetail {
    onUpdateOrderDetail {
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
export const onDeleteOrderDetail = /* GraphQL */ `
  subscription OnDeleteOrderDetail {
    onDeleteOrderDetail {
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
export const onCreateMenuOrders = /* GraphQL */ `
  subscription OnCreateMenuOrders {
    onCreateMenuOrders {
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
export const onUpdateMenuOrders = /* GraphQL */ `
  subscription OnUpdateMenuOrders {
    onUpdateMenuOrders {
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
export const onDeleteMenuOrders = /* GraphQL */ `
  subscription OnDeleteMenuOrders {
    onDeleteMenuOrders {
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
export const onCreatePayInfo = /* GraphQL */ `
  subscription OnCreatePayInfo {
    onCreatePayInfo {
      user_id
      card_number
      expiry
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePayInfo = /* GraphQL */ `
  subscription OnUpdatePayInfo {
    onUpdatePayInfo {
      user_id
      card_number
      expiry
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePayInfo = /* GraphQL */ `
  subscription OnDeletePayInfo {
    onDeletePayInfo {
      user_id
      card_number
      expiry
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTickets = /* GraphQL */ `
  subscription OnCreateTickets {
    onCreateTickets {
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
export const onUpdateTickets = /* GraphQL */ `
  subscription OnUpdateTickets {
    onUpdateTickets {
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
export const onDeleteTickets = /* GraphQL */ `
  subscription OnDeleteTickets {
    onDeleteTickets {
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
export const onCreateSchedules = /* GraphQL */ `
  subscription OnCreateSchedules {
    onCreateSchedules {
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
export const onUpdateSchedules = /* GraphQL */ `
  subscription OnUpdateSchedules {
    onUpdateSchedules {
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
export const onDeleteSchedules = /* GraphQL */ `
  subscription OnDeleteSchedules {
    onDeleteSchedules {
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
export const onCreateWeeks = /* GraphQL */ `
  subscription OnCreateWeeks {
    onCreateWeeks {
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
export const onUpdateWeeks = /* GraphQL */ `
  subscription OnUpdateWeeks {
    onUpdateWeeks {
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
export const onDeleteWeeks = /* GraphQL */ `
  subscription OnDeleteWeeks {
    onDeleteWeeks {
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
