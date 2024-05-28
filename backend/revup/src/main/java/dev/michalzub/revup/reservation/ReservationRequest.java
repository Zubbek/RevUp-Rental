package dev.michalzub.revup.reservation;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
public class ReservationRequest {
  private Integer motorcycleId;
  private Integer userId;
  private String customerName;
  private String customerSurname;
  private String customerPhone;
  private LocalDateTime startDate;
  private LocalDateTime endDate;
  private Integer totalPrice;
}
