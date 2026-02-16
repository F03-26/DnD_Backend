function sanitizeNotes(notes) {
  if (!notes) return '';
  let sanitized = notes.replace(/[\n\r]/g, ' ');
  sanitized = sanitized.replace(/(ignore|disregard|forget|override|reset|system:|assistant:|user:)/gi, '');
  return sanitized.trim();
}

module.exports = { sanitizeNotes };