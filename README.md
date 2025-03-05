## README

``Goal: set up Clerk authentication for logo in,sign up, logo out; when the user sign up, you will automatically transfer to the Dashboard!

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
Add ClerkProvider to the layout file, cover all the <html></html>;
```

## Resource

- [Authentication with Clerk](https://clerk.com/docs/quickstarts/nextjs-pages-router)
- [Nextjs structure information](https://nextjs.org/docs)
- [Create Middleware.js, in the root of the file](https://clerk.com/docs/references/nextjs/clerk-middleware)

- [How to redirect to previous route after authentication (sing-in or sign-up) in clerk using it with nextjs](https://stackoverflow.com/questions/78359377/how-to-redirect-to-previous-route-after-authentication-sing-in-or-sign-up-in-c)

- [ use tailwindCSS cheat sheet](https://nerdcave.com/tailwind-cheat-sheet)

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

## others

`` I Wrote one <Login> page and one <signin> page for meeting the rubrics-User Login From part!!
