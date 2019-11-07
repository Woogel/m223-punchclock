package ch.zli.m223.punchclock.controller;

import ch.zli.m223.punchclock.domain.Entry;
import ch.zli.m223.punchclock.service.EntryService;
import ch.zli.m223.punchclock.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/entries")
@RequiredArgsConstructor
public class EntryController {

    private final EntryService entryService;
    private final UserService userService;

    /**
     * Gets all entries created by the current authenticated user from the database.
     *
     * @return All current user created entries.
     */
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Entry> getUserEntries() {
        return entryService.findUserEntries();
    }

    /**
     * Writes the sent item into the database.
     *
     * @param entry The item to be written into the database.
     * @return The exact item that was written into the database.
     */
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Entry createEntry(@Valid @RequestBody Entry entry) {
        return entryService.createEntry(entry);
    }

    /**
     * Deletes the item from the database.
     *
     * @param entryId The id from the entry to be deleted.
     */
    @DeleteMapping("/{entryId}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteEntry(@PathVariable("entryId") Long entryId) {
        entryService.deleteEntry(entryId);
    }

    /**
     * Updates the entry sent in the request body. If the entry doesn't exists, it gets created.
     *
     * @param entry The entry to be updated.
     */
    @PutMapping
    @ResponseStatus(HttpStatus.OK)
    public void updateEntry(@Valid @RequestBody Entry entry) {
        entryService.updateEntry(entry);
    }
}
