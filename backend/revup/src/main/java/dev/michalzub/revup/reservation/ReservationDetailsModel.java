package dev.michalzub.revup.reservation;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "reservationDetails")
public class ReservationDetailsModel {
  @Id
  @GeneratedValue
  private Integer id;
  private String customerName;
  private String customerSurname;
  private String customerPhone;
  private LocalDateTime startDate;
  private LocalDateTime endDate;
  private Integer totalPrice;
  @OneToOne
  private ReservationModel reservation;
}
