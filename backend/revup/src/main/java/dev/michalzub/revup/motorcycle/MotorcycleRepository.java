package dev.michalzub.revup.motorcycle;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MotorcycleRepository extends JpaRepository<MotorcycleModel, Integer> {
  List<MotorcycleModel> findByCategory(String category);
}
