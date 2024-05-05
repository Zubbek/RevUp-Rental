package dev.michalzub.revup.user;

import dev.michalzub.revup.role.Role;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Transactional
@Repository
public interface UserRepository extends JpaRepository<UserModel, Integer> {

    Optional<UserModel> findByEmail(String email);
    List<UserModel> findAllByRolesContains(Role role);
}
