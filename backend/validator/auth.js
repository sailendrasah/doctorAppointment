import {z} from 'zod';

const appointmentSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least 3 char" })
    .max(250, { message: "Name must be at least 250 char" }),
  age: z
    .number({ required_error: "Name is required" })
    .min(2, { message: "Name must be at least 2 char" })
    .max(250, { message: "Name must be at least 250 char" }),
  address: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least 3 char" })
    .max(250, { message: "Name must be at least 250 char" }),
  phoneno: z
    .number({ required_error: "Name is required" })
    .min(10, { message: "Name must be at least 10 char" })
    .max(250, { message: "Name must be at least 25 char" }),
  location: z
    .number({ required_error: "location is required" })
    .min(3, { message: "location must be at least 3 char" })
    .max(250, { message: "location must be at least 250 char" }),
});

export default appointmentSchema;