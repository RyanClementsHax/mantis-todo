import { r as readBody, c as createError } from '../runtime.mjs';

const parseBody = async (event, schema) => {
  const body = await readBody(event);
  const result = schema.safeParse(body);
  if (result.success) {
    return result.data;
  } else {
    throw createError({
      statusCode: 400,
      message: "Invalid request body"
    });
  }
};

export { parseBody as p };
//# sourceMappingURL=validation.mjs.map
