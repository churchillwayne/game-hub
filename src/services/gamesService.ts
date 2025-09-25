import type Game from "@/entities/Game";
import ApiClient from "./apiClient";

export default new ApiClient<Game>("/games");

