import axios from 'axios'

// export default function({next, router}) {
export default function({app, redirect, next, req}) {
  // console.log(app.$auth.$state.user.role_id)
  // console.log(redirect.$auth)
  let role = app.$auth.$state.user.role_id
  if (role == 5 || role == 6)
    redirect('/404')
  else
    redirect()
}
