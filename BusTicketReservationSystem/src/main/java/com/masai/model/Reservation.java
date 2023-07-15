package com.masai.model;

import java.time.LocalDate;
import java.time.LocalTime;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.Future;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
//import com.masai.exception.CustomDateDeserializer;

@Entity
@Data
@NoArgsConstructor
@ToString
public class Reservation {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer reservationId;
	
	@JsonIgnore
	private String reservationStatus;
	
	@JsonIgnore
	private String reservationType;
	
	@Future(message = "Date should not be in past *")
//	@NotNull(message = "Reservation Date is mandatory *")
	@JsonFormat(pattern = "yyyy-MM-dd", shape = Shape.STRING)
	private LocalDate reservationDate;
	
	
//	@NotNull(message = "Reservation Time is mandatory *")
//	@JsonFormat(pattern = "hh-mm-ss", shape = Shape.STRING)
	@JsonIgnore
	private LocalTime reservationTime;
	
//	@NotNull(message = "Reservation source is mandatory *")
	private String source;
	
//	@NotBlank(message = "Reservation destination not be ramain empty *")
//	@NotNull(message = "Reservation destination is mandatory *")
	private String destination;
	
	

	@JsonIgnore
	@OneToOne
	private Bus bus;


	public Reservation(Integer reservationId, String reservationStatus, String reservationType,
			LocalDate reservationDate, LocalTime reservationTime, String source, String destination) {
		super();
		this.reservationId = reservationId;
		this.reservationStatus = reservationStatus;
		this.reservationType = reservationType;
		this.reservationDate = reservationDate;
		this.reservationTime = reservationTime;
		this.source = source;
		this.destination = destination;
	}

}
