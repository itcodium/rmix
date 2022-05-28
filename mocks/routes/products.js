// Use this file only as a guide for first steps. Delete it when you have added your own routes files.
// For a detailed explanation regarding each routes property, visit:
// https://mocks-server.org/docs/get-started-routes

// users data
const PRODUCTS = [
  {
    id: 1,
    title: "John",
    price: 25.3,
    imageUrl: "https://live.staticflickr.com/786/40857704961_4149245c56_m.jpg"
  },
  {
    id: 2,
    title: "Doe",
    price: 33.5,
    imageUrl: "https://live.staticflickr.com/7888/46485996115_90ef86c2cf_w.jpg"
  },
  {
    id: 3,
    title: "Joe",
    price: 5.3,
    imageUrl: "https://live.staticflickr.com/4027/4518144704_273b98ef81_w.jpg"
  },
  {
    id: 4,
    title: "Doen",
    price: 34.5,
    imageUrl: "https://live.staticflickr.com/8471/8076906297_1c3fcd7961_n.jpg"
  },
];

module.exports = [
  {
    id: "get-products", // id of the route
    url: "/api/products", // url in express format
    method: "GET", // HTTP method
    variants: [
      {
        id: "success", // id of the variant
        response: {
          status: 200, // status to send
          body: PRODUCTS, // body to send
        },
      },
      {
        id: "error", // id of the variant
        response: {
          status: 400, // status to send
          body: {
            // body to send
            message: "Error",
          },
        },
      },
    ],
  },
  {
    id: "get-products", // id of the route
    url: "/api/products/:id", // url in express format
    method: "GET", // HTTP method
    variants: [
      {
        id: "success", // id of the variant
        response: {
          status: 200, // status to send
          body: PRODUCTS[0], // body to send
        },
      },
      {
        id: "real", // id of the variant
        response: (req, res) => {
          const productId = req.params.id;
          const product = PRODUCTS.find((productData) => productData.id === Number(productId));
          if (product) {
            res.status(200);
            res.send(product);
          } else {
            res.status(404);
            res.send({
              message: "Product not found",
            });
          }
        },
      },
    ],
  },
];
