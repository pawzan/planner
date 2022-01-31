package com.example.planner;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface DemandRepository extends JpaRepository<Demand, Long> {

    @Query(value = "SELECT * FROM zapotrzebowanie WHERE zapotrzebowanie_id_uzytkownika=?1 ", nativeQuery=true)
    public List<Demand> listAllDemand(User user);


}
