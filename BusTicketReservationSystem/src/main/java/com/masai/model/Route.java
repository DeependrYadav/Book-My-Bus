package com.masai.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Route {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer routeId;
	
	private String routeFrom;
	
	private String routeTo;
	
	private Integer distance;
	
	@JsonIgnore
	@OneToMany(cascade = CascadeType.ALL,mappedBy = "route")
	private List<Bus> buslist;



//	public Route(Integer routeId, String routeFrom, String routeTo, Integer distance, List<Bus> buslist) {
//		super();
//		this.routeId = routeId;
//		this.routeFrom = routeFrom;
//		this.routeTo = routeTo;
//		this.distance = distance;
//		this.buslist = buslist;
//	}

	public Route(Integer routeId, String routeFrom, String routeTo, Integer distance, List<Bus> buslist) {
		super();
		this.routeId = routeId;
		this.routeFrom = routeFrom;
		this.routeTo = routeTo;
		this.distance = distance;
		this.buslist = buslist;
	}
	
}
