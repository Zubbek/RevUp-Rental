package dev.michalzub.revup.reservation;

import dev.michalzub.revup.motorcycle.MotorcycleModel;
import dev.michalzub.revup.user.UserModel;
import jakarta.persistence.*;

@Entity
@Table(name = "reservations")
public class ReservationModel {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  @OneToOne(mappedBy = "reservation")
  private ReservationDetailsModel reservationDetails;
  @ManyToOne
  private UserModel user;
  @ManyToOne
  private MotorcycleModel motorcycle;
}
