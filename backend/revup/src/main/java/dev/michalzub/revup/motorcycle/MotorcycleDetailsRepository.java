package dev.michalzub.revup.motorcycle;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface MotorcycleDetailsRepository extends JpaRepository<MotorcycleDetailsModel, Integer> {

  @Transactional
  @Query("""
    SELECT md FROM MotorcycleDetailsModel md WHERE md.motorcycle.id = :motorcycleId
  """)
  Optional<MotorcycleDetailsModel> findByMotorcycleId(@Param("motorcycleId") Integer motorcycleId);
}

