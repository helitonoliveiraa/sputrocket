import { ErrorRequestHandler } from 'express';
import { ValidationError } from 'yup';

interface ValidationErrors {
  [key: string]: string[];
};

// Handling with errors
const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
  if (error instanceof ValidationError) {
    let errors: ValidationErrors = {};

    error.inner.forEach(err => {
      errors[err.path] = err.errors;
    });

    // Handling with bad request
    return response.status(400).json({ message: 'Validation fails', errors })
  };
  
  console.error(error);

  // Handling with internal server error
  return response.status(500).json({ message: 'Internal server error' });
};

export default errorHandler;
