# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
    - Solves the state management problem. It's really hard to keep track of data that has to go through multiple components, and global data tracking. Context API makes it really easy to keep our state clean.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    - A store is where we store our state, data, and such to be used in the app later. 
    - An action is an object created with a type and an optional payload of data. They are dispatched into the reducer to update state according to the type and payload.
    - A reducer is a pure function that makes a new state based on the state passed into it. It then does functional logic received by the action object to do whatever it is we want it to do with that.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
    -Allows us to make asynchronous and API calls from our action-creators; thus making our action-creators much more powerful able to churn out thunks/functions as well as objects.

4. What is your favorite state management system you've learned and this sprint? Please explain why!
    - By far my favorite is Context API. It's just so easy to work with, not a lot of setup, you just know how to work with your state. So good. R.I.P. the multiuse ability of our components but that's a sacrifice I'm willing to work with.