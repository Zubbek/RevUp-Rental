package dev.michalzub.revup.reservation;

import dev.michalzub.revup.RabbitQueue.ReservationEventDTO;
import dev.michalzub.revup.RabbitQueue.ReservationEventPublisher;
import dev.michalzub.revup.motorcycle.MotorcycleModel;
import dev.michalzub.revup.motorcycle.MotorcycleRepository;
import dev.michalzub.revup.user.UserModel;
import dev.michalzub.revup.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.*;

@RequiredArgsConstructor
@Service
public class ReservationService {

  private final ReservationRepository reservationRepository;
  private final MotorcycleRepository motorcycleRepository;
  private final UserRepository userRepository;
  private final ReservationDetailsRepository reservationDetailsRepository;
  private final ReservationEventPublisher reservationEventPublisher;

  public ResponseEntity<String> createReservation(ReservationRequest request) {
    Optional<MotorcycleModel> motorcycleOpt = motorcycleRepository.findById(request.getMotorcycleId());
    Optional<UserModel> userOpt = userRepository.findByEmail(request.getCustomerEmail());

    if (motorcycleOpt.isEmpty()) {
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid motorcycle ID");
    } else if (userOpt.isEmpty()) {
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Wrong email address");
    }

    MotorcycleModel motorcycle = motorcycleOpt.get();
    UserModel user = userOpt.get();

    List<ReservationModel> conflictingReservations = reservationRepository.findConflictingReservations(
      motorcycle.getId(), request.getStartDate(), request.getEndDate());

    if (!conflictingReservations.isEmpty()) {
      throw new ResponseStatusException(HttpStatus.CONFLICT, "Motorcycle is already reserved for the requested period");
    }

    ReservationDetailsModel details = new ReservationDetailsModel();
    details.setCustomerName(request.getCustomerName());
    details.setCustomerSurname(request.getCustomerSurname());
    details.setCustomerPhone(request.getCustomerPhone());
    details.setStartDate(request.getStartDate().plusDays(1));
    details.setEndDate(request.getEndDate().plusDays(1));
    details.setTotalPrice(request.getTotalPrice());

    ReservationModel reservation = new ReservationModel();
    reservation.setUser(user);
    reservation.setMotorcycle(motorcycle);
    reservation.setReservationDetails(details);

    details.setReservation(reservation);

    reservationRepository.save(reservation);
    reservationDetailsRepository.save(details);

    reservationEventPublisher.publishReservationEvent(mapReservationToDTO(reservation));

    return new ResponseEntity<>("Reservation created successfully", HttpStatus.CREATED);
  }

  public List<LocalDate> getAvailableDates(Integer motorcycleId) {
    List<ReservationModel> reservations = reservationRepository.findByMotorcycleId(motorcycleId);
    Set<LocalDate> unavailableDates = new HashSet<>();
    for (ReservationModel reservation : reservations) {
      LocalDate start = reservation.getReservationDetails().getStartDate();
      LocalDate end = reservation.getReservationDetails().getEndDate();
      while (!start.isAfter(end)) {
        unavailableDates.add(start);
        start = start.plusDays(1);
      }
    }
    // Assuming we are checking availability for the next 6 months
    LocalDate today = LocalDate.now();
    LocalDate sixMonthsLater = today.plusMonths(6);
    List<LocalDate> availableDates = new ArrayList<>();
    while (!today.isAfter(sixMonthsLater)) {
      if (!unavailableDates.contains(today)) {
        availableDates.add(today);
      }
      today = today.plusDays(1);
    }
    return availableDates;
  }

  private ReservationEventDTO mapReservationToDTO(ReservationModel reservation) {
    ReservationEventDTO dto = new ReservationEventDTO();
    dto.setMotorcycleId(reservation.getMotorcycle().getId());
    dto.setUserId(reservation.getUser().getId());
    dto.setCustomerName(reservation.getReservationDetails().getCustomerName());
    dto.setCustomerSurname(reservation.getReservationDetails().getCustomerSurname());
    dto.setCustomerPhone(reservation.getReservationDetails().getCustomerPhone());
    dto.setStartDate(reservation.getReservationDetails().getStartDate());
    dto.setEndDate(reservation.getReservationDetails().getEndDate());
    dto.setTotalPrice(reservation.getReservationDetails().getTotalPrice());
    return dto;
  }
}

