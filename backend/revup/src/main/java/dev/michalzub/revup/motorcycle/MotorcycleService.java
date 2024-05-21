package dev.michalzub.revup.motorcycle;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MotorcycleService {
  private final MotorcycleRepository motorcycleRepository;

  public List<MotorcycleModel> getMotorcycleForEachCategory() {
    return motorcycleRepository.findAll();
  }

  public List<MotorcycleModel> getMotorcyclesByCategory(String category) {
    return motorcycleRepository.findByCategory(category);
  }
}
