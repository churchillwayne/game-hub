import ApiClient from "./apiClient";
import type Genre from "../entities/Genre";

export default new ApiClient<Genre>("/genres");

