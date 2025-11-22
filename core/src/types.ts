import { Document } from "mongoose";

export interface ITechnician extends Document {
  userId: string;
  categories: string[];
  pricePerHour: number;
  description: string;
  location: string;
  photo: string;
  rating: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
}

export interface SRequest extends Document {
  clientId: string;
  technicianId: string;
  description: string;
  date: Date;
  status: "pending" | "accepted" | "completed" | "cancelled";
}
