import { Button, Card, Container } from "react-bootstrap";
import './ProductsManager.css'
const ProductsManager = () => {

  const products = [
      {
          name: "Arroz Tio joao",
          description: "Arroz pra toda a familia, nao parbolizado, sem agrotoxico e bla bla bla bla bla bla bla",
          price: "R$10",
          image: "https://superprix.vteximg.com.br/arquivos/ids/174487/Arroz-Tio-Joao-Branco-1kg.png?v=636209529502870000"
      },
      {
          name: "Arroz Tio joao",
          description: "Arroz pra toda a familia, nao parbolizado, sem agrotoxico e bla bla bla bla bla bla bla",
          price: "R$10",
          image: "https://superprix.vteximg.com.br/arquivos/ids/174487/Arroz-Tio-Joao-Branco-1kg.png?v=636209529502870000"
      },
      {
          name: "Arroz Tio joao",
          description: "Arroz pra toda a familia, nao parbolizado, sem agrotoxico e bla bla bla bla bla bla bla",
          price: "R$10",
          image: "https://superprix.vteximg.com.br/arquivos/ids/174487/Arroz-Tio-Joao-Branco-1kg.png?v=636209529502870000"
      },
      {
          name: "Arroz Tio joao",
          description: "Arroz pra toda a familia, nao parbolizado, sem agrotoxico e bla bla bla bla bla bla bla",
          price: "R$10",
          image: "https://superprix.vteximg.com.br/arquivos/ids/174487/Arroz-Tio-Joao-Branco-1kg.png?v=636209529502870000"
      },
      {
          name: "Arroz Tio joao",
          description: "Arroz pra toda a familia, nao parbolizado, sem agrotoxico e bla bla bla bla bla bla bla",
          price: "R$10",
          image: "https://superprix.vteximg.com.br/arquivos/ids/174487/Arroz-Tio-Joao-Branco-1kg.png?v=636209529502870000"
      },
      {
          name: "Arroz Tio joao",
          description: "Arroz pra toda a familia, nao parbolizado, sem agrotoxico e bla bla bla bla bla bla bla",
          price: "R$10",
          image: "https://superprix.vteximg.com.br/arquivos/ids/174487/Arroz-Tio-Joao-Branco-1kg.png?v=636209529502870000"
      },
      {
          name: "Arroz Tio joao",
          description: "Arroz pra toda a familia, nao parbolizado, sem agrotoxico e bla bla bla bla bla bla bla",
          price: "R$10",
          image: "https://superprix.vteximg.com.br/arquivos/ids/174487/Arroz-Tio-Joao-Branco-1kg.png?v=636209529502870000"
      }
  ]
  const getCards = () => {
      return products.map((product) => {
          return (
              <Card className='cardProduct'>
                  <Card.Img variant="top" src="https://superprix.vteximg.com.br/arquivos/ids/174487/Arroz-Tio-Joao-Branco-1kg.png?v=636209529502870000" />
                  <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>
                          {product.description}
                      </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                      <Button variant="primary">Ver</Button>
                  </Card.Footer>
              </Card>
          )
      })
      
  }
  return (
      <Container className='cardContainer'>
          {getCards()}
      </Container>
  )
  

}

export default ProductsManager