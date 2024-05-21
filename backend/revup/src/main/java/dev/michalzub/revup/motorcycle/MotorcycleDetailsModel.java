package dev.michalzub.revup.motorcycle;

import jakarta.persistence.*;

@Entity
@Table(name = "motorcycleDetails")
public class MotorcycleDetailsModel {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private Integer year;
  private String engine;
  private String power;
  private String weight;
  private String gearbox;
  private String maxSpeed;
  private String fuelConsumption;
  private String fuelCapacity;
  private String frontTyre;
  private String rearTyre;
  private String seatHeight;
  private String transmition;
  @OneToOne
  private MotorcycleModel motorcycle;
}
