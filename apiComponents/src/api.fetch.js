// API stands for application programming interface
// API is a software intermediary that allows two applications to talk to each other.
// In other words, an API is the messenger that delivers your request to the provider that you’re requesting it from and then delivers the response back to you.

/*
The fetch() method in JavaScript is used to request data from a server. 
The request can be of any type of API that returns the data in JSON or XML. 

***The fetch() method requires one parameter, the URL to request, and returns a promise.***

Syntax:

// api for the get request
fetch('url') // Uniform Resource Locator
  .then(response => response.json())
  .then(data => console.log(data));
  
Parameters: This method requires one parameter and accepts two parameters:

URL: It is the URL to which the request is to be made.
Options: It is an array of properties. It is an optional parameter.

Return Value:***
  It returns a promise whether it is resolved or not. 
  The return data can be of the format JSON or XML. 
  It can be an array of objects or simply a single object.
*/

// CRUD => Create, Read, Update, Delete

// Create => POST
// Read => GET
// Update => PUT
// Delete => DELETE

const API_URL = "https://jsonplaceholder.typicode.com";

export const getPosts = () => {
  // https://jsonplaceholder.typicode.com/posts
  return fetch(`${API_URL}/posts`, {
    method: "GET",
  }).then((response) => response.json());   //lecture 13/08/36:11;
};

export const getUsers = () => {
  // https://jsonplaceholder.typicode.com/posts
  return fetch(`${API_URL}/users`, {
    method: "GET",
  }).then((response) => response.json());   //lecture 14/08/32:06;
};

// Create a post
export const createPost = (post) => {
  // https://jsonplaceholder.typicode.com/posts
  return fetch(`${API_URL}/posts`, {
    method: "POST",
    body: JSON.stringify(post), // body data type must match "Content-Type" header
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json()); // parses JSON response into native JavaScript objects
};

// Get a single post
export const getSinglePost = (id) => {
  // https://jsonplaceholder.typicode.com/posts/1
  return fetch(`${API_URL}/posts/${id}`, {
    method: "GET",
  }).then((response) => response.json());
};

// Update a post
export const updatePost = (id, post) => {
  // https://jsonplaceholder.typicode.com/posts/1
  return fetch(`${API_URL}/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());
};

// Delete a post
export const deletePost = (id) => {
  // https://jsonplaceholder.typicode.com/posts/1
  return fetch(`${API_URL}/posts/${id}`, {
    method: "DELETE",
  }).then((response) => response.json());
};

//default export :--
//means if we export with default then in time of importing in the component if function name is not matches by any one those are only exported, 
//then that function takes export default function. 

//block import :--
//import { getUsers,deletePost, updatePost,...many more } from "./api.fetch.js";
//in this case these import are known as block import.
