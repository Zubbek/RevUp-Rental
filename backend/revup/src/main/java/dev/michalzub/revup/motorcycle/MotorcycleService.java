package dev.michalzub.revup.motorcycle;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MotorcycleService {
  private final MotorcycleRepository motorcycleRepository;
  private final MotorcycleDetailsRepository motorcycleDetailsRepository;

  public List<MotorcycleModel> getMotorcycleForEachCategory() {
    return motorcycleRepository.findAll();
  }

  public List<MotorcycleModel> getMotorcyclesByCategory(String category) {
    return motorcycleRepository.findByCategory(category);
  }
  public Optional<MotorcycleDetailsModel> getMotorcycleSpecByMotorcycleId(Integer id) {
    return motorcycleDetailsRepository.findByMotorcycleId(id);
  }
}
