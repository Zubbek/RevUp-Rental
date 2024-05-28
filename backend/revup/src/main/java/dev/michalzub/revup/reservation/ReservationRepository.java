package dev.michalzub.revup.reservation;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

public interface ReservationRepository extends JpaRepository<ReservationModel, Integer> {
  List<ReservationModel> findByMotorcycleId(Integer motorcycleId);

  @Query("SELECT r FROM ReservationModel r WHERE r.motorcycle.id = :motorcycleId AND " +
    "(r.reservationDetails.startDate < :endDate AND r.reservationDetails.endDate > :startDate)")
  List<ReservationModel> findConflictingReservations(Integer motorcycleId, LocalDate startDate, LocalDate endDate);
}
