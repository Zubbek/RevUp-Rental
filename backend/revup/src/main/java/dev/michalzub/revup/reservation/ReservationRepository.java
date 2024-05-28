package dev.michalzub.revup.reservation;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDateTime;
import java.util.List;

public interface ReservationRepository extends JpaRepository<ReservationModel, Integer> {

  @Query("SELECT r FROM ReservationModel r WHERE r.motorcycle.id = :motorcycleId AND " +
    "(r.reservationDetails.startDate < :endDate AND r.reservationDetails.endDate > :startDate)")
  List<ReservationModel> findConflictingReservations(Integer motorcycleId, LocalDateTime startDate, LocalDateTime endDate);

  @Query("SELECT r.reservationDetails.startDate, r.reservationDetails.endDate FROM ReservationModel r WHERE r.motorcycle.id = :motorcycleId")
  List<LocalDateTime> findUnavailableDates(Integer motorcycleId);
}
