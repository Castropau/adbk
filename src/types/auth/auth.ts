export interface RegisterRequest {
  name: string;
  email: string;
}

export interface RegisterResponse {
  message: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
}

export interface ApiErrorResponse {
  message: string;
}
