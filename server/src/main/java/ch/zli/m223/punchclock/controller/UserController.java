package ch.zli.m223.punchclock.controller;

import ch.zli.m223.punchclock.domain.User;
import ch.zli.m223.punchclock.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RequiredArgsConstructor
@RequestMapping("/users")
@RestController
public class UserController {

    private final UserService userService;

    @PostMapping("/sign-up")
    @ResponseStatus(HttpStatus.CREATED)
    public void signUp(@RequestBody User user) {
        userService.signUpUser(user);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<User> getAllUsers() {
        userService.checkIfCurrentUserIsAdmin();
        return userService.getAllUsers();
    }

    @DeleteMapping
    @ResponseStatus(HttpStatus.OK)
    public void deleteUser(long userId) {
        userService.checkIfCurrentUserIsAdmin();
        userService.deleteUser(userId);
    }

    @PutMapping
    @ResponseStatus(HttpStatus.OK)
    public void updateUser(User user) {
        userService.checkIfCurrentUserIsAdmin();
        userService.updateUser(user);
    }
}
