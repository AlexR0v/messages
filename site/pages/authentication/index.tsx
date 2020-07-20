import React from 'react'
import { Column, Layout, Row } from '../../ui/layout/Layout'
import { Box } from '../../ui/layout/Box'
import Text from '../../ui/text/Text'
import { theme } from '../../ui/theme'
import { TitleH1 } from '../../ui/text/TitleH1'
import { Link } from 'react-router-dom'
import TextLink from '../../ui/text/TextLink'
import { Input } from '../../ui/auth/Input'
import styled from '@emotion/styled'


const Button = styled('button')(() => ({
  width: '107px',
  height: '54px',
  color: theme.color.white,
  fontSize: theme.fontSize.l,
  border: 'none',
  background: theme.color.green,
  borderRadius: '5px',
  cursor: 'pointer',
  ':hover': {color: theme.color.whiteGrey}
}))

const Authentication = () => {
  return (
    <Layout
      maxWidth={[1150]}
      m={'auto'}
      px={[30]}
    >
      <Box height={[50]} />
      <Column alignItems={'center'}>
        <TitleH1>
          <Text
            color={theme.color.black}
            fontSize={theme.fontSize.xxl}
          >
            Войти
          </Text>
        </TitleH1>
        <Box height={[17]} />
        <Link to={'/register'}>
          <TextLink
            color={theme.color.green}
            fontSize={theme.fontSize.m}
          >
            Еще не зарегистрированы?
          </TextLink>
        </Link>
        <Box height={[40]} />
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
            <Button type={'submit'}>Войти</Button>
          </Row>
        </form>
      </Column>
    </Layout>
  )
}

export default Authentication
