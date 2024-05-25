package dev.michalzub.revup.favourites;

import com.fasterxml.jackson.annotation.JsonBackReference;
import dev.michalzub.revup.motorcycle.MotorcycleModel;
import dev.michalzub.revup.user.UserModel;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "favourites")
public class FavouritesModel {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  @ManyToOne
  @JoinColumn(name = "user_id")
  @JsonBackReference
  private UserModel user;

  @ManyToOne
  @JoinColumn(name = "motorcycle_id")
  private MotorcycleModel motorcycle;
}
