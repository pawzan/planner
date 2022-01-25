package com.example.planner;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface CalorieRepository extends JpaRepository<Calorie, Long> {
//    public List<Calorie> findAllByUserAndData_dodania(User user, String dates);

    @Query(value = "SELECT * FROM posilki WHERE nazwa LIKE %?1% LIMIT 0,1", nativeQuery=true)
    public List<Calorie> listAll(String keyword);

    @Query(value = "SELECT * FROM posilki WHERE data_dodania=?1 and posilki_id_uzytkownika=?2 ", nativeQuery=true)
    public List<Calorie> listAllDate(String dates, User user);



}
