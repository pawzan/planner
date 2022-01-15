package com.example.planner;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface DemandRepository extends JpaRepository<Demand, Long> {

}
