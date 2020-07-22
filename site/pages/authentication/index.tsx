import React, { useEffect, useState } from 'react'
import { Column, Layout, Row } from '../../ui/layout/Layout'
import { Box } from '../../ui/layout/Box'
import Text from '../../ui/text/Text'
import { theme } from '../../ui/theme'
import { TitleH1 } from '../../ui/text/TitleH1'
import { Link, Redirect } from 'react-router-dom'
import TextLink from '../../ui/text/TextLink'
import messages from './Messages'
import { injectIntl } from 'react-intl'
import useFetch from '../../hooks/useFetch'
import { Input } from '../../ui/auth/Input'
import { Button } from '../../ui/Button'

const Authentication = ({intl, location}: any) => {

  const isLogin = location.pathname === '/login'
  const pageTitle = isLogin ? intl.formatMessage(messages.signIn) : intl.formatMessage(messages.signUp)
  const pageLink = isLogin ? '/register' : '/login'
  const linkText = isLogin ? intl.formatMessage(messages.linkSignUp) : intl.formatMessage(messages.linkSignIn)
  const apiUrl = isLogin ? '/users/login' : '/users'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUserName] = useState('')
  const [isSubmit, setIsSubmit] = useState(false)
  const [{isLoading, response, error}, doFetch] = useFetch(apiUrl)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const user = isLogin ? {email, password} : {username, email, password}
    doFetch({
      method: 'post',
      data: {
        user
      }
    })
    console.log(error)
  }

  useEffect(()=>{
    if(!response){
      return
    }
    localStorage.setItem('token', response.user.token)
    setIsSubmit(true)
  }, [response])

  if(isSubmit){
    return <Redirect to={'/'}/>
  }

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
            {pageTitle}
          </Text>
        </TitleH1>
        <Box height={[17]} />
        <Link to={pageLink}>
          <TextLink
            color={theme.color.green}
            fontSize={theme.fontSize.m}
          >
            {linkText}
          </TextLink>
        </Link>
        <Box height={[40]} />
        <form onSubmit={handleSubmit}>
          <Column alignItems={'center'}>
            {!isLogin && (
              <>
              <Input
                type='text'
                placeholder={'Name'}
                value={username}
                onChange={e => setUserName(e.target.value)}
              />
              <Box height={[15]} />
              </>
            )}
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
              {pageTitle}
            </Button>
          </Row>
        </form>
      </Column>
    </Layout>
  )
}

export default injectIntl(Authentication)
