import { ZodError } from "zod";

const validate = (schema) => async (req, res, next) => {
  try {
    req.body = await schema.parseAsync(req.body); // Validate and overwrite req.body
    next();
  } catch (err) {
    if (err instanceof ZodError) {
      return res.status(422).json({
        status: 422,
        message: "Validation failed",
        errors: err.errors, // Return detailed validation errors
      });
    }
    next(err); // Pass any other errors to Express error handler
  }
};

export default validate;
