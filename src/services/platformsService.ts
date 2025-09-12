import ApiClient from "./apiClient";
import type { Platform } from "../entities/Platform";

export default new ApiClient<Platform>("/platforms/lists/parents");

