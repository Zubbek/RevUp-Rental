package dev.michalzub.revup.favourites;

import dev.michalzub.revup.motorcycle.MotorcycleModel;
import dev.michalzub.revup.user.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface FavouritesRepository extends JpaRepository<FavouritesModel, Long> {
  boolean existsByUserAndMotorcycle(UserModel user, MotorcycleModel motorcycle);

  @Transactional
  @Query("SELECT f.motorcycle FROM FavouritesModel f WHERE f.user = :user")
  List<MotorcycleModel> findFavouriteMotorcyclesByUser(UserModel user);

  @Modifying
  @Transactional
  @Query("DELETE FROM FavouritesModel f WHERE f.user = :user AND f.motorcycle = :motorcycle")
  void deleteMotorcycleFromFavourites(UserModel user, MotorcycleModel motorcycle);
}
