package dev.michalzub.revup.user;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
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
  public ResponseEntity<Map<String, String>> updateUser(@RequestBody Map<String, String> requestBody) {
    String email = requestBody.get("email");
    userService.disableUser(email);
    Map<String, String> response = new HashMap<>();
    response.put("message", "User updated successfully");
    return ResponseEntity.ok(response);
  }

  @DeleteMapping
  public ResponseEntity<Map<String, String>> deleteUser(@RequestBody Map<String, String> requestBody) {
    String email = requestBody.get("email");
    userService.deleteUser(email);
    Map<String, String> response = new HashMap<>();
    response.put("message", "User deleted successfully");
    return ResponseEntity.ok(response);
  }
}
