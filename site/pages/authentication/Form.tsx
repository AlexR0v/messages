import { Column, Row } from '../../ui/layout/Layout'
import { Input } from '../../ui/auth/Input'
import { Box } from '../../ui/layout/Box'
import messages from './Messages'
import React from 'react'
import { Button } from '../../ui/Button'
import { injectIntl } from 'react-intl'

const Form = ({intl}:any)=>{
  return(
    <form>
      <Column alignItems={'center'}>
        <Input
          type='email'
          placeholder={'Email'}
        />
        <Box height={[15]} />
        <Input
          type='password'
          placeholder={'Пароль'}
        />
      </Column>
      <Box height={[15]} />
      <Row justifyContent={'flex-end'}>
        <Button type={'submit'}>{intl.formatMessage(messages.buttonSignIn)}</Button>
      </Row>
    </form>
  )
}

export default injectIntl(Form)
