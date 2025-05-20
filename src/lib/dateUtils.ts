
/**
 * Formats a date in the format "Month DD, YYYY" (e.g., "May 20, 2025")
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
