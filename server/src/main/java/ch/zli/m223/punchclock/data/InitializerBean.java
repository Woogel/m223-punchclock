package ch.zli.m223.punchclock.data;

import ch.zli.m223.punchclock.domain.Category;
import ch.zli.m223.punchclock.domain.User;
import ch.zli.m223.punchclock.repository.CategoryRepository;
import ch.zli.m223.punchclock.repository.RoleRepository;
import ch.zli.m223.punchclock.repository.UserRepository;
import ch.zli.m223.punchclock.security.SecurityConstants;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.stereotype.Component;

import java.util.List;

@RequiredArgsConstructor
@Component
public class InitializerBean implements InitializingBean {

    private static final User DEFAULT_ADMIN_USER = new User(null, "admin", "toor", SecurityConstants.RoleConstants.ADMIN_ROLE);

    private boolean alreadySetup = false;

    private final CategoryRepository categoryRepository;
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    @Override
    public void afterPropertiesSet() {
        if (alreadySetup) {
            return;
        }

        roleRepository.saveAndFlush(SecurityConstants.RoleConstants.ADMIN_ROLE);
        roleRepository.saveAndFlush(SecurityConstants.RoleConstants.USER_ROLE);

        userRepository.saveAndFlush(DEFAULT_ADMIN_USER);

        categoryRepository.saveAll(getMockCategories());
        categoryRepository.flush();

        alreadySetup = true;
    }

    private List<Category> getMockCategories() {
        return List.of(
                new Category(null, "ZLI"),
                new Category(null, "TBZ"),
                new Category(null, "BMZ"));
    }
}
