package dev.michalzub.revup.RabbitQueue;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.time.LocalDate;

@Getter
@Setter
public class ReservationEventDTO implements Serializable {
  private Integer motorcycleId;
  private Integer userId;
  private String customerName;
  private String customerSurname;
  private String customerPhone;
  private LocalDate startDate;
  private LocalDate endDate;
  private Integer totalPrice;

  public String toJson() throws JsonProcessingException {
    ObjectMapper objectMapper = new ObjectMapper();
    return objectMapper.writeValueAsString(this);
  }
}
