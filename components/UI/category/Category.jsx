import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import categoryImg01 from '../../../assets/images/icons8-empty-bed-64.png';
import categoryImg02 from '../../../assets/images/icons8-chair-side-view-64.png';
import categoryImg03 from '../../../assets/images/table-64.png';
//import categoryImg04 from '../../../assets/images/category-04.png';
import '../../../styles/category.css';

const categoryData = [
  {
    display: 'BEDS',
    imgUrl: categoryImg01,
  },
  {
    display: 'CHAIRS',
    imgUrl: categoryImg02,
  },
  {
    display: 'TABLES',
    imgUrl: categoryImg03,
  },
  
];

const Category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((item) => {
          return (
            
            <Col lg='4' md='4' sm='6' xs='6' className='mb-4'>
              
              <div className='category__item d-flex justify-content-center align-items-center gap-3'>
              
                <div className='category__img'>
                  <Link to='/furnitures'>
                    <img src={item.imgUrl} alt='category__item' />
                  </Link>
                  
                
                  
                </div>
                <h6>{item.display}</h6>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Category;
