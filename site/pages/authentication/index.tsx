import React from 'react'
import { Column, Layout } from '../../ui/layout/Layout'
import { Box } from '../../ui/layout/Box'
import Text from '../../ui/text/Text'
import { theme } from '../../ui/theme'
import { TitleH1 } from '../../ui/text/TitleH1'
import { Link } from 'react-router-dom'
import TextLink from '../../ui/text/TextLink'
import messages from './Messages'
import { injectIntl } from 'react-intl'
import Form from './Form'

const Authentication = ({intl}: any) => {
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
            {intl.formatMessage(messages.linkSignUp)}
          </TextLink>
        </Link>
        <Box height={[40]} />
        <Form/>
      </Column>
    </Layout>
  )
}

export default injectIntl(Authentication)
