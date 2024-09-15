import { jwtDecode } from "jwt-decode";

  interface DecodedToken {
    email: string;
    exp: number; // Expiration timestamp
    iat: number; // Issued at timestamp
    name: string;
    userId: string;
  }
  // Check if token exists in session or local storage
  const token = localStorage.getItem("token");
  let decodedToken: DecodedToken | null = null;
  //const name = decodedToken.name;
  if (token && token.split('.').length === 3) {
    try {
      decodedToken = jwtDecode<DecodedToken>(token);
    } catch (error) {
      console.error("Invalid token:", error);
      // Clear invalid token if necessary
      localStorage.removeItem("token");
    }
  }



// Function to decode JWT token
export const decodeToken = (): DecodedToken | null => {
  const token = localStorage.getItem('token');

  if (token && token.split('.').length === 3) {
    try {
      const decodedToken = jwtDecode<DecodedToken>(token);

      // Optional: Check if the token is expired
      const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
      if (decodedToken.exp < currentTime) {
        localStorage.removeItem('token'); // Clear expired token
        return null;
      }

      return decodedToken;
    } catch (error) {
      console.error('Invalid token:', error);
      localStorage.removeItem('token'); // Clear invalid token
      return null;
    }
  }

  return null;
};
