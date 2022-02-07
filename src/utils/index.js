import styled from 'styled-components'

const Box = styled.div((p) => ({
    display: 'flex',
    flexDirection: p.row ? 'row' : 'column',
    justifyContent: p.justifyContent || (p.center && 'center'),
    alignItems: p.alignItems || (p.center && 'center'),
}))

const Spacer = styled.div((p) => ({
    minHeight: !p.horizontal && p.size,
    minWidth: p.horizontal && p.size,
    flex: `0 0 ${p.size}px`,
}))
export { Box, Spacer }
