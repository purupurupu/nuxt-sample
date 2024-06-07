import { defineEventHandler, sendRedirect } from 'h3';

export default defineEventHandler((event) => {
  const path = event.node.req.url || '';
  const pattern = /\/index$/;

  if (pattern.test(path)) {
    const newPath = path.replace(pattern, '/');
    return sendRedirect(event, newPath);
  }
});
