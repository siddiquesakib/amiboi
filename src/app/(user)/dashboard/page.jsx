"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const UserDashboard = () => {
  // Mock user data
  const user = {
    name: "Tahrim Sakib",
    email: "tahrim@example.com",
    avatar: "/avatar.jpg",
    joinedDate: "February 2020",
    age: 23,
    location: "Chittagong",
    birthday: "June 26, 2002",
    avgRating: 4.85,
    totalRatings: 13,
    totalReviews: 1,
  };

  const stats = {
    toRead: 7,
    currentlyReading: 1,
    read: 15,
    totalBooks: 23,
  };

  const currentlyReading = {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    cover: "/book-cover.jpg",
    progress: 45,
  };

  const recentActivity = [
    {
      type: "rated",
      book: "Animal Farm",
      author: "George Orwell",
      rating: 5,
      date: "Oct 13, 2025",
    },
    {
      type: "reading",
      book: "The Catcher in the Rye",
      author: "J.D. Salinger",
      date: "Jun 23, 2025",
    },
  ];

  const favoriteGenres = [
    "Crime",
    "Philosophy",
    "Poetry",
    "Psychology",
    "Romance",
    "Thriller",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - User Profile */}
        <div className="lg:col-span-1">
          {/* Profile Card */}
          <div className="card p-6 mb-6">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src={user.avatar}
                  alt={user.name}
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <h2 className="card-title text-2xl mb-2">{user.name}</h2>
              <p className="text-sm text-gray-600 mb-4">{user.email}</p>

              <div className="text-sm space-y-2 text-left">
                <p>
                  <strong>Age:</strong> {user.age}, {user.location}
                </p>
                <p>
                  <strong>Birthday:</strong> {user.birthday}
                </p>
                <p>
                  <strong>Joined:</strong> {user.joinedDate}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t">
                <p className="text-sm font-medium mb-1">
                  {user.totalRatings} ratings ({user.avgRating} avg)
                </p>
                <p className="text-sm text-gray-600">
                  {user.totalReviews} review
                </p>
              </div>

              <Link href="/profile/edit">
                <button className="btn-secondary w-full mt-4">
                  Edit Profile
                </button>
              </Link>
            </div>
          </div>

          {/* Year in Books */}
          <div className="stats-card mb-6">
            <h3 className="font-semibold mb-3">📚 Your 2025 Year in Books</h3>
            <p className="text-sm text-gray-600 mb-3">
              Enjoy a look back at the books you read this year.
            </p>
            <Link href="/year-in-books" className="text-sm navbar-link">
              Go to Your 2025 Year in Books →
            </Link>
          </div>

          {/* Favorite Genres */}
          <div className="card p-4 mb-6">
            <h3 className="font-semibold mb-3">Favorite Genres</h3>
            <div className="flex flex-wrap gap-2">
              {favoriteGenres.map((genre, idx) => (
                <span key={idx} className="tag">
                  {genre}
                </span>
              ))}
            </div>
            <Link
              href="/genres/edit"
              className="text-sm navbar-link mt-3 inline-block"
            >
              Edit →
            </Link>
          </div>
        </div>

        {/* Right Column - Activity & Books */}
        <div className="lg:col-span-2">
          {/* Bookshelves Stats */}
          <div className="card p-6 mb-6">
            <h2 className="card-title text-xl mb-4">📚 My Bookshelves</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/my-library?shelf=to-read">
                <div className="stats-card text-center cursor-pointer hover:shadow-lg transition-shadow">
                  <div className="stats-number text-3xl">{stats.toRead}</div>
                  <div className="stats-label text-xs">To Read</div>
                </div>
              </Link>
              <Link href="/my-library?shelf=currently-reading">
                <div className="stats-card text-center cursor-pointer hover:shadow-lg transition-shadow">
                  <div className="stats-number text-3xl">
                    {stats.currentlyReading}
                  </div>
                  <div className="stats-label text-xs">Reading</div>
                </div>
              </Link>
              <Link href="/my-library?shelf=read">
                <div className="stats-card text-center cursor-pointer hover:shadow-lg transition-shadow">
                  <div className="stats-number text-3xl">{stats.read}</div>
                  <div className="stats-label text-xs">Read</div>
                </div>
              </Link>
              <div className="stats-card text-center">
                <div className="stats-number text-3xl">{stats.totalBooks}</div>
                <div className="stats-label text-xs">Total</div>
              </div>
            </div>
          </div>

          {/* Currently Reading */}
          {currentlyReading && (
            <div className="card p-6 mb-6">
              <h3 className="card-title text-lg mb-4">📖 Currently Reading</h3>
              <div className="flex gap-4">
                <div className="w-24 h-32 flex-shrink-0 bg-gray-200 rounded overflow-hidden">
                  <Image
                    src={currentlyReading.cover}
                    alt={currentlyReading.title}
                    width={96}
                    height={128}
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-1">
                    {currentlyReading.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    by {currentlyReading.author}
                  </p>
                  <div className="mb-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>{currentlyReading.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-[#615550] h-2 rounded-full"
                        style={{ width: `${currentlyReading.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <Link href={`/book/1`}>
                    <button className="btn-primary text-sm px-4 py-2 mt-2">
                      Update Progress
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Recent Activity */}
          <div className="card p-6">
            <h3 className="card-title text-lg mb-4">Recent Updates</h3>
            <div className="space-y-4">
              {recentActivity.map((activity, idx) => (
                <div key={idx} className="pb-4 border-b last:border-b-0">
                  <div className="flex items-start gap-3">
                    <div className="w-16 h-20 flex-shrink-0 bg-gray-200 rounded"></div>
                    <div className="flex-1">
                      <p className="text-sm mb-1">
                        <span className="font-semibold">{user.name}</span>{" "}
                        {activity.type === "rated" ? (
                          <>
                            rated a book{" "}
                            <span className="text-yellow-500">
                              {Array(activity.rating).fill("★").join("")}
                            </span>
                          </>
                        ) : (
                          "is currently reading"
                        )}
                      </p>
                      <h4 className="font-semibold mb-1">{activity.book}</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        by {activity.author}
                      </p>
                      <p className="text-xs text-gray-500">{activity.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/activity"
              className="text-sm navbar-link mt-4 inline-block"
            >
              View All Activity →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
