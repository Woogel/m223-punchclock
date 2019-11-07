package ch.zli.m223.punchclock.controller;

import ch.zli.m223.punchclock.domain.User;
import ch.zli.m223.punchclock.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@RequiredArgsConstructor
@RequestMapping("/users")
@RestController
public class UserController {

    private final UserService userService;

    /**
     * Writes the user into the database.
     *
     * @param user The user to be written into the database.
     */
    @PostMapping("/sign-up")
    @ResponseStatus(HttpStatus.CREATED)
    public void signUp(@RequestBody User user) {
        userService.signUpUser(user);
    }

    /**
     * Gets all users from the database. User needs to have the roll "admin" to access this endpoint.
     *
     * @return All users written in the database.
     */
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<User> getAllUsers() {
        userService.checkIfCurrentUserIsAdmin();
        return userService.getAllUsers();
    }

    /**
     * Deletes the user with the sent id.
     *
     * @param userId User ID of the user to be deleted.
     */
    @DeleteMapping("/{userId}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteUser(@PathVariable("userId") Long userId) {
        userService.checkIfCurrentUserIsAdmin();
        userService.deleteUser(userId);
    }

    /**
     * Updates the user sent in the request body. If the user doesn't exists, it gets created.
     *
     * @param user The user to be updated.
     */
    @PutMapping
    @ResponseStatus(HttpStatus.OK)
    public void updateUser(@Valid @RequestBody User user) {
        userService.checkIfCurrentUserIsAdmin();
        userService.updateUser(user);
    }
}
