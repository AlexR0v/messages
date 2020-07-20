import { injectGlobal } from 'emotion'
import { color } from './Color'
import fontSize from './FontSize'
import { fontFamily } from './FontFsmily'


export const theme = {
  color,
  fontSize,
  fontFamily,
}

injectGlobal`
  * {
    box-sizing: border-box;
  }
  button, input, textarea {
        outline: none;
}

a {
text-decoration: none;
color: #aab2c8;
}

.active{
color: #818a91;
}
  body, h1, h2, p{margin: 0}
  
 @font-face {
    font-family: 'Roboto', sans-serif;
    src: local('Roboto'),
      url('./site/ui/theme/fonts/Roboto/Roboto-Regular.ttf')
        format('ttf');  
  }`
