package ch.zli.m223.punchclock.service;

import ch.zli.m223.punchclock.domain.Entry;
import ch.zli.m223.punchclock.domain.User;
import ch.zli.m223.punchclock.exception.BadRequestException;
import ch.zli.m223.punchclock.repository.EntryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EntryService {

    private final EntryRepository entryRepository;
    private final UserService userService;

    public Entry createEntry(Entry entry) {
        validateTimestamps(entry);
        entry.setUser(userService.getCurrentUser());
        return entryRepository.saveAndFlush(entry);
    }

    public List<Entry> findAll() {
        return entryRepository.findAll();
    }

    public List<Entry> findUserEntries() {
        User user = userService.getCurrentUser();
        return entryRepository.findEntriesByUsername(user.getUsername());
    }

    public void deleteEntry(Long entryId) {
        entryRepository.deleteById(entryId);
    }

    public void updateEntry(Entry entry) {
        validateTimestamps(entry);
        entryRepository.saveAndFlush(entry);
    }

    private static void validateTimestamps(Entry entry) {
        if (entry.getCheckIn().isAfter(entry.getCheckOut())) {
            throw new BadRequestException("Check in date must be before Check out date");
        }
    }
}
