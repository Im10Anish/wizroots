import React from 'react'

import { Box, Spacer, Card, SmallText, Label, Paragraph, Image } from '../utils'

const NewsCard = () => {
    return (
        <>
            <Box>
                <Card>
                    <Box
                        row
                        style={{ width: '100%' }}
                        justifyContent="space-between"
                    >
                        <Box style={{ width: '75%' }}>
                            <SmallText>
                                Leap Finance raises $55 million to help Indian
                                students study abroad, plans international
                                expansion
                            </SmallText>
                            <Box row>
                                <Label>Mainsh Singh</Label>
                                <Spacer size={20} />
                                <Label>2021-09-08 5:34 PM</Label>
                            </Box>
                            <Paragraph>
                                Hundreds of thousands of teenagers and young
                                adults get on flights each year from India to a
                                foreign land to pursue higher education. Upon
                                landing, they face myriad challenges. One big
                                one: They don’t have a local credit history, so
                                they can’t avail a range o…
                            </Paragraph>
                        </Box>
                        <Box style={{ width: '20%' }}>
                            <Image
                                src="https://www.imgonline.com.ua/examples/rays-of-light-in-the-sky-HDR.jpg"
                                width="146"
                                height="146"
                            />
                        </Box>
                    </Box>
                </Card>
                <Spacer size={20} />
            </Box>
        </>
    )
}

export default NewsCard
