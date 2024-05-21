package dev.michalzub.revup.favourites;

import dev.michalzub.revup.motorcycle.MotorcycleModel;
import dev.michalzub.revup.user.UserModel;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "favourites")
public class FavouritesModel {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  @ManyToMany(mappedBy = "favourites")
  private List<UserModel> users;
  @ManyToMany(mappedBy = "favourites")
  private List<MotorcycleModel> motorcycles;
}
