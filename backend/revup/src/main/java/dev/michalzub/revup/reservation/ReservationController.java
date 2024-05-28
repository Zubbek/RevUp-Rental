package dev.michalzub.revup.reservation;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/reservation") // Upewnij się, że URL jest poprawny
public class ReservationController {

  private final ReservationService reservationService;


  @PostMapping("/{motorcycleId}")
  public ResponseEntity<?> createReservation(@RequestBody ReservationRequest request) {
    try {
      ResponseEntity<String> result = reservationService.createReservation(request);
      return ResponseEntity.status(result.getStatusCode()).body("{\"message\": \"" + result.getBody() + "\"}");
    } catch (ResponseStatusException e) {
      return ResponseEntity.status(e.getStatusCode()).body("{\"error\": \"" + e.getReason() + "\"}");
    }
  }

  @GetMapping("/{motorcycleId}")
  public ResponseEntity<List<LocalDate>> getAvailableDates(@PathVariable Integer motorcycleId) {
    List<LocalDate> unavailableDates = reservationService.getAvailableDates(motorcycleId);
    return ResponseEntity.ok(unavailableDates);
  }
}
