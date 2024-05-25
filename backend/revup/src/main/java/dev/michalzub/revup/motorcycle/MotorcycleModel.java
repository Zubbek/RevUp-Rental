package dev.michalzub.revup.motorcycle;

import com.fasterxml.jackson.annotation.JsonIgnore;
import dev.michalzub.revup.favourites.FavouritesModel;
import dev.michalzub.revup.reservation.ReservationModel;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "motorcycle")
public class MotorcycleModel {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private String company;
  private String model;
  private String category;
  private Integer articleId;
  private String image;
  private boolean isReserved;
  private Integer price;

  @OneToOne(mappedBy = "motorcycle", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  @JsonIgnore
  private MotorcycleDetailsModel motorcycleDetails;
  @OneToMany(mappedBy = "motorcycle")
  private List<ReservationModel> reservations;
  @ManyToMany(fetch = FetchType.LAZY)
  private List<FavouritesModel> favourites;
}
