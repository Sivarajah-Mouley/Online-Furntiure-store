// all images imported from images directory
import product_01_image_01 from '../images/bed1.png';
import product_01_image_02 from '../images/bed2.png';
import product_01_image_03 from '../images/bed3.png';

import product_02_image_01 from '../images/chair3.png';
import product_02_image_02 from '../images/chair4.png';
import product_02_image_03 from '../images/chair5.png';

import product_03_image_01 from '../images/sofa3.png';
import product_03_image_02 from '../images/sofa2.png';
import product_03_image_03 from '../images/sofa4.png';

import product_04_image_01 from '../images/table1.png';
import product_04_image_02 from '../images/table2.png';
import product_04_image_03 from '../images/table3.png';

import product_05_image_01 from '../images/tableset1.png';
import product_05_image_02 from '../images/tableset2.png';
import product_05_image_03 from '../images/tableset3.png';

import product_06_image_01 from '../images/bed4.png';
import product_06_image_02 from '../images/bed5.png';
import product_06_image_03 from '../images/bed4.png';

const products = [
  {
    id: '01',
    title: 'Grey Luxury Bed',
    price: 240000,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: 'Bed',

    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ',
  },

  {
    id: '02',
    title: 'Armed Chair',
    price: 31150,
    image01: product_02_image_01,
    image02: product_02_image_02,
    image03: product_02_image_03,
    category: 'Chair',

    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },

  {
    id: '03',
    title: 'Home crouch',
    price: 110000,
    image01: product_03_image_01,
    image02: product_03_image_02,
    image03: product_03_image_03,
    category: 'Sofa',

    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },

  {
    id: '04',
    title: 'Glasss Table',
    price: 22500,
    image01: product_04_image_01,
    image02: product_04_image_02,
    image03: product_04_image_03,
    category: 'Table',

    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },

  {
    id: '05',
    title: 'Dine Table Set',
    price: 240000,
    image01: product_05_image_01,
    image02: product_05_image_02,
    image03: product_05_image_03,
    category: 'Table',

    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },
  {
    id: '06',
    title: 'Royal Bed',
    price: 1140000,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: 'Bed',

    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },

  {
    id: '07',
    title: 'Gren Chair',
    price: 115000,
    image01: product_02_image_02,
    image02: product_02_image_01,
    image03: product_02_image_03,
    category: 'Chair',

    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },

  {
    id: '08',
    title: 'Grey sofa',
    price: 91100,
    image01: product_03_image_02,
    image02: product_03_image_01,
    image03: product_03_image_03,
    category: 'Sofa',

    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },

  {
    id: '09',
    title: 'Flower Table',
    price: 21100,
    image01: product_04_image_02,
    image02: product_04_image_01,
    image03: product_04_image_03,
    category: 'Table',

    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },

  {
    id: '10',
    title: 'Two table',
    price: 24000,
    image01: product_05_image_02,
    image02: product_05_image_01,
    image03: product_05_image_03,
    category: 'Table',

    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },

  {
    id: '11',
    title: 'Double bed ',
    price: 350000,
    image01: product_06_image_01,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: 'Bed',

    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },

  {
    id: '12',
    title: 'Master bed ',
    price: 350000,
    image01: product_06_image_02,
    image02: product_06_image_01,
    image03: product_06_image_03,
    category: 'Bed',

    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },

  {
    id: '13',
    title: 'Family bed ',
    price: 221350,
    image01: product_06_image_03,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: 'Bed',

    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },
];

export default products;
