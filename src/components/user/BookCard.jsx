"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const BookCard = ({ book }) => {
  const {
    _id,
    title,
    author,
    coverImage,
    genre,
    rating,
    reviewCount,
    description,
  } = book || {};

  return (
    <div className="card p-4 h-full flex flex-col">
      {/* Book Cover */}
      <div className="relative w-full h-64 mb-4 overflow-hidden rounded-lg">
        <Image
          src={coverImage || "/default-cover.jpg"}
          alt={title || "Book cover"}
          fill
          className="object-cover"
        />
      </div>

      {/* Book Info */}
      <div className="flex-1">
        <h3 className="card-title text-lg mb-2 line-clamp-2">
          {title || "Untitled"}
        </h3>

        <p className="text-sm text-gray-600 mb-2">by {author || "Unknown"}</p>

        {/* Genre Tags */}
        {genre && (
          <div className="flex flex-wrap gap-2 mb-3">
            {Array.isArray(genre) ? (
              genre.slice(0, 2).map((g, idx) => (
                <span key={idx} className="tag text-xs">
                  {g}
                </span>
              ))
            ) : (
              <span className="tag text-xs">{genre}</span>
            )}
          </div>
        )}

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`text-lg ${
                  star <= (rating || 0) ? "text-yellow-500" : "text-gray-300"
                }`}
              >
                ★
              </span>
            ))}
          </div>
          <span className="text-sm text-gray-600">
            ({reviewCount || 0} reviews)
          </span>
        </div>

        {/* Description */}
        {description && (
          <p className="text-sm text-gray-600 line-clamp-3 mb-4">
            {description}
          </p>
        )}
      </div>

      {/* Actions */}
      <div className="flex gap-2 mt-auto">
        <Link href={`/book/${_id}`} className="flex-1">
          <button className="btn-primary w-full py-2 text-sm">
            View Details
          </button>
        </Link>
        <button className="btn-secondary px-4 py-2 text-sm">+ Library</button>
      </div>
    </div>
  );
};

export default BookCard;
