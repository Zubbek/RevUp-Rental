package dev.michalzub.revup.user;

import dev.michalzub.revup.role.Role;
import dev.michalzub.revup.role.RoleRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService implements UserDetailsService {

    private final static String EXCEPTION = "User with email %s not found :(";
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    @Override
    @Transactional
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return userRepository.findByEmail(email).orElseThrow(() ->
                new UsernameNotFoundException(String.format(EXCEPTION, email)));
    }
    public List<UserModel> getAllUsers() {
      Role role = roleRepository.findByName("USER")
        .orElseThrow(() -> new IllegalArgumentException("Role not found: " + "USER"));
      return userRepository.findAllByRolesContains(role);
    }

    public void deleteUser(String email) {
      UserModel user = userRepository.findByEmail(email)
        .orElseThrow(() -> new IllegalArgumentException("User not found with email: " + email));
      userRepository.delete(user);
    }

    public void lockUser(String email) {
      UserModel user = userRepository.findByEmail(email)
        .orElseThrow(() -> new IllegalArgumentException("User not found with email: " + email));
      user.setEnabled(false);
      user.setLocked(true);
      userRepository.save(user);
    }

    public void unLockUser(String email) {
      UserModel user = userRepository.findByEmail(email)
        .orElseThrow(() -> new IllegalArgumentException("User not found with email: " + email));
      user.setEnabled(true);
      user.setLocked(false);
      userRepository.save(user);
    }
  }
