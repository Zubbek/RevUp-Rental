package dev.michalzub.revup.reservation;

import dev.michalzub.revup.motorcycle.MotorcycleModel;
import dev.michalzub.revup.motorcycle.MotorcycleRepository;
import dev.michalzub.revup.user.UserModel;
import dev.michalzub.revup.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class ReservationService {

  private final ReservationRepository reservationRepository;
  private final ReservationDetailsRepository reservationDetailsRepository;
  private final MotorcycleRepository motorcycleRepository;
  private final UserRepository userRepository;

  public String createReservation(ReservationRequest request) {
    Optional<MotorcycleModel> motorcycleOpt = motorcycleRepository.findById(request.getMotorcycleId());
    Optional<UserModel> userOpt = userRepository.findById(request.getUserId());

    if (motorcycleOpt.isEmpty() || userOpt.isEmpty()) {
      return "Invalid motorcycle or user ID";
    }

    MotorcycleModel motorcycle = motorcycleOpt.get();
    UserModel user = userOpt.get();

    // Check if motorcycle is available in the requested period
    List<ReservationModel> conflictingReservations = reservationRepository.findConflictingReservations(
      motorcycle.getId(), request.getStartDate(), request.getEndDate());

    if (!conflictingReservations.isEmpty()) {
      return "Motorcycle is already reserved for the requested period";
    }

    ReservationDetailsModel details = new ReservationDetailsModel();
    details.setCustomerName(request.getCustomerName());
    details.setCustomerSurname(request.getCustomerSurname());
    details.setCustomerPhone(request.getCustomerPhone());
    details.setStartDate(request.getStartDate());
    details.setEndDate(request.getEndDate());
    details.setTotalPrice(request.getTotalPrice());

    ReservationModel reservation = new ReservationModel();
    reservation.setUser(user);
    reservation.setMotorcycle(motorcycle);
    reservation.setReservationDetails(details);

    details.setReservation(reservation);

    reservationRepository.save(reservation);

    return "Reservation created successfully";
  }

  public List<LocalDateTime> getAvailableDates(Integer motorcycleId) {
    return reservationRepository.findUnavailableDates(motorcycleId);
  }
}
