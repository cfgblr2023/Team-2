import React from 'react'
import { Container } from 'react-bootstrap'

export default function Footer() {
  return (
    <footer className="footer border-top px-sm-2 py-2 text-center item-center">
      <Container fluid className="align-items-center flex-column flex-md-row d-flex justify-content-between">
        <div className='text-center item-center'>CFG
          {' '}
          © 2023
        </div>
        
      </Container>
    </footer>
  )
}
