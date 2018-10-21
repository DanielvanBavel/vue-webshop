import Vapi from "vuex-rest-api"

const productsList = new Vapi({
  baseURL: "http://www.localhost:8000/api/v1",
    state: {
      products: []
    }
  })
  .get({
    action: "listProducts",
    property: "products",
    path: "/products"
  })
  .getStore()
export default productsList