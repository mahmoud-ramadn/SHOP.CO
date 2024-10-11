


# E-commerce Website

This is a simple e-commerce website built with Vue.js, TypeScript, Pinia, and Vue Router. The project features three main pages: Home, Cart, and Product Details. It also uses a Fake API to retrieve product data and simulate basic e-commerce functionality.

## Features

- **Home Page**: Displays a list of products fetched from a Fake API.
- **Cart Page**: Users can view and manage the products they have added to their cart.
- **Product Details Page**: Shows detailed information about a selected product.
- **Fake API Integration**: Retrieves product data from a Fake API.
- **Pinia**: Used for state management (cart, product data, etc.).
- **Vue Router**: Manages navigation between pages.
- **Responsive Design**: Styled using Tailwind CSS for a responsive and modern design.

## Technologies Used

- **Vue 3**: Frontend framework
- **TypeScript**: For type safety and better code management
- **Pinia**: State management
- **Vue Router**: Page routing
- **Fake API**: For product data
- **Tailwind CSS**: For responsive design and styling

## Pages

### 1. Home Page
Displays a list of products with basic information (title, price, rating). Each product links to the Product Details page.

### 2. Product Details Page
Provides detailed information about a selected product, including:
- Title
- Price
- Description
- Category
- Rating (count and rate)
- Image

Users can add products to the cart from this page.

### 3. Cart Page
Displays the items added to the cart, allows users to:
- Increment/decrement product quantity
- Remove items from the cart
- See the total price of items in the cart

## Setup Instructions

1. Clone the repository:

```bash
git clone <your-repo-url>




# -

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
