import React from 'react'
import NeonLoginForm from '../../components/neon-login-form/NeonLoginForm'

const LoginPage = () => {
    const servers = [
        {
            id: 1,
            name: 'Neon RP - Moscow 01'
        },
        {
            id: 2,
            name: 'Neon RP - Yerevan 02'
        }
    ]
  return (
    <div>
        <NeonLoginForm servers={servers}/>
    </div>
  )
}

export default LoginPage