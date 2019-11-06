package ch.zli.m223.punchclock.service;

import ch.zli.m223.punchclock.domain.Category;
import ch.zli.m223.punchclock.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryService {

    private final CategoryRepository categoryRepository;

    public Category createCategory(Category category) {
        return categoryRepository.saveAndFlush(category);
    }

    public List<Category> findAll() {
        return categoryRepository.findAll();
    }

    public void deleteCategory(long categoryId) {
        // TODO: delete Category
    }

    public void updateCategory(Category category) {
        // TODO: Update Category
    }
}
