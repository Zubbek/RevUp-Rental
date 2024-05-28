package dev.michalzub.revup.RabbitQueue;

import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ReservationEventPublisher {

  private final AmqpTemplate amqpTemplate;

  @Autowired
  public ReservationEventPublisher(AmqpTemplate amqpTemplate) {
    this.amqpTemplate = amqpTemplate;
  }

  public void publishReservationEvent(ReservationEventDTO reservation) {
    amqpTemplate.convertAndSend("reservationExchange", "reservation.created", reservation);
  }
}
