package ch.zli.m223.punchclock.repository;

import ch.zli.m223.punchclock.domain.Entry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;

public interface EntryRepository extends JpaRepository<Entry, Long> {

    @Query("SELECT e FROM Entry AS e WHERE e.user.username= ?1")
    List<Entry> findEntriesByUsername(String username);

    @Modifying
    @Transactional
    @Query("DELETE FROM Entry AS e WHERE e.user.id= ?1")
    void deleteEntriesByUserId(Long id);
}
