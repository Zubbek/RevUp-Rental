package dev.michalzub.revup.motorcycle;

import dev.michalzub.revup.favourites.FavouritesModel;
import dev.michalzub.revup.reservation.ReservationModel;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "motorcycle")
public class MotorcycleModel {
  @Id
  @GeneratedValue
  private Integer id;
  private String company;
  private String model;
  private boolean isReserved;
  @OneToOne
  private MotorcycleDetailsModel motorcycleDetails;
  @OneToMany(mappedBy = "motorcycle")
  private List<ReservationModel> reservations;
  @ManyToMany(fetch = FetchType.LAZY)
  private List<FavouritesModel> favourites;
}
