package com.masai.model;

import java.time.LocalTime;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Entity
@Data
public class Bus {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer busId;
	
	private String busName;
	
	private String driverName;
	
	private String busType;
	
	private String routeForm;
	
	private String routeTo;
	
	private LocalTime arrivalTime;
	
	private LocalTime departureTime;
	
	private Integer seats;
	
	private Integer availabeSeats;

	@ManyToOne
	@JsonIgnore
	private Route route;

	@Override
	public String toString() {
		return "Bus [busId=" + busId + ", busName=" + busName + ", driverName=" + driverName + ", busType=" + busType
				+ ", routeForm=" + routeForm + ", routeTo=" + routeTo + ", arrivalTime=" + arrivalTime
				+ ", departureTime=" + departureTime + ", seats=" + seats + ", availabeSeats=" + availabeSeats + "]";
	}
	
}
