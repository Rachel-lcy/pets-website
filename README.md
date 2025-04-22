# 🐾 Peak Pets - Pet Products E-Commerce Website

## Overview

Peak Pets is a fully responsive e-commerce website for pet products.
It features a dynamic store page, a working shopping cart, and a clean UI.

This project was built as part of my Google Developer Program membership,leveraging modern web technologies and professional CMS integration (Contentful).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Install Dependencies

```bash
npm install
```

```bash
npm install @clerk/nextjs
```

```bash
create .env.local file
```

```bash
npm install react-icons
```

```bash
Add ClerkProvider to the layout file, cover all the <html></html>;
```

```bash
git rm --cached .env.local
```

## 🚀 Technologies Used

- **Next.js** (React Framework)
- **Tailwind CSS** (Modern styling)
- **Contentful CMS** (Dynamic product content management)
- **Clerk Authentication** (Profile/Login management)
- **Lucide React** (Icons library)
- **React Context API** (Cart state management)

## Resource

- [Authentication with Clerk](https://clerk.com/docs/quickstarts/nextjs-pages-router)
- [Nextjs structure information](https://nextjs.org/docs)
- [Create Middleware.js, in the root of the file](https://clerk.com/docs/references/nextjs/clerk-middleware)

- [How to redirect to previous route after authentication (sing-in or sign-up) in clerk using it with nextjs](https://stackoverflow.com/questions/78359377/how-to-redirect-to-previous-route-after-authentication-sing-in-or-sign-up-in-c)

- [ use tailwindCSS cheat sheet](https://nerdcave.com/tailwind-cheat-sheet)

- [ How to use the useSignIn() hook ](https://clerk.com/docs/references/react/use-sign-in#how-to-use-the-use-sign-in-hook)

- [ How to use usePathname ](https://nextjs.org/docs/app/api-reference/functions/use-pathname)

- [ React-icons ](https://react-icons.github.io/react-icons/)

## Design Decision

- [Visual Layout]:

`A clean and modern design was chosen to ensure an intuitive user experience.

``A minimalist grid layout was implemented for the pet image gallery to create a visually appealing and organized display.

``The dashboard page was designed with card components to categorize pet information effectively.

- [Typography and Color Scheme:]

``The application uses a simple, readable font style to enhance accessibility.

``Soft pastel and neutral colors were used to create a welcoming and warm atmosphere.

- [Responsive Design:]

``The website is fully responsive and optimized for different screen sizes, including mobile, tablet, and desktop views.

``A flexible grid system ensures elements resize and rearrange dynamically based on the viewport.

## Challenges and Solutions:

- [Challenge:]
  When users successfully sign up, redirect them to the dashboard page.

- [Solution:]
  `1. I used afterSignUpUrl = "/dashboard" , no matter how I fix it, this syntax doesn't work;

  `2. I tried to find the document, https://stackoverflow.com/questions/78359377/how-to-redirect-to-previous-route-after-authentication-sing-in-or-sign-up-in-c the website give me ideas to address this problem, in the .env.local file, I added the two lines of code, then it worked for my website!

  ```bash
  NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=/dashboard
  NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/dashboard
  ```

  - [Challenge:]
    How to just let your Testimonial component just show in the home page instead of Dashboard page.

- [Solution:]
  `1. I used usePathname hook ,because usePathname can not be used in a Server Component ,I added "use client" in the layout page;

  `2.Then, I used a conditional rendering technique with pathname.
  -If pathname === "/", the testimonial component will display;
  -otherwise, it will not display on pages like "/dashboard"

## others

`` I Wrote one Login page and one signin page for meeting the rubrics-User Login From part!!

## 10 March after class updates

`According to the class activity and Optimized Structure about Peak Pets website:
`1. Add component like HeroImage, Testimonial, and optimize the Footer page!

``2. Update the home page and Dashboard page

## 20 March Assignment Update

`Install lucide-react using hamburger menu and X menu;

```bash
npm install lucide-react

```

## Add Components

- [Add AboutUs page]
- [Add Contact page]
- [Add Services page]
- [Add Store page]

## Update components

- [ Update the whole Homepage]
  ``I rewrite and redesign the home page and make this website more better
- [ Make the Website more responsive]
- [API keys]
  ``regenerate the API keys

## Other Improvement aspects

- [ Use CMS to display Store's products]
  `` Next step, I will improve my website store page bu using CMS to display products and add SLUG to dynamically make products routes clearly!

# 21st April update

## 🛒 Cart System Features

- **Add to Cart**: Products can be added individually to the cart.
- **View Cart**: `/cart` page shows all selected products with details.
- **Remove Items**: Each item in cart can be individually removed.
- **Clear Cart**: Users can empty the entire cart with one click.
- **Cart Badge**: A dynamic cart icon on the navigation bar shows the number of items in the cart.
- **Persistent Cart State** (optional upgrade planned): Using LocalStorage.

## How the Cart System Works

- CartContext.jsx manages the global cart state using React Context.

- The <CartProvider> wraps the entire application in layout.jsx.

- Store page uses useCart() hook to call addToCart(item) when users click "Add to Cart."

- Cart page (/cart) lists all items from cart state, and offers Remove and Clear buttons.

- The Navigation Bar shows a shopping cart icon with dynamic item count badge.
