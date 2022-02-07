import styled from 'styled-components'

const Box = styled.div((p) => ({
    display: 'flex',
    width: p.width,
    height: p.height,
    padding: p.padding,
    flexDirection: p.row ? 'row' : 'column',
    justifyContent: p.justifyContent || (p.center && 'center'),
    alignItems: p.alignItems || (p.center && 'center'),
}))

const Spacer = styled.div((p) => ({
    minHeight: !p.horizontal && p.size,
    minWidth: p.horizontal && p.size,
    flex: `0 0 ${p.size}px`,
}))

const Title = styled.h2((p) => ({
    fontSize: '40px',
    color: '#000000',
}))

const Pills = styled.label((p) => ({
    background: '#EAEAEA',
    width: 'fit-content',
    color: '#7E7E7E',
    fontSize: '14px',
    padding: '6px 20px',
    borderRadius: '20px',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    ...(p.active && {
        color: '#000000',
        background: '#00F0C2',
        fontWeight: 'bold',
    }),
}))

export { Box, Spacer, Title, Pills }
