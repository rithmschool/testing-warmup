# Testing Warm-Up

Welcome back to testing!

Let's do a warm-up with Node + Jest testing.

## Part I - Topics and Terms

Write the answers to these questions in a markdown or text file (you can use this one if you've forked the repo).

1.  What is the testing pyramid?
1.  What is a unit test?
1.  What is an integration test?
1.  What is an end-to-end test?
1.  What is the difference between black box and white box (clear box) testing?
1.  What is test coverage?
1.  What are edge cases?
1.  What is test-driven development?
1.  Why is testing important?

## Part II - Unit Tests

There are four folders containing algorithms. Write at least 5 unit tests for each (in the `.test` files), and achieve 100% test coverage. The folders are:

- `englishInt`
- `palindromeNumber`
- `quickSort`
- `stringPermutations`

Read the JS doc comments above each function to tell what the expected inputs/outputs are.

## Part III - Integration Tests

In the `app` folder, there is a mini express app called "The List" that reads, writes, and removes names to an array. For example, you can:

- make a GET request to `/names` and it will tell you everyone on the list.
- make a PUT request to `/names/michael` and it will add `michael` to the list or tell you if he is already on it.
- make a GET request to `/names/michael` and it will say whether or not `michael` is on the list.
- make a DELETE request to `/names/michael` and it will remove `michael` from the list if he is on it.

Using Jest and Supertest, write integration tests for each of the above methods. Write at least 2 tests for each endpoint.
