package dev.michalzub.revup.RabbitQueue;

import com.fasterxml.jackson.core.JsonProcessingException;
import dev.michalzub.revup.reservation.ReservationModel;
import lombok.RequiredArgsConstructor;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.stereotype.Service;

import java.util.logging.Logger;

@RequiredArgsConstructor
@Service
public class RabbitQueueService {

  private final RabbitTemplate rabbitTemplate;
  private static final Logger logger = Logger.getLogger(ReservationEventPublisher.class.getName());


  public void publishReservationEvent(ReservationModel reservation) throws JsonProcessingException {
    // Tworzenie obiektu DTO z informacjami o rezerwacji
    ReservationEventDTO reservationEventDTO = new ReservationEventDTO();
    reservationEventDTO.setUserId(reservation.getId());
    reservationEventDTO.setStartDate(reservation.getReservationDetails().getStartDate());
    reservationEventDTO.setEndDate(reservation.getReservationDetails().getEndDate());
    reservationEventDTO.setMotorcycleId(reservation.getMotorcycle().getId());

    // Wysłanie zdarzenia do kolejki RabbitMQ
    rabbitTemplate.convertAndSend("reservation.exchange", "reservation.created", reservationEventDTO.toJson());
    logger.info("Utworzono nową rezerwację: " + reservation.toString());
  }
}
