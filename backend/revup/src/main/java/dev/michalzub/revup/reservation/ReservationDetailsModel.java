package dev.michalzub.revup.reservation;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

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
  private LocalDate startDate;
  private LocalDate endDate;
  private Integer totalPrice;

  @OneToOne
  @JoinColumn(name = "reservation_id")
  @JsonBackReference
  private ReservationModel reservation;
}
