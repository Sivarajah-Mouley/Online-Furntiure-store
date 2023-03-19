import React, { useState, useEffect } from 'react';
import Helmet from '../components/Helmet/Helmet.js';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import '../styles/hero-section.css';
import { Link } from 'react-router-dom';
import Category from '../components/UI/category/Category.jsx';
import '../styles/home.css';
import products from '../assets/fake-data/products.js';
import furnitureCategoryImg01 from '../assets/images/icons8-empty-bed-64.png';
import furnitureCategoryImg02 from '../assets/images/icons8-chair-side-view-64.png';
import furnitureCategoryImg03 from '../assets/images/table-64.png';
import ProductCard from '../components/UI/product-card/ProductCard.jsx';
import whyImg from '../assets/images/location.png';
import networkImg from '../assets/images/network.png';
import TestimonialSlider from '../components/UI/slider/TestimonialSlider.jsx';


const Home = () => {
  const [category, setCategory] = useState('ALL');
  const [allProducts, setAllProducts] = useState(products);
  
  useEffect(() => {
    if (category === 'ALL') {
      setAllProducts(products);
    }
    if (category === 'BEDS') {
      const filteredProducts = products.filter(
        (item) => item.category === 'Bed'
      );
      setAllProducts(filteredProducts);
    }
    if (category === 'CHAIRS') {
      const filteredProducts = products.filter(
        (item) => item.category === 'Chair'
      );
      setAllProducts(filteredProducts);
    }
    if (category === 'SOFAS') {
      const filteredProducts = products.filter(
        (item) => item.category === 'Sofa'
      );
      setAllProducts(filteredProducts);
    }
    if (category === 'TABLES') {
      const filteredProducts = products.filter(
        (item) => item.category === 'Table'
      );
      setAllProducts(filteredProducts);
    }
  }, [category]);
  return (
    <Helmet title='Home'>
      <section>
        <Container align='center' >
          <Row>
            <Col lg='12' md='6'style={{ backgroundImage: `url('https://i.ibb.co/qNvTvXV/banner.jpg')`,opacity: 0.9, backgroundSize: '1000px 500px' }}>
              <div className='hero__content' >
              <h5 className='mb-3'>
                  Relax in comfort and style with our wide range of sofas
                </h5>
                <h1 className='mb-4 hero__title'>
                  <span>COMFY?</span> just wait <br /> sofas at
                  <span> your doorstep!</span>
                </h1>

                

                <div className='hero__btns d-flex align-items-center gap-5 mt-4 justify-content-center'>
                <Link to='/furnitures'>
                  <button className='order__btn d-flex align-items-center justify-content-between'>
                  
                    Order now <i className='ri-arrow-right-s-line'></i>
                  
                  </button>
                </Link>
                  <button className='all__furnitures-btn'>
                    <Link to='/furnitures'>See all Furnitures</Link>
                  </button>
                </div>
                <div className='hero__service d-flex align-items-center gap-5 mt-5 justify-content-center'>
                  <p className='d-flex align-items-center gap-2'>
                    <span className='shipping__icon'>
                      <i className='ri-car-line'></i>
                    </span>
                    Low Cost Delivery
                  </p>
                  <p className='d-flex align-items-center gap-2'>
                    <span className='shipping__icon'>
                      <i className='ri-shield-check-line'></i>
                    </span>
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>
           
          </Row>
        </Container>
      </section>
      <section className='pt-0'>
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h5 className='feature__subtitle mb-4'>What we make</h5>
              <h2 className='feature__title'> Just sit back at home and enjoy the comfort</h2>
              <h2 className='feature__title'>
                we will <span>take care</span>
              </h2>
              <p className='mb-1 mt-4 feature__text'>
                Looking for a comfortable and stylish sofa for your home or office?
              </p>
              <p className='mb-1 mt-4 feature__text'>
                Don't have time to browse furniture stores? Let us take care of it for you.
              </p>
              <p className='mb-1 mt-4 feature__text'>
                We offer fast and reliable delivery of all your favorite furniture brands, straight to your doorstep.
              </p>


              
            </Col>

          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2>Popular Furnitures</h2>
            </Col>
            <Col lg='12'>
              <div className='furniture__category d-flex align-items-center justify-content-center gap-5'>
                <button
                  onClick={() => setCategory('ALL')}
                  className={`all__btn ${
                    category === 'ALL' ? 'furnitureBtnActive' : ''
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setCategory('BEDS')}
                  className={`d-flex align-items-center gap-2 ${
                    category === 'BEDS' ? 'furnitureBtnActive' : ''
                  }`}
                >
                  <img src={furnitureCategoryImg01} alt='' />
                  Beds
                </button>
                <button
                  onClick={() => setCategory('CHAIRS')}
                  className={`d-flex align-items-center gap-2 ${
                    category === 'CHAIRS' ? 'furnitureBtnActive' : ''
                  }`}
                >
                  <img src={furnitureCategoryImg02} alt='' />
                  Chairs
                </button>
                <button
                  onClick={() => setCategory('TABLES')}
                  className={`d-flex align-items-center gap-2 ${
                    category === 'TABLES' ? 'furnitureBtnActive' : ''
                  }`}
                >
                  <img src={furnitureCategoryImg03} alt='' />
                  Tables
                </button>
              </div>
            </Col>

            {allProducts.map((item) => {
              return (
                <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mt-5'>
                  <ProductCard item={item} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      <section className='why__choose-us'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <img src={whyImg} alt='why-Supellex Design' className='w-100'></img>
            </Col>
            <Col lg='6' md='6'>
              <div className='why__Supellex Design'>
                <h2 className='Supellex Design-title mb-4'>
                  Why <span>Supellex Design?</span>
                </h2>
                <p className='Supellex Design-desc'>
                "Looking for a new sofa to complete your home's interior design? Forgot to buy furniture on your last shopping trip? We provide fast and reliable delivery - no matter what you're looking for. Our goal is to bring everything you need, want, or desire straight to your doorstep, whether it's a modern sectional from your favorite brand or same-day delivery of your new bed and bedding."
                </p>
                <ListGroup className='mt-4'>
                  <ListGroupItem className='border-0 ps-0'>
                    <p className='choose__us-title d-flex align-items-center gap-2'>
                      <i className='ri-checkbox-circle-line'></i>Trendy and Stylish
                    </p>
                    
                  </ListGroupItem>
                  <ListGroupItem className='border-0 ps-0'>
                    <p className='choose__us-title d-flex align-items-center gap-2'>
                      <i className='ri-checkbox-circle-line'></i>Quality Service
                    </p>
                    
                  </ListGroupItem>
                  <ListGroupItem className='border-0 ps-0'>
                    <p className='choose__us-title d-flex align-items-center gap-2'>
                      <i className='ri-checkbox-circle-line'></i>Reasonable price
                    </p>
                    
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    

      <section>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className='testimonial'>
                <h5 className='testimonial__subtitle mb-4'>Testimonial</h5>
                <h2 className='testimonial__title mb-40'>
                  What our <span>customers </span>are saying
                </h2>
                <p className='testimonial__desc'>
                We are proud of the things our customers are saying about us, and we’d like to share some of their comments with you
                </p>
                <TestimonialSlider />
              </div>
            </Col>
            <Col lg='6' md='6'>
              
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
