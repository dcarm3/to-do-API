import { UserType } from "../types/user.types";
import { CategoryType } from "../types/category.types";

export interface TaskType {
    id: Number;
    title: String;
    description?: String;
    creationDate: Date;
    conclusionDate?: Date;
    dueDate: Date;
    type: String;
    category: CategoryType;
    user: UserType;
    status: "pending" | "Concluded" | "Ongoing";
}