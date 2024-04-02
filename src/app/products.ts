export interface Producto {
  product: string;
  price: number;
  currency: string;
  rating: number;
  description: string;
  similarProducts:
    | {
        product: string;
        price: number;
        currency: string;
        rating: number;
        description: string;
      }[];
  reviews?:
    | {
        image: string;
        name: string;
        rating: number;
        opinion: string;
        date: string;
      }[]
    | null;
}

export const datosJson = [
  {
    product: 'Tomaco',
    price: 1000,
    currency: '€',
    rating: 4.8,
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.',
    similarProducts: [
      {
        product: 'Cafaina',
        price: 4000,
        currency: '$',
        rating: 2.8,
        description:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
      },
      {
        product: 'Energy Milk',
        price: 200,
        currency: '€',
        rating: 3.5,
        description:
          'Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. ',
      },
      {
        product: 'Tegridad',
        price: 2500,
        currency: '€',
        rating: 5,
        description:
          'Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.',
      },
    ],
    reviews: [
      {
        image: '',
        name: 'Homer J. Simpson',
        rating: 5,
        opinion:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        date: 'Ayer por la tarde, 2023',
      },
      {
        image: '',
        name: 'Marge Simpson',
        rating: 4,
        opinion:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.',
        date: 'La semana pasada, 2023',
      },
    ],
  },
  {
    product: 'Cafaina',
    price: 4000,
    currency: '$',
    rating: 2.8,
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
    similarProducts: [
      {
        product: 'Energy Milk',
        price: 200,
        currency: '€',
        rating: 3.5,
        description:
          'Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. ',
      },
      {
        product: 'Tegridad',
        price: 2500,
        currency: '€',
        rating: 5,
        description:
          'Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.',
      },
      {
        product: 'Tomaco',
        price: 1000,
        currency: '€',
        rating: 4.8,
        description:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.',
      },
    ],
    reviews: [
      {
        image: '',
        name: 'P. Escobar',
        rating: 5,
        opinion:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        date: 'Ayer por la tarde, 2023',
      },
      {
        image: '',
        name: 'M.A. Nestle',
        rating: 2,
        opinion:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.',
        date: 'La semana pasada, 2023',
      },
    ],
  },
  {
    product: 'Tegridad',
    price: 2500,
    currency: '€',
    rating: 5,
    description:
      'Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.',
    similarProducts: [
      {
        product: 'Energy Milk',
        price: 200,
        currency: '€',
        rating: 3.5,
        description:
          'Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. ',
      },
      {
        product: 'Tomaco',
        price: 1000,
        currency: '€',
        rating: 4.8,
        description:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.',
      },
    ],
    reviews: [
      {
        image: '',
        name: 'Stan Marsh',
        rating: 1,
        opinion:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        date: 'Ayer por la tarde, 2023',
      },
      {
        image: '',
        name: 'Randy Marsh',
        rating: 5,
        opinion:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.',
        date: 'primer día, 2023',
      },
    ],
  },
  {
    product: 'Energy Milk',
    price: 200,
    currency: '€',
    rating: 3.5,
    description:
      'Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. ',
    similarProducts: [],
    reviews: null,
  },
];
