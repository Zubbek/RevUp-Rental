package dev.michalzub.revup.favourites;

import dev.michalzub.revup.motorcycle.MotorcycleModel;
import dev.michalzub.revup.motorcycle.MotorcycleRepository;
import dev.michalzub.revup.user.UserModel;
import dev.michalzub.revup.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class FavouritesService {
  private final FavouritesRepository favouritesRepository;
  private final UserRepository userRepository;
  private final MotorcycleRepository motorcycleRepository;

  public boolean addMotorcycleToFavourites(Integer motorcycleId, String userEmail) {
    UserModel user = userRepository.findByEmail(userEmail)
      .orElseThrow(() -> new RuntimeException("User not found"));
    MotorcycleModel motorcycle = motorcycleRepository.findById(motorcycleId)
      .orElseThrow(() -> new RuntimeException("Motorcycle not found"));

    boolean exists = favouritesRepository.existsByUserAndMotorcycle(user, motorcycle);
    if (exists) {
      return false;
    }

    FavouritesModel favourite = new FavouritesModel();
    favourite.setUser(user);
    favourite.setMotorcycle(motorcycle);

    favouritesRepository.save(favourite);
    return true;
  }
  public List<MotorcycleModel> getAllFavouriteMotorcyclesForUser(UserModel user) {
      return favouritesRepository.findFavouriteMotorcyclesByUser(user);
  }

  public List<MotorcycleModel> getAllFavouriteMotorcyclesForUserByEmail(String userEmail) {
    UserModel user = userRepository.findByEmail(userEmail)
      .orElseThrow(() -> new RuntimeException("User not found"));
    return getAllFavouriteMotorcyclesForUser(user);
  }

  public boolean deleteMotorcycle(String userEmail, Integer id) {
    UserModel user = userRepository.findByEmail(userEmail)
      .orElseThrow(() -> new RuntimeException("User not found"));
    MotorcycleModel motorcycle = motorcycleRepository.findById(id)
      .orElseThrow(() -> new RuntimeException("Motorcycle not found"));
    favouritesRepository.deleteMotorcycleFromFavourites(user, motorcycle);
    return !favouritesRepository.existsByUserAndMotorcycle(user, motorcycle);
  }
}
