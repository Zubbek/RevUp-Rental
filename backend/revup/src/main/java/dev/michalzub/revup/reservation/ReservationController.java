package dev.michalzub.revup.reservation;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/reservations")
public class ReservationController {

  private final ReservationService reservationService;

  @PostMapping("/create")
  public ResponseEntity<String> createReservation(@RequestBody ReservationRequest request) {
    String result = reservationService.createReservation(request);

    if (result.equals("Reservation created successfully")) {
      return ResponseEntity.ok(result);
    } else {
      return ResponseEntity.badRequest().body(result);
    }
  }

  @GetMapping("/available-dates/{motorcycleId}")
  public ResponseEntity<List<LocalDateTime>> getAvailableDates(@PathVariable Integer motorcycleId) {
    List<LocalDateTime> unavailableDates = reservationService.getAvailableDates(motorcycleId);
    return ResponseEntity.ok(unavailableDates);
  }
}
