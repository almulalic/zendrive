import { AxiosResponse } from "axios";
import { authorizedAxiosApp } from "./Axios";
import { UserFavoriteDto } from "../models/userFavorite/UserFavoriteDto";
import { UserFavoriteResponse } from "../models/userFavorite/UserFavoriteResponse";
import { UserFavoriteView } from "@apiModels/userFavorite/UserFavoriteView";

export class UserFavoriteService {
	static async getAll(): Promise<AxiosResponse<UserFavoriteResponse[]>> {
		return authorizedAxiosApp.get(`user/metafile/favorite`);
	}

	static async add(dto: UserFavoriteDto): Promise<AxiosResponse<UserFavoriteView[]>> {
		return authorizedAxiosApp.post(`user/metafile/favorite`, dto);
	}

	static async remove(dto: UserFavoriteDto): Promise<AxiosResponse<UserFavoriteView[]>> {
		return authorizedAxiosApp.post(`user/metafile/favorite/remove`, dto);
	}
}
