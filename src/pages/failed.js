import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"

export default function thanks() {
  return (
    <>
      <SEO title="Compra exitosa" />
      <Purchase>
        <h2>Lo sentimos 😥</h2>
        <p>La compra fue cancelada</p>
        <p>¡Te esperamos de vuelta no pares de aprender!</p>
        <span role="img" aria-label="heart2">
          💚
        </span>
        <Link to="/">
          <Button>Volver al catalogo</Button>
        </Link>
      </Purchase>
    </>
  )
}
