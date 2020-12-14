import axios from 'axios';

// let token = this.props.token;
const API = (token) =>
  axios.create({
    headers: {
      'Content-Type': 'application/json',
      // Authorization:
      //   'Bearer_eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0MjM5NzgiLCJyb2xlcyI6WyJST0xFX0RJUkVDVE9SIiwiUk9MRV9JTlNUUlVDVE9SIiwiUk9MRV9QQVJFTlQiXSwiaWF0IjoxNjAyNjU0MzM4LCJleHAiOjE2MDc4MzgzMzh9.wwK-TVaAhcBYenn_dxWjk2pc4rJSVztocksmFuaihEsCb9Szx8DkuQUK3XbuO0jG6S0aYO-gzAICmzMdAyp-CA',
      Authorization: `Bearer_${token}`,
    },
  });
export default API;
