bookworm
├── public
│   ├── images
│   │   ├── logo.png
│   │   └── default-cover.jpg
│   └── favicon.ico
│
├── src
│   ├── app
│   │   ├── (auth)
│   │   │   ├── login
│   │   │   │   └── page.jsx
│   │   │   └── register
│   │   │       └── page.jsx
│   │   │
│   │   ├── (user)
│   │   │   ├── my-library
│   │   │   │   └── page.jsx
│   │   │   ├── browse-books
│   │   │   │   └── page.jsx
│   │   │   ├── book
│   │   │   │   └── [id]
│   │   │   │       └── page.jsx
│   │   │   ├── tutorials
│   │   │   │   └── page.jsx
│   │   │   └── dashboard
│   │   │       └── page.jsx
│   │   │
│   │   ├── (admin)
│   │   │   ├── admin
│   │   │   │   ├── dashboard
│   │   │   │   │   └── page.jsx
│   │   │   │   ├── manage-books
│   │   │   │   │   └── page.jsx
│   │   │   │   ├── manage-genres
│   │   │   │   │   └── page.jsx
│   │   │   │   ├── manage-users
│   │   │   │   │   └── page.jsx
│   │   │   │   ├── moderate-reviews
│   │   │   │   │   └── page.jsx
│   │   │   │   └── manage-tutorials
│   │   │   │       └── page.jsx
│   │   │
│   │   ├── api
│   │   │   ├── auth
│   │   │   │   ├── register
│   │   │   │   │   └── route.jsx
│   │   │   │   ├── login
│   │   │   │   │   └── route.jsx
│   │   │   │   └── logout
│   │   │   │       └── route.jsx
│   │   │   ├── books
│   │   │   │   ├── route.jsx
│   │   │   │   └── [id]
│   │   │   │       └── route.jsx
│   │   │   ├── genres
│   │   │   │   └── route.jsx
│   │   │   ├── reviews
│   │   │   │   └── route.jsx
│   │   │   ├── shelves
│   │   │   │   └── route.jsx
│   │   │   ├── users
│   │   │   │   └── route.jsx
│   │   │   └── tutorials
│   │   │       └── route.jsx
│   │   │
│   │   ├── layout.jsx
│   │   ├── page.jsx (redirect logic)
│   │   └── not-found.jsx
│   │
│   ├── components
│   │   ├── shared
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── LoadingSpinner.jsx
│   │   │   └── ErrorMessage.jsx
│   │   │
│   │   ├── user
│   │   │   ├── BookCard.jsx
│   │   │   ├── BookGrid.jsx
│   │   │   ├── ReviewForm.jsx
│   │   │   ├── ShelfManager.jsx
│   │   │   ├── ProgressTracker.jsx
│   │   │   └── RecommendationCarousel.jsx
│   │   │
│   │   ├── admin
│   │   │   ├── BookForm.jsx
│   │   │   ├── GenreForm.jsx
│   │   │   ├── UserTable.jsx
│   │   │   ├── ReviewModerationTable.jsx
│   │   │   └── StatsCard.jsx
│   │   │
│   │   └── ui
│   │       ├── Button.jsx
│   │       ├── Card.jsx
│   │       ├── Modal.jsx
│   │       ├── Input.jsx
│   │       └── Select.jsx
│   │
│   ├── lib
│   │   ├── mongodb.jsx
│   │   ├── auth.jsx
│   │   └── utils.jsx
│   │
│   ├── models
│   │   ├── User.jsx
│   │   ├── Book.jsx
│   │   ├── Genre.jsx
│   │   ├── Review.jsx
│   │   ├── Shelf.jsx
│   │   └── Tutorial.jsx
│   │
│   ├── middleware.jsx (route protection)
│   │
│   └── styles
│       └── globals.css
│
├── .env.local
├── .gitignore
├── next.config.jsx
├── package.jsxon
├── jsxconfig.jsxon
└── README.md