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
│   │   │   │   │   └── route.js
│   │   │   │   ├── login
│   │   │   │   │   └── route.js
│   │   │   │   └── logout
│   │   │   │       └── route.js
│   │   │   ├── books
│   │   │   │   ├── route.js
│   │   │   │   └── [id]
│   │   │   │       └── route.js
│   │   │   ├── genres
│   │   │   │   └── route.js
│   │   │   ├── reviews
│   │   │   │   └── route.js
│   │   │   ├── shelves
│   │   │   │   └── route.js
│   │   │   ├── users
│   │   │   │   └── route.js
│   │   │   └── tutorials
│   │   │       └── route.js
│   │   │
│   │   ├── layout.js
│   │   ├── page.jsx (redirect logic)
│   │   └── not-found.js
│   │
│   ├── components
│   │   ├── shared
│   │   │   ├── Navbar.js
│   │   │   ├── Footer.js
│   │   │   ├── LoadingSpinner.js
│   │   │   └── ErrorMessage.js
│   │   │
│   │   ├── user
│   │   │   ├── BookCard.js
│   │   │   ├── BookGrid.js
│   │   │   ├── ReviewForm.js
│   │   │   ├── ShelfManager.js
│   │   │   ├── ProgressTracker.js
│   │   │   └── RecommendationCarousel.js
│   │   │
│   │   ├── admin
│   │   │   ├── BookForm.js
│   │   │   ├── GenreForm.js
│   │   │   ├── UserTable.js
│   │   │   ├── ReviewModerationTable.js
│   │   │   └── StatsCard.js
│   │   │
│   │   └── ui
│   │       ├── Button.js
│   │       ├── Card.js
│   │       ├── Modal.js
│   │       ├── Input.js
│   │       └── Select.js
│   │
│   ├── lib
│   │   ├── mongodb.js
│   │   ├── auth.js
│   │   └── utils.js
│   │
│   ├── models
│   │   ├── User.js
│   │   ├── Book.js
│   │   ├── Genre.js
│   │   ├── Review.js
│   │   ├── Shelf.js
│   │   └── Tutorial.js
│   │
│   ├── middleware.js (route protection)
│   │
│   └── styles
│       └── globals.css
│
├── .env.local
├── .gitignore
├── next.config.js
├── package.json
├── jsconfig.json
└── README.md