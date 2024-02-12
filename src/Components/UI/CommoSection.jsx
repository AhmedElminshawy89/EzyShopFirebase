import React from 'react';
import { Container } from 'react-bootstrap';

export default function CommoSection({title}) {
  return (
    <section className="comon-section">
        <Container className='text-center'>
            <h1>{title}</h1>
        </Container>
    </section>
  )
}
