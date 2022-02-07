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
    fontSize: p.small ? '24px' : '40px',
    color: '#000000',
}))
const SmallText = styled.h2((p) => ({
    fontSize: '16px',
    color: '#212121',
    lineHeight: '21px',
    padding: '0px',
    margin: '0px',
}))

const Label = styled.p((p) => ({
    fontSize: '12px',
    color: '#989898',
    padding: '0px',
    margin: '4px 0px',
}))
const Paragraph = styled.p((p) => ({
    fontSize: '14px',
    color: '#393939',
    padding: '0px',
    margin: '0px',
    lineHeight: '19px',
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

const Button = styled.button((p) => ({
    background: p.disabled ? '#EAEAEA' : p.secondary ? '#EAEAEA' : '#000000',
    color: p.secondary ? '#000000' : '#ffffff',
    border: 'none',
    padding: '6px 20px',
    borderRadius: '20px',
    width: 'fit-content',
    fontWeight: 'bold',
}))

const Input = styled.input`
    width: inherit;
    border: none;
    padding: 12px 0px;
    border-bottom: 1px solid #000000;
    &:focus {
        outline: none;
    }
`
const Card = styled.div`
    background: #ffffff;
    padding: 26px 30px;
    box-shadow: 0px 0px 16px #00000010;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 9px;
`

export {
    Box,
    Spacer,
    Title,
    Pills,
    Button,
    Input,
    Card,
    SmallText,
    Label,
    Paragraph,
    Image,
}
