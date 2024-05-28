package dev.michalzub.revup.reservation;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@Builder
public class ReservationRequest {
  private Integer motorcycleId;
  private String customerEmail;
  private String customerName;
  private String customerSurname;
  private String customerPhone;
  private LocalDate startDate;
  private LocalDate endDate;
  private Integer totalPrice;
}
