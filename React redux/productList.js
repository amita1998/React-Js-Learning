import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Col, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const { Paragraph } = Typography;

  useEffect(() => {
    if (localStorage.userToken) {
      getAllProduct();
      getUserList();
    } else {
      navigate("/");
    }
  }, []);

  const getAllProduct = async () => {
    let { data, status } = await axios({
      url: "https://fakestoreapi.com/products",
      method: "GET",
    });


    // const getAllProduct = async () => {
    //   let { data, status } = await axios({
    //     url: "",
    //     method: "POST",
    //   });
    if (status === 200) setProducts(data);
  };

  const getUserList = async () => {
    try {
      let token = localStorage.getItem("userToken");
      const { data } = await axios({
        method: "GET",
        url: "http://localhost:8080/api/user/list",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(data.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return (
    <div>
      <div className="container mt-5">
        <Row>
          {products.length === 0 ? (
            <Col lg={24}>
              <div className="text-center">
                {" "}
                <p className="mt-3 text-center">Fetching products...</p>
              </div>
            </Col>
          ) : (
            products.map((product) => {
              const { title, price, description, image } = product;
              return (
                <Col xs={24} sm={12} md={8} lg={6}>
                  <Card
                    hoverable
                    className="py-3 my-4"
                    style={{ width: "90%", margin: "auto" }}
                    cover={
                      <img
                        style={{
                          height: "300px",
                          width: "90%",
                          margin: "auto",
                          objectFit: "cover",
                        }}
                        alt="example"
                        src={image}
                      />
                    }
                  >
                    <div>
                      <p className="mb-0 fs-4">{title}</p>
                      <p className="fs-6 mb-0 fw-bold">Rs {price}</p>
                      <Paragraph
                        ellipsis={{
                          rows: 5,
                          suffix: "...",
                        }}
                      >
                        {description}
                      </Paragraph>
                      <Button size="large" type="primary" className="w-100">
                        View
                      </Button>
                    </div>
                  </Card>
                </Col>
              );
            })
          )}
        </Row>
      </div>
    </div>
  );
};

export default ProductList;
