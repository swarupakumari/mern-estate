export const errorHandler = (statusCode, message) => {
  const error = new Error();//constructor 
  error.statusCode = statusCode;
  error.message = message;
  return error;
};