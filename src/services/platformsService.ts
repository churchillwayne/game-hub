import ApiClient from "./apiClient";

export interface Platform{
  id: number;
  name: string;
  slug: string;
}

export default new ApiClient<Platform>("/platforms/lists/parents");

