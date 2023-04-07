module.exports = ({ github, context }) => {
  console.log("hello");
  return context.payload.client_payload.value;
};
