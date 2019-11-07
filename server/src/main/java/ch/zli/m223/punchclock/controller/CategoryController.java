package ch.zli.m223.punchclock.controller;

import ch.zli.m223.punchclock.domain.Category;
import ch.zli.m223.punchclock.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/categories")
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryService categoryService;

    /**
     * Adds the category sent in the request body to the database.
     *
     * @param category The category that should be written into the database.
     * @return The category written into the database.
     */
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Category createCategory(@Valid @RequestBody Category category) {
        return categoryService.createCategory(category);
    }

    /**
     * Loads all categories from the database.
     *
     * @return All categories in the database.
     */
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Category> getAllCategories() {
        return categoryService.findAll();
    }

    /**
     * Deletes the category from the database.
     *
     * @param categoryId The unique ID from the category.
     */
    @DeleteMapping
    @ResponseStatus(HttpStatus.OK)
    public void deleteCategory(long categoryId) {
        categoryService.deleteCategory(categoryId);
    }

    /**
     * Updates the category sent in the request body. If the category doesn't exists, it gets created.
     *
     * @param category The category to be updated.
     */
    @PutMapping
    @ResponseStatus(HttpStatus.OK)
    public void updateCategory(Category category) {
        categoryService.updateCategory(category);
    }
}
