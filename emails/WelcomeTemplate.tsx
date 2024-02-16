import React, { CSSProperties } from 'react'
import { Html, Body, Container, Text, Tailwind, Link, Preview } from '@react-email/components';

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
        <Preview>Welcome aboard</Preview>
        <Tailwind>
            <Body className='bg-white'>
                <Container>
                    <Text style={heading}>Hello {name}</Text>
                    <Link href='https://nurulermelia.com/'>nurulermelia.com</Link>
                </Container>
            </Body>
        </Tailwind>
    </Html>
  )
}

const body: CSSProperties = {
    background: '#fff'
}
const heading: CSSProperties = {
    fontSize: '36px'
}
export default WelcomeTemplate