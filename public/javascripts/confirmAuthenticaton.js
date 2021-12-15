const users = [
  {
    firstName: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman'
  },
  {
    firstName: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday'
  },
  {
    firstName: 'Peter',
    email: 'peter@parker.com',
    password: 'enajyram'
  },
  {
    firstName: 'Natasha',
    email: 'natasha@gamil.com',
    password: '*parol#@$!'
  },
  {
    firstName: 'Nick',
    email: 'nick@shield.com',
    password: 'password'
  }
]

function confirmAuthentication(formData) {
  const { email, password } = formData
  const targetUser = users.find(user => {
    return user.email === email
  })

  if (targetUser) {
    const passwordValidation = password === targetUser.password
    return passwordValidation ? { authentication: true, userName: targetUser.firstName } : { authentication: false, errorMsg: '密碼錯誤，請重新輸入！' }
  } else {
    return { authentication: false, errorMsg: '帳號不存在' }
  }

}

module.exports = confirmAuthentication