package dev.michalzub.revup.reservation;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@RequiredArgsConstructor
@Entity
@Table(name = "reservationDetails")
public class ReservationDetailsModel {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
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
