package dev.michalzub.revup.favourites;
import dev.michalzub.revup.motorcycle.MotorcycleModel;
import dev.michalzub.revup.user.UserModel;
import dev.michalzub.revup.user.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.security.Principal;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/favourites")
public class FavouritesController {
    private final FavouritesService favouritesService;
    private final UserService userService;
  @PostMapping("/{motorcycleId}")
  public ResponseEntity<String> addToFavourites(@PathVariable Integer motorcycleId, Principal principal) {
    boolean isAdded = favouritesService.addMotorcycleToFavourites(motorcycleId, principal.getName());
    if (isAdded) {
      return ResponseEntity.ok("{\"message\": \"Motorcycle added to favourites\"}");
    } else {
      return ResponseEntity.status(HttpStatus.CONFLICT).body("{\"message\": \"Motorcycle is already in favourites\"}");
    }
  }

  @GetMapping
  public List<MotorcycleModel> getAllFavouriteMotorcyclesForCurrentUser(Principal principal) {
    String userEmail = principal.getName();
    return favouritesService.getAllFavouriteMotorcyclesForUserByEmail(userEmail);
  }

  @DeleteMapping
  public ResponseEntity<String> deleteMotorcycleFromFavourites(Principal principal, @RequestParam Integer id) {
    String userEmail = principal.getName();
    boolean status = favouritesService.deleteMotorcycle(userEmail, id);
    if (status) {
      return ResponseEntity.ok("{\"message\": \"Motorcycle removed successfully\"}");
    } else {
      return ResponseEntity.badRequest().body("{\"message\": \"ERROR while removing motorcycle from favourites\"}");
    }
  }
}
