export const initialState = {
  products: {
    data: [],
    request: {
      pending: false,
      error: null,
      success: null,
    }
  },
  cart: [],
  orders: [],
};





  // {
  //   id: '1',
  //   name: 'Wooden Cup',
  //   price: '20',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique, massa ut consectetur sagittis, enim ipsum fringilla nibh, ac tempor purus est vestibulum dui. Proin aliquet posuere nisl, vel vestibulum nisl interdum quis. Vestibulum in arcu faucibus, vestibulum magna id, venenatis mauris. Fusce placerat vel eros quis blandit. Donec sed volutpat augue.',
  //   color: 'brown',
  //   img: '/images/products/kitchen/pexels-eva-elijas-6944232.jpg',
  //   variants: [{
  //     id: '2',
  //     color: 'white',
  //   }],
  //   sizes: [{
  //     name: 'one size',
  //     stock: 5,
  //   }],
  //   categories: ['NewArrivals', 'Kitchen'],
  // },
  // {
  //   id: '2',
  //   name: 'Wooden Cup',
  //   price: '20',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique, massa ut consectetur sagittis, enim ipsum fringilla nibh, ac tempor purus est vestibulum dui. Proin aliquet posuere nisl, vel vestibulum nisl interdum quis. Vestibulum in arcu faucibus, vestibulum magna id, venenatis mauris. Fusce placerat vel eros quis blandit. Donec sed volutpat augue.',
  //   color: 'white',
  //   img: '/images/products/kitchen/pexels-eva-elijas-6944482.jpg',
  //   variants: [{
  //     id: '1',
  //     color: 'brown',
  //   }],
  //   sizes: [{
  //     name: 'one size',
  //     stock: 5,
  //   }],
  //   categories: ['NewArrivals', 'Kitchen'],
  // },
  // {
  //   id: '3',
  //   name: 'Ceramic Bowl',
  //   price: '40',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique, massa ut consectetur sagittis, enim ipsum fringilla nibh, ac tempor purus est vestibulum dui. Proin aliquet posuere nisl, vel vestibulum nisl interdum quis. Vestibulum in arcu faucibus, vestibulum magna id, venenatis mauris. Fusce placerat vel eros quis blandit. Donec sed volutpat augue.',
  //   img: '/images/products/kitchen/pexels-eva-elijas-6952245.jpg',
  //   color: 'blue',
  //   variants: [],
  //   sizes: [{
  //     name: 'one size',
  //     stock: 3,
  //   }],
  //   categories: ['NewArrivals', 'Kitchen'],
  // },
  // {
  //   id: '4',
  //   name: 'Dotted Ceramic Cups',
  //   price: '28',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique, massa ut consectetur sagittis, enim ipsum fringilla nibh, ac tempor purus est vestibulum dui. Proin aliquet posuere nisl, vel vestibulum nisl interdum quis. Vestibulum in arcu faucibus, vestibulum magna id, venenatis mauris. Fusce placerat vel eros quis blandit. Donec sed volutpat augue.',
  //   color: 'tan',
  //   img: '/images/products/kitchen/pexels-pavel-danilyuk-7674537a.jpg',
  //   variants: [
  //     { id: '5',
  //       color: 'brown'
  //     }],
  //     sizes: [{
  //       name: 'one size',
  //       stock: 8,
  //     }],
  //   categories: ['NewArrivals', 'Kitchen'],
  // },
  // {
  //   id: '5',
  //   name: 'Dotted Ceramic Cups',
  //   price: '28',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique, massa ut consectetur sagittis, enim ipsum fringilla nibh, ac tempor purus est vestibulum dui. Proin aliquet posuere nisl, vel vestibulum nisl interdum quis. Vestibulum in arcu faucibus, vestibulum magna id, venenatis mauris. Fusce placerat vel eros quis blandit. Donec sed volutpat augue.',
  //   color: 'brown',
  //   img: '/images/products/kitchen/pexels-pavel-danilyuk-7674537b.jpg',
  //   variants: [
  //     { id: '4',
  //       color: 'tan'
  //     }],
  //     sizes: [{
  //       name: 'one size',
  //       stock: 2,
  //     }],
  //   categories: ['NewArrivals', 'Kitchen'],
  // },
  // {
  //   id: '6',
  //   name: 'Brass Teapot',
  //   price: '63',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique, massa ut consectetur sagittis, enim ipsum fringilla nibh, ac tempor purus est vestibulum dui. Proin aliquet posuere nisl, vel vestibulum nisl interdum quis. Vestibulum in arcu faucibus, vestibulum magna id, venenatis mauris. Fusce placerat vel eros quis blandit. Donec sed volutpat augue.',
  //   color: 'black',
  //   img: '/images/products/kitchen/pexels-eva-elijas-6945199.jpg',
  //   variants: [],
  //   sizes: [{
  //     name: 'one size',
  //     stock: 5,
  //   }],
  //   categories: ['NewArrivals', 'Kitchen'],
  // },
  // {
  //   id: '7',
  //   name: 'Maneki Neko',
  //   price: '65',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique, massa ut consectetur sagittis, enim ipsum fringilla nibh, ac tempor purus est vestibulum dui. Proin aliquet posuere nisl, vel vestibulum nisl interdum quis. Vestibulum in arcu faucibus, vestibulum magna id, venenatis mauris. Fusce placerat vel eros quis blandit. Donec sed volutpat augue.',
  //   img: '/images/products/home/pexels-miguel-á-padriñán-932261.jpg',
  //   color: 'tan',
  //   sizes: [{
  //     name: 'one size',
  //     stock: 5,
  //   }],
  //   variants: [],
  //   categories: ['NewArrivals', 'Home'],
  // },
  // {
  //   id: '8',
  //   name: 'Wooden Vase',
  //   price: '82',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique, massa ut consectetur sagittis, enim ipsum fringilla nibh, ac tempor purus est vestibulum dui. Proin aliquet posuere nisl, vel vestibulum nisl interdum quis. Vestibulum in arcu faucibus, vestibulum magna id, venenatis mauris. Fusce placerat vel eros quis blandit. Donec sed volutpat augue.',
  //   img: '/images/products/home/pexels-eva-elijas-6952248.jpg',
  //   color: 'brown',
  //   sizes: [{
  //     name: 'one size',
  //     stock: 5,
  //   }],
  //   variants: [],
  //   categories: ['NewArrivals', 'Home'],
  // },
  // {
  //   id: '9',
  //   name: 'Stone Flower Pot',
  //   price: '40',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique, massa ut consectetur sagittis, enim ipsum fringilla nibh, ac tempor purus est vestibulum dui. Proin aliquet posuere nisl, vel vestibulum nisl interdum quis. Vestibulum in arcu faucibus, vestibulum magna id, venenatis mauris. Fusce placerat vel eros quis blandit. Donec sed volutpat augue.',
  //   img: '/images/products/home/pexels-stephanie-ho-993626.jpg',
  //   color: 'brown',
  //   sizes: [{
  //     name: 'one size',
  //     stock: 5,
  //   }],
  //   variants: [],
  //   categories: ['NewArrivals', 'Home'],
  // },
  // {
  //   id: '10',
  //   name: 'Clay Flower Vase',
  //   price: '38',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique, massa ut consectetur sagittis, enim ipsum fringilla nibh, ac tempor purus est vestibulum dui. Proin aliquet posuere nisl, vel vestibulum nisl interdum quis. Vestibulum in arcu faucibus, vestibulum magna id, venenatis mauris. Fusce placerat vel eros quis blandit. Donec sed volutpat augue.',
  //   img: '/images/products/home/pexels-tara-winstead-6692129.jpg',
  //   color: 'teal',
  //   sizes: [{
  //     name: 'one size',
  //     stock: 5,
  //   }],
  //   variants: [],
  //   categories: ['NewArrivals', 'Home'],
  // },
  // {
  //   id: '11',
  //   name: 'Cotton Socks',
  //   price: '10',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique, massa ut consectetur sagittis, enim ipsum fringilla nibh, ac tempor purus est vestibulum dui. Proin aliquet posuere nisl, vel vestibulum nisl interdum quis. Vestibulum in arcu faucibus, vestibulum magna id, venenatis mauris. Fusce placerat vel eros quis blandit. Donec sed volutpat augue.',
  //   img: '/images/products/fashion/pexels-mikhail-nilov-6968427.jpg',
  //   color: 'white',
  //   sizes: [{
  //     name: '35-38',
  //     stock: 5,
  //   },
  //   {
  //     name: '39-42',
  //     stock: 3,
  //   }],
  //   variants: [
  //     { id: 12,
  //       color: 'gray',
  //     }],
  //   categories: ['NewArrivals', 'Fashion'],
  // },
  // {
  //   id: '12',
  //   name: 'Cotton Socks',
  //   price: '10',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique, massa ut consectetur sagittis, enim ipsum fringilla nibh, ac tempor purus est vestibulum dui. Proin aliquet posuere nisl, vel vestibulum nisl interdum quis. Vestibulum in arcu faucibus, vestibulum magna id, venenatis mauris. Fusce placerat vel eros quis blandit. Donec sed volutpat augue.',
  //   img: '/images/products/fashion/pexels-alena-shekhovtcova-6995704.jpg',
  //   color: 'gray',
  //   sizes: [{
  //     name: '35-38',
  //     stock: 1,
  //   },
  //   {
  //     name: '39-42',
  //     stock: 3,
  //   }],
  //   variants: [
  //     { id: 11,
  //       color: 'white',
  //     }],
  //   categories: ['NewArrivals', 'Fashion'],
  // },
  // {
  //   id: '13',
  //   name: 'Linen Set',
  //   price: '112',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique, massa ut consectetur sagittis, enim ipsum fringilla nibh, ac tempor purus est vestibulum dui. Proin aliquet posuere nisl, vel vestibulum nisl interdum quis. Vestibulum in arcu faucibus, vestibulum magna id, venenatis mauris. Fusce placerat vel eros quis blandit. Donec sed volutpat augue.',
  //   color: 'colorful',
  //   img: '/images/products/fashion/pexels-thirdman-6599685.jpg',
  //   sizes: [{
  //     name: 'S',
  //     stock: 5,
  //   },
  //   {
  //     name: 'M',
  //     stock: 3,
  //   },
  //   {
  //     name: 'L',
  //     stock: 3,
  //   }],
  //   variants: [],
  //   categories: ['NewArrivals', 'Fashion'],
  // },
  // {
  //   id: '14',
  //   name: 'Cotton Summer Blouse',
  //   price: '62',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique, massa ut consectetur sagittis, enim ipsum fringilla nibh, ac tempor purus est vestibulum dui. Proin aliquet posuere nisl, vel vestibulum nisl interdum quis. Vestibulum in arcu faucibus, vestibulum magna id, venenatis mauris. Fusce placerat vel eros quis blandit. Donec sed volutpat augue.',
  //   color: 'white',
  //   img: '/images/products/fashion/pexels-teona-swift-6850609.jpg',
  //   sizes: [{
  //     name: 'S',
  //     stock: 5,
  //   },
  //   {
  //     name: 'M',
  //     stock: 3,
  //   },
  //   {
  //     name: 'L',
  //     stock: 3,
  //   }],
  //   variants: [],
  //   categories: ['NewArrivals', 'Fashion'],
  // },
  // {
  //   id: '15',
  //   name: 'Patterened Stationery',
  //   price: '15',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique, massa ut consectetur sagittis, enim ipsum fringilla nibh, ac tempor purus est vestibulum dui. Proin aliquet posuere nisl, vel vestibulum nisl interdum quis. Vestibulum in arcu faucibus, vestibulum magna id, venenatis mauris. Fusce placerat vel eros quis blandit. Donec sed volutpat augue.',
  //   color: 'indigo',
  //   img: '/images/products/stationery/pexels-eva-elijas-7967827.jpg',
  //   sizes: [{
  //     name: 'one size',
  //     stock: 5,
  //   }],
  //   variants: [
  //     { id: '16',
  //       color: 'colorful'
  //     }],
  //   categories: ['NewArrivals', 'Stationery'],
  // },
  // {
  //   id: '16',
  //   name: 'Patterened Stationery',
  //   price: '15',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique, massa ut consectetur sagittis, enim ipsum fringilla nibh, ac tempor purus est vestibulum dui. Proin aliquet posuere nisl, vel vestibulum nisl interdum quis. Vestibulum in arcu faucibus, vestibulum magna id, venenatis mauris. Fusce placerat vel eros quis blandit. Donec sed volutpat augue.',
  //   color: 'colorful',
  //   img: '/images/products/stationery/pexels-eva-elijas-7967944.jpg',
  //   sizes: [{
  //     name: 'one size',
  //     stock: 5,
  //   }],
  //   variants: [
  //     { id: '15',
  //       color: 'indigo'
  //     }],
  //   categories: ['NewArrivals', 'Stationery'],
  // },
  // {
  //   id: '17',
  //   name: 'Minimalistic Note Set',
  //   price: '23',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique, massa ut consectetur sagittis, enim ipsum fringilla nibh, ac tempor purus est vestibulum dui. Proin aliquet posuere nisl, vel vestibulum nisl interdum quis. Vestibulum in arcu faucibus, vestibulum magna id, venenatis mauris. Fusce placerat vel eros quis blandit. Donec sed volutpat augue.',
  //   color: 'white',
  //   img: '/images/products/stationery/pexels-polina-kovaleva-8101485.jpg',
  //   sizes: [{
  //     name: 'one size',
  //     stock: 3,
  //   }],
  //   variants: [],
  //   categories: ['NewArrivals', 'Stationery'],
  // },
  // {
  //   id: '18',
  //   name: 'Post Card Set',
  //   price: '7',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique, massa ut consectetur sagittis, enim ipsum fringilla nibh, ac tempor purus est vestibulum dui. Proin aliquet posuere nisl, vel vestibulum nisl interdum quis. Vestibulum in arcu faucibus, vestibulum magna id, venenatis mauris. Fusce placerat vel eros quis blandit. Donec sed volutpat augue.',
  //   color: 'white',
  //   img: '/images/products/stationery/pexels-eva-elijas-7957369.jpg',
  //   sizes: [{
  //     name: 'one size',
  //     stock: 8,
  //   }],
  //   variants: [],
  //   categories: ['NewArrivals', 'Stationery'],
  // },
  // {
  //   id: '19',
  //   name: 'Paper Clips Set',
  //   price: '12',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique, massa ut consectetur sagittis, enim ipsum fringilla nibh, ac tempor purus est vestibulum dui. Proin aliquet posuere nisl, vel vestibulum nisl interdum quis. Vestibulum in arcu faucibus, vestibulum magna id, venenatis mauris. Fusce placerat vel eros quis blandit. Donec sed volutpat augue.',
  //   color: 'silver',
  //   img: '/images/products/stationery/pexels-karolina-grabowska-4226804.jpg',
  //   sizes: [{
  //     name: 'one size',
  //     stock: 3,
  //   }],
  //   variants: [],
  //   categories: ['NewArrivals', 'Stationery'],
  // },
