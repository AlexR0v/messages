import TextLink from '../../ui/text/TextLink'
import { theme } from '../../ui/theme'
import messages from './Messages'
import { Box } from '../../ui/layout/Box'
import React from 'react'
import { injectIntl } from 'react-intl'
import { NavLink } from 'react-router-dom'


const TopBarLinks = ({intl}: any)=>{
  return(
    <Box
      width={[310]}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <NavLink to={'/'} exact>
        <TextLink fontSize={theme.fontSize.m}>
          {intl.formatMessage(messages.home)}
        </TextLink>
      </NavLink>
      <NavLink to={'/register'}>
        <TextLink fontSize={theme.fontSize.m}>
          {intl.formatMessage(messages.signUp)}
        </TextLink>
      </NavLink>
      <NavLink to={'/login'}>
        <TextLink fontSize={theme.fontSize.m}>
          {intl.formatMessage(messages.signIn)}
        </TextLink>
      </NavLink>
    </Box>
  )
}

export default injectIntl(TopBarLinks)
