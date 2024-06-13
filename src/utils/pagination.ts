import { ApiResponse } from "../models/api";
import { queryEarthquakes } from "../services/earthquake.services";

export async function addTotalCount(
  response: ApiResponse,
  params: any
): Promise<ApiResponse> {
  const { offset, limit, ...rest } = params;
  const result = await queryEarthquakes(rest);

  response.metadata.totalCount = result.metadata.count;

  return response;
}
