package dev.michalzub.revup.motorcycle;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
public class MotorcycleController {

  private final MotorcycleService motorcycleService;

  @GetMapping("/home")
  public ResponseEntity<List<MotorcycleModel>> getMotorcyclesByCategory() {
    List<MotorcycleModel> motorcyclesByCategory = motorcycleService.getMotorcycleForEachCategory();
    return ResponseEntity.ok(motorcyclesByCategory);
  }

  @GetMapping("/motorcycles/{category}")
  public ResponseEntity<List<MotorcycleModel>> getMotorcyclesFromCategory(@PathVariable String category) {
    List<MotorcycleModel> motorcycles = motorcycleService.getMotorcyclesByCategory(category);
    return ResponseEntity.ok(motorcycles);
  }

//  @GetMapping("/reservation/{id}")
//  public ResponseEntity<MotorcycleDetailsModel> getMotorcycleSpecById(@PathVariable Integer id) {
//    return motorcycleService.getMotorcycleSpecByMotorcycleId(id)
//      .map(ResponseEntity::ok)
//      .orElse(ResponseEntity.notFound().build());
//  }

    @GetMapping("/motorcycle/{id}")
  public ResponseEntity<MotorcycleDetailsModel> getMotorcycleSpecById(@PathVariable Integer id) {
    return motorcycleService.getMotorcycleSpecByMotorcycleId(id)
      .map(ResponseEntity::ok)
      .orElse(ResponseEntity.notFound().build());
  }
}
