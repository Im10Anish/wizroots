import { getIn } from 'timm'

const lookUpConfig = (key) =>
    getIn(window._env_, [key]) || getIn(process.env, [key]) || ''

// All the config env variables should starts with REACT_APP_

export const getNewsEndPoint = () =>
    `${lookUpConfig('REACT_APP_NEWS_API_URL') || ''}/v2`

export const getApiKey = () => lookUpConfig('REACT_APP_API_KEY') || ''
