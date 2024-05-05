package dev.michalzub.revup.user;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "admin")
public class UserController {

  private final UserService userService;

  @GetMapping
  public ResponseEntity<List<UserModel>> getAllUsers() {
    List<UserModel> users = userService.getAllUsers();
    return ResponseEntity.ok(users);
  }

  @PutMapping
  public ResponseEntity<String> updateUser(@RequestBody Map<String, String> requestBody) {
    String email = requestBody.get("email");
    userService.disableUser(email);
    return ResponseEntity.ok("User updated successfully");
  }

  // Endpoint obsługujący żądania DELETE na ścieżce /admin
  @DeleteMapping
  public ResponseEntity<String> deleteUser(@RequestBody Map<String, String> requestBody) {
    String email = requestBody.get("email");
    userService.deleteUser(email);
    return ResponseEntity.ok("User deleted successfully");
  }
}
