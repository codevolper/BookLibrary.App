const BASE_URL = 'http://localhost:8080/api';

export const searchBooks = async (title, isbn) => {
  try {
    const response = await fetch(`${BASE_URL}/BookSearch?Title=${encodeURIComponent(title)}&ISBN=${encodeURIComponent(isbn)}`);
    console.log(response);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};