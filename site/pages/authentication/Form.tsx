import { Column, Row } from '../../ui/layout/Layout'
import { Input } from '../../ui/auth/Input'
import { Box } from '../../ui/layout/Box'
import messages from './Messages'
import React, { useState } from 'react'
import { Button } from '../../ui/Button'
import { injectIntl } from 'react-intl'
import useFetch from '../../hooks/useFetch'

const Form = ({intl}: any) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [{isLoading, response, error}, doFetch] = useFetch('/users/login')

  console.log(isLoading, response, error)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    doFetch({
      method: 'post',
      data: {
        user: {
          email: 'sfdf@sdf.com',
          password: '123'
        }
      }
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <Column alignItems={'center'}>
        <Input
          type='email'
          placeholder={'Email'}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Box height={[15]} />
        <Input
          type='password'
          placeholder={'Пароль'}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </Column>
      <Box height={[15]} />
      <Row justifyContent={'flex-end'}>
        <Button
          type={'submit'}
          disabled={isLoading}
        >
          {intl.formatMessage(messages.buttonSignIn)}
        </Button>
      </Row>
    </form>
  )
}

export default injectIntl(Form)
