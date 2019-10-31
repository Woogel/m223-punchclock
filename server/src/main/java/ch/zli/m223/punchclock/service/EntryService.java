package ch.zli.m223.punchclock.service;

import ch.zli.m223.punchclock.domain.Entry;
import ch.zli.m223.punchclock.exception.BadRequestException;
import ch.zli.m223.punchclock.repository.EntryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EntryService {
    private final EntryRepository entryRepository;

    public Entry createEntry(Entry entry) {
        validateTimestamps(entry);
        return entryRepository.saveAndFlush(entry);
    }

    public List<Entry> findAll() {
        return entryRepository.findAll();
    }

    public void deleteEntry(Long entryId) {
        entryRepository.deleteById(entryId);
    }

    public void updateEntry(Entry entry) {
        validateTimestamps(entry);
        entryRepository.save(entry);
    }

    private static void validateTimestamps(Entry entry) {
        if (entry.getCheckIn().isAfter(entry.getCheckOut())) {
            throw new BadRequestException("Check in date must be before Check out date");
        }
    }
}
