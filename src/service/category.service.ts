import categoryType from "../schemas/category.schemas";
import { CategoryType } from "../types/category.types";

class CategoryService {
    async create(category: CategoryType) {
        const createdCategory = await categoryType.create(category);
        return createdCategory;
    }

    async findAll() {
        const findedCategorys = await categoryType.find();
        return findedCategorys;
    }

    async findById(id: string) {
        const findedCategory = await categoryType.findById(id);
        return findedCategory;
    }

    async update(id: string, Category: CategoryType) {
        const updateCategory = await categoryType.findByIdAndUpdate(
            id,
            {
                name: Category.name,
                color: Category.color,
            },
            { new: true }
        );
        return updateCategory;
    }

    async delete(id: string) {
        try {
            await categoryType.findByIdAndDelete(id);
            return "Category removed.";
        } catch (error) {
            throw new Error('Error on removing category ${ error }');
        }
    }
}

export default new CategoryService();