import { api } from "@/lib/axios";

export interface getManagedRestaurant {
  id: string;
  name: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  description: string | null;
  managerId: string | null;
}

export async function GetManagedRestaurant() {
  const response = await api.get<getManagedRestaurant>("/managed-restaurant");

  return response.data;
}
