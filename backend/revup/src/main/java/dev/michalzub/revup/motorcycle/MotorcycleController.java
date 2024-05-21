package dev.michalzub.revup.motorcycle;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class MotorcycleController {

  private final MotorcycleService motorcycleService;

//  @GetMapping("/home")
//  public ResponseEntity<List<MotorcycleDto>> getMotorcyclesByCategory() {
//    List<MotorcycleDto> motorcyclesByCategory = motorcycleService.getMotorcycleForEachCategory();
//    return ResponseEntity.ok(motorcyclesByCategory);
//  }
//
//  @GetMapping("/motorcycle/{category}")
//  public ResponseEntity<List<MotorcycleDto>> getMotorcyclesFromCategory(@PathVariable String category) {
//    List<MotorcycleDto> motorcycles = motorcycleService.getMotorcyclesByCategory(category);
//    return ResponseEntity.ok(motorcycles);
//  }
  @GetMapping("/home")
  public ResponseEntity<List<MotorcycleModel>> getMotorcyclesByCategory() {
    List<MotorcycleModel> motorcyclesByCategory = motorcycleService.getMotorcycleForEachCategory();
    return ResponseEntity.ok(motorcyclesByCategory);
  }

  @GetMapping("/motorcycle/{category}")
  public ResponseEntity<List<MotorcycleModel>> getMotorcyclesFromCategory(@PathVariable String category) {
    List<MotorcycleModel> motorcycles = motorcycleService.getMotorcyclesByCategory(category);
    return ResponseEntity.ok(motorcycles);
  }
}
