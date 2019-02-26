export const signup = user => {
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    data: {
      user
    }
  })
}

export const signin = user => {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: {
      user
    }
  })
}

export const signout = () => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
}

// Bonuses: edit and delete user accounts
// export const editUser = user => {
//   return $.ajax({
//     method: 'PATCH',
//     url: `/api/users/${user.id}`,
//     data: {
//       user
//     }
//   })
// }

// export const deleteUser = id => {
//   return $.ajax({
//     method: 'DELETE',
//     url: `/api/users/${id}`
//   })
// }