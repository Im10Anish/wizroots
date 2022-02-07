import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@font-face {
	font-family: Roboto;
	font-style: normal;
	font-weight: 400;
	unicode-range: U+0460-052F, U+20B4, U+2DE0-2DFF, U+A640-A69F;
	src: local('Roboto'), local('Roboto-Regular'),
		url(https://fonts.gstatic.com/s/roboto/v18/sTdaA6j0Psb920Vjv-mrzH-_kf6ByYO6CLYdB4HQE-Y.woff2)
			format('woff2');
	font-family: Roboto;
}

@font-face {
	font-family: Roboto;
	font-style: normal;
	font-weight: 500;
	unicode-range: U+0460-052F, U+20B4, U+2DE0-2DFF, U+A640-A69F;
	src: local('Roboto Medium'), local('Roboto-Medium'),
		url(https://fonts.gstatic.com/s/roboto/v18/ZLqKeelYbATG60EpZBSDy4X0hVgzZQUfRDuZrPvH3D8.woff2)
			format('woff2');
	font-family: Roboto;
}


@font-face {
	font-family: Roboto;
	font-style: normal;
	font-weight: 700;
	unicode-range: U+0460-052F, U+20B4, U+2DE0-2DFF, U+A640-A69F;
	src: local('Roboto Bold'), local('Roboto-Bold'),
		url(https://fonts.gstatic.com/s/roboto/v18/77FXFjRbGzN4aCrSFhlh3oX0hVgzZQUfRDuZrPvH3D8.woff2)
			format('woff2');
	font-family: Roboto;
}


body {
  font-family: 'Roboto', sans-serif;
  background: #FAFAFA;
  margin: 0
}

`

export default GlobalStyle
