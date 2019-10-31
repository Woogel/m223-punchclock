package ch.zli.m223.punchclock.controller;

import ch.zli.m223.punchclock.domain.Entry;
import ch.zli.m223.punchclock.service.EntryService;
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

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Entry> getAllEntries() {
        return entryService.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Entry createEntry(@Valid @RequestBody Entry entry) {
        return entryService.createEntry(entry);
    }

    @DeleteMapping("/{entryId}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteEntry(@PathVariable("entryId") Long entryId) {
        entryService.deleteEntry(entryId);
    }

    @PutMapping
    @ResponseStatus(HttpStatus.OK)
    public void updateEntry(@Valid @RequestBody Entry entry) {
        entryService.updateEntry(entry);
    }
}