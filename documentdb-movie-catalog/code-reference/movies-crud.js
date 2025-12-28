/**
 * movies-crud.js
 *
 * Demonstrates basic CRUD operations on Amazon DocumentDB
 * using a simple "movies" collection.
 *
 * Operations covered:
 * 1. Create (Insert)
 * 2. Read (Find)
 * 3. Update
 * 4. Delete
 */

// Switch to the database
use movieCatalog;

/**
 * CREATE OPERATION
 * Create a collection and insert initial movie data
 */

// Create collection (optional – MongoDB creates it automatically on insert)
db.createCollection("movies");

// Insert 5 movie documents
db.movies.insertMany([
  {
    title: "Inception",
    genre: "Sci-Fi",
    releaseYear: 2010,
    rating: 8.8
  },
  {
    title: "Interstellar",
    genre: "Sci-Fi",
    releaseYear: 2014,
    rating: 8.6
  },
  {
    title: "The Dark Knight",
    genre: "Action",
    releaseYear: 2008,
    rating: 9.0
  },
  {
    title: "Avengers: Endgame",
    genre: "Superhero",
    releaseYear: 2019,
    rating: 8.4
  },
  {
    title: "Parasite",
    genre: "Thriller",
    releaseYear: 2019,
    rating: 8.6
  }
]);

/**
 * READ OPERATIONS
 */

// 1. Read all movies
db.movies.find();

// 2. Find movies by genre
db.movies.find({ genre: "Sci-Fi" });

// 3. Find a single movie by title
db.movies.findOne({ title: "Interstellar" });

/**
 * UPDATE OPERATIONS
 */

// 1. Update rating of a single movie
db.movies.updateOne(
  { title: "Interstellar" },
  { $set: { rating: 8.7 } }
);

// 2. Update multiple documents (increase rating for all Sci-Fi movies)
db.movies.updateMany(
  { genre: "Sci-Fi" },
  { $inc: { rating: 0.1 } }
);

// Verify updates
db.movies.find({ genre: "Sci-Fi" });

/**
 * DELETE OPERATIONS
 */

// 1. Delete a single movie
db.movies.deleteOne({ title: "Parasite" });

// 2. Delete multiple movies by condition
db.movies.deleteMany({ releaseYear: { $lt: 2010 } });

// Final check: view remaining movies
db.movies.find();
