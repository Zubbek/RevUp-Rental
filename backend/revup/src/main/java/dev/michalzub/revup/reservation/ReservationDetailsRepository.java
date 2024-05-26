package dev.michalzub.revup.reservation;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReservationDetailsRepository extends JpaRepository<ReservationDetailsModel, Integer> {
}
