import React from 'react'
import { Box, Spacer, Card, SmallText, Label, Paragraph, Image } from '../utils'

const NewsCard = ({ data }) => {
    return (
        <>
            {data.map((news, index) => (
                <>
                    <Card key={index}>
                        <Box
                            row
                            style={{ width: '100%' }}
                            justifyContent="space-between"
                        >
                            <Box style={{ width: '75%' }}>
                                <SmallText>{news.title}</SmallText>
                                <Box row>
                                    <Label>{news.author}</Label>
                                    <Spacer size={20} />
                                    <Label>
                                        {new Date(
                                            news.publishedAt
                                        ).toLocaleDateString({
                                            format: 'yyyy-mm-dd HH:mm',
                                        })}
                                    </Label>
                                </Box>
                                <Paragraph>{news.description}</Paragraph>
                            </Box>
                            <Box style={{ width: '20%' }}>
                                <Image src={news.urlToImage} alt={news.title} />
                            </Box>
                        </Box>
                    </Card>
                    <Spacer size={20} />
                </>
            ))}
        </>
    )
}

export default NewsCard
